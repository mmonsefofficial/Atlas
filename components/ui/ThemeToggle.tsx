"use client";
import {Moon, Sun} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle(){
    const{resolvedTheme, setTheme} = useTheme();
    const[mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    }, []);
    
    if(!mounted) return null;
    const dark = resolvedTheme === "dark";
    return(
        <button
        onClick={()=> setTheme(dark? "light" : "dark")}
        className="
        flex h-11 w-11 items-center justify-center
        rounded-xl
        border
        border-gray-200
        bg-white
        transition-all
        hover:scale-105
        hover:shadow-lg
        dark:border-zinc-700
        dark:bg-zinc-900
        "
        >
            {dark ?(
                <Sun className="h-5 w-5 text-yellow-400" />
            ):(
                <Moon className="h-5 w-5 text-slate-700" />
            )}
        </button>
    );
}