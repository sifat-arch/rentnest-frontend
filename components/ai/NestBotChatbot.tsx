"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import Link from "next/link";
import {
  Sparkles,
  X,
  Send,
  Loader2,
  Building2,
  Bot,
  User,
  ArrowRight,
  Maximize2,
  Minimize2,
  HelpCircle,
} from "lucide-react";
import { askNestBotAction, ChatHistoryItem } from "@/service/aiService";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  "Show 3-bed apartments in Banani",
  "Best homes under ৳40,000",
  "How does booking & security deposit work?",
  "How do landlords list properties?",
];

export default function NestBotChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I am **NestBot**, your AI concierge for RentNest. 🏡\n\nI can help you search live rental properties across Dhaka, give pricing insights, explain lease terms, or guide you on listing your own property. How can I assist you today?",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (userMessage?: string) => {
    const textToSend = (userMessage || input).trim();
    if (!textToSend || isPending) return;

    const newMsg: Message = {
      role: "user",
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    startTransition(async () => {
      // Build history for context
      const history: ChatHistoryItem[] = messages.slice(-6).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await askNestBotAction(textToSend, history);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            res.reply ||
            "I'm sorry, I couldn't process that right now. Please try asking again!",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    });
  };

  // Helper to render markdown links and bold formatting nicely
  const renderFormattedContent = (content: string) => {
    // Replace [Text](url) with clickable links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }
      const label = match[1];
      const url = match[2];
      parts.push(
        <Link
          key={match.index}
          href={url}
          onClick={() => {
            if (url.startsWith("/properties/")) {
              setIsOpen(false);
            }
          }}
          className="inline-flex items-center gap-1 font-semibold text-[#b77940] hover:text-[#18342d] underline underline-offset-2 transition-colors mx-0.5"
        >
          {label}
          <ArrowRight className="size-3 inline" />
        </Link>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    // Split paragraphs and bold
    return (
      <div className="space-y-2 text-xs sm:text-[13px] leading-relaxed">
        {parts.map((part, idx) => {
          if (typeof part === "string") {
            return (
              <span key={idx} className="whitespace-pre-wrap">
                {part.split("**").map((subPart, subIdx) =>
                  subIdx % 2 === 1 ? (
                    <strong key={subIdx} className="font-semibold text-[#18342d]">
                      {subPart}
                    </strong>
                  ) : (
                    subPart
                  )
                )}
              </span>
            );
          }
          return part;
        })}
      </div>
    );
  };

  return (
    <>
      {/* FLOATING TRIGGER BUTTON (Fixed at Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open RentNest AI Assistant"
            className="group relative flex items-center gap-2.5 rounded-full bg-[#18342d] px-4 py-3 text-white shadow-xl ring-2 ring-[#d9a66b]/60 transition-all duration-300 hover:scale-105 hover:bg-[#122822] hover:shadow-2xl active:scale-95 cursor-pointer"
          >
            <div className="relative">
              <span className="grid size-7 place-items-center rounded-full bg-[#d9a66b] text-[#18342d]">
                <Sparkles className="size-4 animate-pulse" />
              </span>
              <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-400 ring-2 ring-[#18342d]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold tracking-tight text-white group-hover:text-[#e5bd8b] transition-colors">
                NestBot AI
              </span>
              <span className="text-[10px] text-white/70">Rental Concierge</span>
            </div>
          </button>
        )}
      </div>

      {/* CHATBOT MODAL POPUP */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col w-[94vw] sm:w-[400px] h-[550px] max-h-[85vh] rounded-3xl border border-[#e7e5df] bg-white shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#18342d] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-[#d9a66b] text-[#18342d] shadow-xs">
                <Bot className="size-5" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold tracking-tight text-white">
                    NestBot AI
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-semibold text-emerald-300 border border-emerald-500/30">
                    Online
                  </span>
                </div>
                <p className="text-[10px] text-white/70">
                  Live Properties • Intelligent Search
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
              aria-label="Close chat"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Quick Prompts Bar (when only 1 or 2 messages exist) */}
          {messages.length <= 2 && (
            <div className="border-b border-[#f0eee6] bg-[#f7f6f2] px-3.5 py-2">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#8a9691] mb-1.5 flex items-center gap-1">
                <Sparkles className="size-3 text-[#d9a66b]" />
                Suggested questions:
              </p>
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {QUICK_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="shrink-0 rounded-full border border-[#e7e5df] bg-white px-2.5 py-1 text-[11px] font-medium text-[#18342d] hover:border-[#18342d] hover:bg-[#18342d] hover:text-white transition-all cursor-pointer shadow-2xs"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#fdfdfc]">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.role === "assistant" && (
                  <div className="size-7 rounded-full bg-[#18342d] text-[#d9a66b] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="size-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl p-3.5 shadow-2xs ${
                    m.role === "user"
                      ? "bg-[#18342d] text-white rounded-br-xs"
                      : "bg-white border border-[#e7e5df] text-[#1c2925] rounded-bl-xs"
                  }`}
                >
                  {renderFormattedContent(m.content)}
                  <div
                    className={`mt-1.5 text-[9px] text-right ${
                      m.role === "user" ? "text-white/60" : "text-[#8a9691]"
                    }`}
                  >
                    {m.timestamp}
                  </div>
                </div>

                {m.role === "user" && (
                  <div className="size-7 rounded-full bg-[#e5bd8b] text-[#18342d] flex items-center justify-center shrink-0 mt-0.5">
                    <User className="size-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isPending && (
              <div className="flex items-center gap-2 text-xs text-[#64716c] bg-white border border-[#e7e5df] rounded-2xl p-3 w-fit">
                <Loader2 className="size-3.5 animate-spin text-[#d9a66b]" />
                <span>NestBot is searching available homes &amp; insights...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="border-t border-[#e7e5df] bg-white p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about properties, budget, rent..."
                disabled={isPending}
                className="flex-1 rounded-full border border-[#e7e5df] bg-[#f7f6f2] px-4 py-2.5 text-xs text-[#1c2925] placeholder:text-[#9aa5a1] focus:border-[#18342d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18342d]/10"
              />
              <button
                type="submit"
                disabled={!input.trim() || isPending}
                className="size-9 rounded-full bg-[#18342d] text-[#e5bd8b] flex items-center justify-center shadow-xs transition-transform hover:scale-105 hover:bg-[#122822] disabled:opacity-40 disabled:hover:scale-100 cursor-pointer shrink-0"
                aria-label="Send message"
              >
                <Send className="size-4" />
              </button>
            </form>
            <p className="mt-1.5 text-center text-[10px] text-[#8a9691]">
              Powered by Groq AI • Real-time database grounding
            </p>
          </div>
        </div>
      )}
    </>
  );
}
