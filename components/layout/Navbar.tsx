"use client";

import SearchModal from "@/components/navbar/SearchModal";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Home", href: "#home" },
  { name: "Roadmaps", href: "#roadmaps" },
  { name: "Resources", href: "#resources" },
  { name: "About", href: "#about" },
];

export default function Navbar() {

  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);


  const isDark = mounted && resolvedTheme === "dark";


  return (

    <header
      className={`sticky top-0 z-50 px-3 py-3 transition-colors duration-300 ${
        isDark ? "bg-zinc-950/70" : "bg-white/80"
      } backdrop-blur-xl`}
    >

      <div className="relative mx-auto max-w-7xl">


        <div
          className={`flex h-16 items-center justify-between rounded-2xl border px-4 shadow-sm transition-colors duration-300 ${
            isDark
              ? "border-zinc-800/70 bg-zinc-950/70"
              : "border-gray-200/70 bg-white/80"
          } lg:h-20 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-6 lg:shadow-none`}
        >


          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/images/atlas-logo.png"
              alt="Atlas Logo"
              width={42}
              height={42}
              priority
            />

            <span
              className={`text-xl font-bold tracking-tight transition-colors lg:text-2xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Atlas
            </span>

          </Link>




          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 text-[15px] font-medium lg:flex">

            {links.map((link) => (

              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 ${
                  isDark
                    ? "text-zinc-400 hover:text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.name}
              </a>

            ))}

          </nav>





          <div className="hidden items-center gap-4 lg:flex">

            <SearchModal />


            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/30 shadow-sm backdrop-blur-xl transition-all duration-300 hover:bg-white/45 hover:shadow-md"
            >

              {mounted && isDark ? (

                <Sun
                  size={18}
                  className="text-yellow-400 transition-all duration-300"
                />

              ) : (

                <Moon
                  size={18}
                  className="text-gray-700 transition-all duration-300 dark:text-zinc-200"
                />

              )}

            </button>

          </div>





          {/* Mobile Menu Button */}

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-all duration-300 lg:hidden ${
              isDark
                ? "border-zinc-700 bg-zinc-900/60 text-zinc-200"
                : "border-gray-200 bg-white/80 text-gray-700"
            }`}
          >

            {menuOpen ? <X size={20} /> : <Menu size={20} />}

          </button>


        </div>





        {/* Mobile Menu */}

        {menuOpen && (

          <div
            className={`absolute left-0 right-0 top-full mt-3 rounded-2xl border p-4 shadow-xl lg:hidden ${
              isDark
                ? "border-zinc-800 bg-zinc-950"
                : "border-gray-200 bg-white"
            }`}
          >

            <div className="flex flex-col gap-2">


              {links.map((link) => (

                <a

                  key={link.name}

                  href={link.href}

                  onClick={() => setMenuOpen(false)}

                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isDark
                      ? "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-black"
                  }`}

                >

                  {link.name}

                </a>

              ))}


            </div>



            <div className="mt-4 flex items-center gap-3">


              <div className="flex-1">

                <SearchModal />

              </div>



              <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/30 shadow-sm backdrop-blur-xl transition-all duration-300 hover:bg-white/45 hover:shadow-md"
              >

                {mounted && isDark ? (

                  <Sun
                    size={18}
                    className="text-yellow-400 transition-all duration-300"
                  />

                ) : (

                  <Moon
                    size={18}
                    className="text-gray-700 transition-all duration-300 dark:text-zinc-200"
                  />

                )}

              </button>


            </div>


          </div>

        )}


      </div>

    </header>

  );

}