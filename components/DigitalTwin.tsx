"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What's your experience with generative AI?",
  "Tell me about your work at JPMorgan Chase.",
  "What's your strongest technical skill?",
  "Do you have a security clearance?",
];

const GREETING =
  "Hi — I'm Umar's digital twin. Ask me anything about his career, projects, or skills, and I'll answer as if I were him.";

export function DigitalTwin() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) {
        throw new Error("Request failed");
      }

      // Add an empty assistant message we stream into.
      setMessages((m) => [...m, { role: "assistant", content: "" }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Sorry — I couldn't reach the server just now. Please email odulaja1@gmail.com and I'll get right back to you.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Launcher */}
      <motion.button
        aria-label="Chat with Umar's digital twin"
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 18 }}
        className="fixed bottom-5 right-5 z-[70] flex items-center gap-2.5 rounded-full bg-accent px-5 py-3.5 font-semibold text-ink-950 shadow-[0_20px_60px_-20px_rgba(55,230,180,0.7)] transition-transform hover:scale-105"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-950/60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ink-950" />
        </span>
        <span className="text-sm">{open ? "Close" : "Chat with my AI twin"}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="glass fixed bottom-24 right-5 z-[70] flex h-[min(70vh,560px)] w-[min(92vw,400px)] flex-col overflow-hidden rounded-3xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-ink-900/80 px-5 py-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                ◆
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                  Umar&apos;s Digital Twin
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </div>
                <div className="truncate font-mono text-[10px] uppercase tracking-widest text-white/40">
                  Powered by Claude
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              <Bubble role="assistant" content={GREETING} />

              {messages.length === 0 && (
                <div className="space-y-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="block w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-left text-sm text-white/70 transition-colors hover:border-accent/40 hover:text-white"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((m, i) => (
                <Bubble key={i} role={m.role} content={m.content} />
              ))}

              {loading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex gap-1.5 pl-1">
                  <Dot /> <Dot delay={0.15} /> <Dot delay={0.3} />
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-white/10 bg-ink-900/80 p-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my experience…"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent/50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-accent text-ink-950 transition-opacity disabled:opacity-40"
              >
                ↑
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Bubble({ role, content }: { role: "user" | "assistant"; content: string }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "rounded-br-md bg-accent text-ink-950"
            : "rounded-bl-md border border-white/10 bg-ink-800/70 text-white/85"
        }`}
      >
        {content || "…"}
      </div>
    </div>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      className="h-2 w-2 rounded-full bg-accent/70"
      animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
      transition={{ duration: 1, repeat: Infinity, delay }}
    />
  );
}
