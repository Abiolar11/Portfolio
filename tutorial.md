# Building a Portfolio Website with an AI Chatbot — A Beginner's Tutorial

Welcome! This document walks you through **everything** that was built for your
personal portfolio site — what each piece of technology does, how the site is
put together, and a guided tour of the actual code. It assumes you have **never
written frontend code before**, so we'll explain the jargon as we go.

Take your time. You do not need to memorize any of this — think of it as a map
you can come back to whenever you want to change something.

---

## Table of contents

1. [The big picture (what is a website, really?)](#1-the-big-picture)
2. [The technologies we used](#2-the-technologies-we-used)
3. [How the project is organized (the folders)](#3-how-the-project-is-organized)
4. [A high-level walkthrough (how a page appears on screen)](#4-a-high-level-walkthrough)
5. [Detailed code review](#5-detailed-code-review)
   - [5.1 The content file — one place for all your words](#51-the-content-file)
   - [5.2 The layout — the frame around every page](#52-the-layout)
   - [5.3 The page — assembling the sections](#53-the-page)
   - [5.4 A section component — the Hero](#54-a-section-component--the-hero)
   - [5.5 Reusable animation — the Reveal component](#55-reusable-animation)
   - [5.6 Styling with Tailwind CSS](#56-styling-with-tailwind-css)
   - [5.7 The AI chatbot — front end (the chat window)](#57-the-ai-chatbot--front-end)
   - [5.8 The AI chatbot — back end (the API route)](#58-the-ai-chatbot--back-end)
6. [Five ways the code could be improved](#6-five-ways-the-code-could-be-improved)
7. [Glossary](#7-glossary)

---

## 1. The big picture

When you open a website, three kinds of code work together in your browser:

| Language | Job | Real-world analogy |
| --- | --- | --- |
| **HTML** | The *structure* and content (headings, paragraphs, buttons) | The skeleton |
| **CSS** | The *styling* (colors, spacing, fonts, layout) | The skin and clothes |
| **JavaScript** | The *behavior* (things that move, respond to clicks, load data) | The muscles |

A modern site like yours doesn't write these three by hand in separate files.
Instead we use **tools that generate them for us** from cleaner, more organized
code. That's what the technologies below are for.

There are also **two "sides"** to your site:

- **The front end** — everything that runs in the visitor's browser (what they
  see and click).
- **The back end** — code that runs on a *server* (a computer you control), used
  for things the browser shouldn't do directly — like talking to the Claude AI
  with your secret API key. Your chatbot uses both sides.

---

## 2. The technologies we used

Here's every tool in the project and, in plain English, why it's there.

### Next.js (the framework)
**Next.js** is the backbone. A "framework" is a big toolkit that handles the
boring, hard parts of building a website so you can focus on *your* content. It
gives us:
- A **file-based router** — the folder structure decides what the web addresses
  (URLs) are. (More on this below.)
- The ability to write both **front-end** pages and **back-end** code (like our
  chatbot's server) in one project.
- Automatic performance optimizations.

### React (the UI library)
**React** is the tool Next.js uses to build user interfaces. Its big idea is
**components**: reusable building blocks. Instead of one giant HTML file, you
build small pieces — a `Nav`, a `Hero`, a `Contact` — and snap them together
like LEGO. Each component is a function that returns something that *looks like*
HTML.

### TypeScript (the language)
**TypeScript** is JavaScript with **type checking**. "Types" are labels that say
what kind of value something is — text, number, true/false, etc. If you
accidentally use text where a number belongs, TypeScript warns you *before* the
site runs, catching bugs early. Files end in `.ts` or `.tsx` (the `x` means "this
file also contains HTML-like markup").

### Tailwind CSS (the styling)
Normally you'd write CSS in separate files. **Tailwind** lets you style elements
by adding short **class names** directly on them — `text-white`, `rounded-full`,
`px-6` (padding on the x-axis). It's faster and keeps the style right next to the
thing it styles.

### Framer Motion (the animations)
**Framer Motion** is a library that makes things move smoothly — fade in, slide
up, glow — with very little code. It's why sections gracefully appear as you
scroll.

### The Anthropic SDK (the AI)
The **`@anthropic-ai/sdk`** package is the official tool for talking to **Claude**
(the AI model made by Anthropic). Your "digital twin" chatbot uses it to send
questions to Claude and stream the answers back.

### Node.js and npm (the plumbing)
- **Node.js** lets JavaScript run *outside* a browser — it's what runs the back
  end and the build tools.
- **npm** ("Node Package Manager") downloads and manages the libraries above.
  When you ran `npm install`, it read `package.json` and fetched everything.

---

## 3. How the project is organized

Here are the important files and folders:

```
SITE/
├── app/                      ← pages and back-end routes live here
│   ├── layout.tsx            ← the frame wrapped around every page
│   ├── page.tsx              ← the home page (assembles all sections)
│   ├── globals.css           ← global styles + custom Tailwind helpers
│   └── api/
│       └── chat/
│           └── route.ts      ← the chatbot's BACK END (talks to Claude)
│
├── components/               ← reusable UI building blocks
│   ├── Nav.tsx               ← top navigation bar
│   ├── Hero.tsx              ← the big name/headline at the top
│   ├── About.tsx             ← "About" section + stats
│   ├── Journey.tsx           ← animated career timeline
│   ├── Skills.tsx            ← skills, education, certs, clearance
│   ├── Projects.tsx          ← project cards
│   ├── Contact.tsx           ← contact section + footer
│   ├── Reveal.tsx            ← reusable "fade-in on scroll" helper
│   ├── ScrollProgress.tsx    ← the thin progress bar at the top
│   └── DigitalTwin.tsx       ← the chatbot's FRONT END (the chat window)
│
├── lib/
│   └── content.ts            ← ALL your text/data in one place
│
├── public/
│   └── Umar-Odulaja-Resume.pdf  ← the downloadable résumé
│
├── package.json              ← lists dependencies and scripts
├── tailwind.config.ts        ← Tailwind settings (your color palette, etc.)
├── tsconfig.json             ← TypeScript settings
└── .env                      ← SECRET keys (never shared/committed)
```

**The single most important idea:** the folders inside `app/` become your web
addresses. `app/page.tsx` is your home page (`/`). `app/api/chat/route.ts`
becomes the address `/api/chat`, which your chatbot calls. This is called
**file-based routing** — the file *location* defines the URL.

---

## 4. A high-level walkthrough

Here's what happens, start to finish, when someone visits your site:

1. **They type your address.** Next.js serves the home page.
2. **`layout.tsx` runs first.** It sets up the "frame" — loads the fonts, sets
   the page title, and wraps your content. Everything shares this frame.
3. **`page.tsx` runs.** It's a simple list that stacks your sections in order:
   navigation, hero, about, journey, skills, projects, contact, footer, and the
   chatbot.
4. **Each section is a component.** Each one pulls its words from the central
   `lib/content.ts` file and returns the markup to display.
5. **Tailwind classes style everything**, and **Framer Motion animates** it as
   the visitor scrolls.
6. **The chatbot sits on top**, waiting. When the visitor asks a question, the
   front end (`DigitalTwin.tsx`) sends it to the back end (`api/chat/route.ts`),
   which asks Claude and streams the answer back word by word.

That's the whole site. The rest of this document zooms into the code.

---

## 5. Detailed code review

We'll look at real code from your project. Don't worry about understanding every
symbol — focus on the *shape* and the comments.

### 5.1 The content file

**File: `lib/content.ts`**

The smartest decision in this project: **all your words and data live in one
file**, separate from the code that displays them. This means you can update your
job history or add a skill without touching any design code.

Here's a snippet — notice it's just labeled data:

```ts
export const profile = {
  name: "Umar Odulaja",
  title: "Senior Data Scientist",
  location: "Dallas–Fort Worth, TX",
  clearance: "Active Secret Clearance",
  email: "odulaja1@gmail.com",
  linkedin: "https://linkedin.com/in/umarodulaja",
  github: "https://github.com/Abiolar11",
  resume: "/Umar-Odulaja-Resume.pdf",
  summary: "Senior Data Scientist with 8 years of experience …",
};
```

- `export` means "make this available to other files."
- `const` means "this is a constant — a named value."
- The `{ ... }` is an **object**: a labeled collection of values (like a form
  with fields). `profile.email` reads the email field.

Lists of repeated things (like jobs) are stored in **arrays** — ordered lists
wrapped in `[ ]`:

```ts
export const experience = [
  {
    company: "JPMorgan Chase",
    role: "Senior Data Scientist",
    period: "Sept 2024 — Present",
    points: [
      "Built and deployed a production LLM-powered agent …",
      "Engineered an internal multi-agent AI system …",
    ],
  },
  // …more jobs
];
```

> **Takeaway:** To change any wording on the site, you almost always edit
> `lib/content.ts` — not the components.

### 5.2 The layout

**File: `app/layout.tsx`**

This is the frame every page shares. It loads the fonts and sets the browser tab
title.

```tsx
export const metadata = {
  title: "Umar Odulaja — Senior Data Scientist",
  description: profile.summary,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

- `metadata` sets the title shown in the browser tab and in Google results.
- `RootLayout` is a **component** (a function that returns markup).
- `{children}` is a placeholder that means "insert the actual page here." So the
  layout is the picture frame, and `children` is the photo.

### 5.3 The page

**File: `app/page.tsx`**

This is delightfully short — it just stacks the sections in order:

```tsx
export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <DigitalTwin />
    </main>
  );
}
```

Each `<Hero />` is a component being used, like placing a LEGO block. Reading this
file tells you the exact order sections appear on the page. Want to move the
Skills section above Journey? Swap those two lines.

### 5.4 A section component — the Hero

**File: `components/Hero.tsx`**

The "hero" is the large banner at the top with your name. Let's see a simplified
version of how a component reads data and displays it:

```tsx
"use client";

import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <h1 className="text-white text-8xl font-bold">
        {profile.first}
        <span className="gradient-text">{profile.last}</span>
      </h1>
      <p className="text-white/70">{profile.tagline}</p>
    </section>
  );
}
```

Three things to notice:

1. **`"use client";` at the top.** This tells Next.js "this component runs in the
   browser," which is required for anything interactive or animated. (Components
   without it render on the server for speed.)
2. **`import { profile } from "@/lib/content";`** pulls in your data. The `@/`
   is a shortcut meaning "start from the project root."
3. **`{profile.first}`** — the curly braces let you drop a *value* into the
   markup. So `{profile.first}` becomes "Umar" on screen. This is the magic glue
   between your data and your design.

The real `Hero.tsx` also adds animations and the "Active Secret Clearance" badge,
but the core idea is exactly this: **read from `content.ts`, wrap in styled
markup, return it.**

### 5.5 Reusable animation

**File: `components/Reveal.tsx`**

Rather than write the same "fade in as you scroll" animation in every section, we
wrote it **once** as a reusable component and used it everywhere. This is the
heart of why components are powerful — **write once, reuse everywhere.**

```tsx
"use client";

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}          // start: invisible, 28px lower
      whileInView={{ opacity: 1, y: 0 }}        // when scrolled into view: visible
      viewport={{ once: true }}                 // only animate the first time
      transition={{ duration: 0.7, delay }}     // take 0.7 seconds
    >
      {children}
    </motion.div>
  );
}
```

- `motion.div` is a special "animatable box" from Framer Motion.
- `initial` is the starting look; `whileInView` is the look once it scrolls into
  view. Framer Motion smoothly animates between the two.
- `delay = 0` is a **default value**: if you don't pass a delay, it's 0. Passing
  different delays to stacked items makes them appear one after another (a
  "stagger" effect).

Anywhere in the site, wrapping content in `<Reveal>…</Reveal>` makes it fade up
on scroll. That consistency is what makes the site feel polished.

### 5.6 Styling with Tailwind CSS

You've seen `className="text-white text-8xl font-bold"` above. Each of those is a
Tailwind **utility class**:

| Class | Meaning |
| --- | --- |
| `text-white` | White text |
| `text-8xl` | Very large text |
| `font-bold` | Bold weight |
| `px-6` | Horizontal padding (left & right) |
| `rounded-full` | Fully rounded corners (a pill/circle) |
| `flex items-center` | Lay children in a row, vertically centered |
| `text-white/70` | White text at 70% opacity (slightly faded) |

Your custom colors (like the mint-green accent) are defined once in
`tailwind.config.ts`, so `text-accent` gives you your brand green everywhere.
A few larger custom effects (like the animated `gradient-text`) live in
`app/globals.css`.

> **Why so many tiny classes?** It looks busy at first, but it means you never
> hunt through separate style files — the styling is right there on the element,
> and it's consistent because everyone uses the same building blocks.

### 5.7 The AI chatbot — front end

**File: `components/DigitalTwin.tsx`**

This is the chat window the visitor sees. It's the most advanced component
because it has to remember the conversation and update live. Two new concepts:

**State** — a component's memory. When "state" changes, React automatically
re-draws that part of the screen. We use React's `useState` for this:

```tsx
const [messages, setMessages] = useState([]);  // the conversation so far
const [input, setInput] = useState("");         // what's typed in the box
const [loading, setLoading] = useState(false);  // are we waiting for a reply?
```

Each line creates a piece of memory and a function to change it. For example,
`setInput("hello")` updates `input` to "hello" and re-draws the input box.

**Talking to the back end and streaming the reply.** When you send a message, the
front end calls your `/api/chat` address and reads the answer *as it arrives*, so
the text appears word-by-word:

```tsx
async function send(text) {
  // 1. Add the user's message to the conversation
  const next = [...messages, { role: "user", content: text }];
  setMessages(next);
  setLoading(true);

  // 2. Send the whole conversation to our back end
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: next }),
  });

  // 3. Read the streaming reply piece by piece
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let acc = "";                                  // the answer as it grows
  while (true) {
    const { done, value } = await reader.read(); // grab the next chunk
    if (done) break;                             // stop when finished
    acc += decoder.decode(value, { stream: true });
    // update the last message on screen with the growing text
    setMessages((m) => {
      const copy = [...m];
      copy[copy.length - 1] = { role: "assistant", content: acc };
      return copy;
    });
  }
  setLoading(false);
}
```

- `async` / `await` handle things that take time (like a network request)
  without freezing the page. `await` means "pause here until this finishes."
- `fetch(...)` is how the browser sends a request to a web address.
- The `while` loop reads the reply in small chunks and keeps appending them
  (`acc += ...`), updating the screen each time. That's the "typing" effect.

The rest of the file is the visual chat window — the floating button, the message
bubbles, the suggestion chips — all built with the same components + Tailwind +
Framer Motion ideas from earlier.

### 5.8 The AI chatbot — back end

**File: `app/api/chat/route.ts`**

This is the **only** code that runs on the server, not in the browser — and for a
very important reason: **it holds your secret API key.** If this ran in the
browser, anyone could steal your key and run up charges on your account. Keeping
it server-side is the single most important security decision here.

The file has three jobs:

**1. A "system prompt" — the AI's instructions.** This is a big block of text
telling Claude *who it is* and *the facts it's allowed to use*:

```ts
const SYSTEM = `You are the "digital twin" of Umar Odulaja …
Answer questions about his career in the first person …

# Experience
## JPMorgan Chase — Senior Data Scientist (Sept 2024 – Present)
- Built and deployed a production LLM-powered agent …

# How to respond
- Speak as Umar, first person, warm and confident.
- Ground every claim in the facts above. If you don't know something,
  point them to odulaja1@gmail.com — do not invent facts.`;
```

This is why the chatbot stays on-topic and doesn't make things up — we *told* it
the rules and gave it only your real résumé facts.

**2. Checking the incoming message (never trust the internet).** Before doing
anything, we validate what was sent:

```ts
function sanitize(input) {
  if (!Array.isArray(input)) return null;        // must be a list
  const out = [];
  for (const m of input) {
    if ((m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0) {
      out.push({ role: m.role, content: m.content.slice(0, 4000) }); // cap length
    }
  }
  if (out.length === 0 || out[0].role !== "user") return null;
  return out.slice(-20);                          // keep only the last 20 messages
}
```

This protects you: it caps message length, limits how many messages we send
(which controls cost), and rejects malformed requests.

**3. Calling Claude and streaming the answer.** Finally, we send the conversation
to Claude and pipe the reply straight back to the browser:

```ts
const client = new Anthropic({ apiKey: process.env.API_KEY });

const stream = client.messages.stream({
  model: "claude-sonnet-5",           // which AI model to use
  max_tokens: 1024,                   // cap the reply length
  thinking: { type: "disabled" },     // skip deliberation for fast replies
  system: SYSTEM,                     // the instructions from step 1
  messages,                           // the conversation from step 2
});
```

- `process.env.API_KEY` reads your secret key from the `.env` file. Because
  `.env` is never uploaded to GitHub, your key stays private.
- `model: "claude-sonnet-5"` is the specific Claude model you asked for
  (Sonnet).
- `stream(...)` returns the answer in pieces, which we forward to the browser so
  it can display them live — matching the reading loop from section 5.7.

> **The mental model:** the browser (`DigitalTwin.tsx`) is the *waiter* taking the
> order; the server (`route.ts`) is the *kitchen* with the secret recipe (your
> API key) that talks to the chef (Claude). The customer never enters the
> kitchen.

---

## 6. Five ways the code could be improved

No codebase is ever "finished." Here are five honest, beginner-friendly
improvements — a self-review of the current code.

### 1. Add automatic rate limiting to the chatbot
**The issue:** Right now, anyone could send hundreds of messages to `/api/chat`
very quickly. Since each message costs money (Claude usage), a bad actor could
run up your bill. **The fix:** add "rate limiting" — a rule like "each visitor
can send at most 10 messages per minute." This is usually done with a small
library or a service (e.g. Upstash) and would live at the top of `route.ts`.

### 2. Persist the chat conversation between visits
**The issue:** If a visitor refreshes the page, the whole conversation disappears
because it only lives in the component's temporary memory (`useState`). **The
fix:** save the messages to the browser's `localStorage` (a small built-in
storage box) so they survive a refresh. This is a few lines added to
`DigitalTwin.tsx`.

### 3. Improve accessibility (a11y) for screen readers
**The issue:** Some interactive elements (like the animated timeline and the
chat's streaming text) aren't fully announced to visitors who use screen readers.
**The fix:** add ARIA attributes (e.g. `aria-live="polite"` on the chat message
area so new replies are read aloud) and make sure every button has a clear label.
This makes the site usable by everyone and is expected on professional sites.

### 4. Move the AI "system prompt" out of the code and reuse `content.ts`
**The issue:** The big block of career facts inside `route.ts` (the `SYSTEM`
text) **duplicates** information already in `lib/content.ts`. If you update a job
in `content.ts`, you must remember to also update it in `route.ts`, or the
chatbot will give outdated answers. **The fix:** generate the system prompt
*from* the `content.ts` data so there's a single source of truth. This is the
classic "Don't Repeat Yourself" principle.

### 5. Add automated tests
**The issue:** Right now, the only way to know the site works is to look at it. If
a future change accidentally breaks the contact links or the chatbot, nothing
warns you. **The fix:** add a testing tool (like Vitest or Playwright) with a few
small "tests" — e.g. "the page shows the name 'Umar Odulaja'" or "sending a chat
message returns a reply." Tests act as a safety net so you can change code
confidently.

---

## 7. Glossary

| Term | Plain-English meaning |
| --- | --- |
| **Component** | A reusable UI building block (a function that returns markup). |
| **Props** | Values you pass *into* a component to customize it (like `delay`). |
| **State** | A component's memory; changing it re-draws the screen. |
| **Framework** | A big toolkit that handles the hard parts (Next.js). |
| **Library / package** | A smaller reusable tool you install (Framer Motion, the Anthropic SDK). |
| **Front end** | Code that runs in the visitor's browser. |
| **Back end** | Code that runs on your server (e.g. the chatbot API). |
| **API** | A defined way for two programs to talk (your `/api/chat` address). |
| **API key** | A secret password that lets your code use a paid service (Claude). |
| **Routing** | Deciding which code runs for which web address. |
| **Streaming** | Sending a response in small pieces as it's produced (the typing effect). |
| **`.env`** | A file holding secret values, never shared publicly. |
| **Deploy** | Publishing your site to the internet so others can visit it. |

---

### You made it 🎉

You now have a mental map of the whole project: **data** lives in `content.ts`,
**components** display it, **Tailwind** styles it, **Framer Motion** animates it,
and a **Next.js API route** safely powers your AI chatbot with **Claude**.

The best way to learn is to change one small thing and see what happens — try
editing a line in `lib/content.ts` and refreshing the page. You can't break
anything permanently, and curiosity is the whole job.
