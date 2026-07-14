"use client";

import Image from "next/image";
import Link from "next/link";

import {Search, Moon} from "lucide-react";

const links = [
    {name: "Explore", href: "/explore" },
    {name: "Roadmaps", href: "/roadmaps" },
    {name: "Resources", href: "/resources" },
    {name: "Blog", href: "/blog" },
    {name: "About", href: "/about" }
];

export default function Navbar(){
    return(
        <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                {/*logo*/}
                <Link href="/" className="flex items-center gap-3">
                <Image 
                src="/images/atlas-logo.png"
                alt="Atlas Logo"
                width={42}
                height={42}
                priority
                />
                <span className="text-2xl font-bold tracking-tight">
                    Atlas
                </span>
                </Link>
                {/*navigations*/}
                <nav className="hidden items-center gap-10 text-[15px] font-medium text-gray-600 lg:flex">
                    {links.map((link)=>(
                        <Link 
                        key={link.name}
                        href={link.href}
                        className="transition-colors duration-200 hover:text-black"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                {/*Right side*/}
                <div className="flex items-center gap-4">
                <button type="button" aria-label="Search" className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-500 transition hover:bg-white">
                    <Search size={17} />
                    Search
                    </button>
                <button type="button" aria-label="Toggle theme" className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white transition hover:bg-gray-100">
                    <Moon size={18} />
                </button>
                </div>
            </div>
        </header>
    );
}