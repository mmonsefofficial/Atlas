"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { searchItems } from "@/data/search";

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return searchItems;

    return searchItems.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  useEffect(() => {
    if (!open) return;

    inputRef.current?.focus();

    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setQuery("");
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
          color: "var(--muted)",
        }}
      >
        <Search size={17} />
        Search
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" />

          <div className="fixed inset-0 z-50 flex items-start justify-center px-5 pt-24">
            <div
              ref={modalRef}
              className="w-full max-w-2xl overflow-hidden rounded-3xl border"
              style={{
                background:
                  "color-mix(in srgb, var(--surface) 90%, transparent)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div
                className="flex items-center gap-4 border-b px-6 py-5"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <Search
                  size={22}
                  style={{
                    color: "var(--muted)",
                  }}
                />

                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Atlas..."
                  className="w-full bg-transparent text-lg outline-none"
                  style={{
                    color: "var(--foreground)",
                  }}
                />
              </div>

              <div className="max-h-[420px] overflow-y-auto py-2">
                {results.length > 0 ? (
                  results.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                      }}
                      className="flex items-center justify-between px-6 py-5 transition hover:bg-black/5 dark:hover:bg-white/5"
                    >
                      <div>
                        <p
                          className="font-semibold"
                          style={{
                            color: "var(--foreground)",
                          }}
                        >
                          {item.title}
                        </p>

                        <p
                          className="mt-1 text-sm"
                          style={{
                            color: "var(--muted)",
                          }}
                        >
                          {item.category}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        style={{
                          color: "var(--muted)",
                        }}
                      />
                    </Link>
                  ))
                ) : (
                  <div
                    className="px-6 py-10 text-center"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    No results found.
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}