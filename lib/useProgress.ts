"use client";
import { useEffect, useState } from "react";

export type ProgressData = {
    frontend: string[];
    backend: string[];
    fullstack: string[];
    cybersecurity: string[];
     ai: string[];
  "competitive-programming": string[];
};
const STORAGE_KEY = "atlas-progress";
const defaultProgress: ProgressData = {
    frontend:[],
     backend: [],
     fullstack: [],
    cybersecurity: [],
    ai: [],
    "competitive-programming": [],
     
};
export function useProgress(){
    const[progress, setProgress]=
    useState<ProgressData>(defaultProgress);
    useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
        const parsed = JSON.parse(saved);

        setProgress({
            frontend: parsed.frontend ?? [],
            backend: parsed.backend ?? [],
            fullstack: parsed.fullstack ?? [],
            cybersecurity: parsed.cybersecurity ?? [],
            ai: parsed.ai ?? [],
            "competitive-programming":
                parsed["competitive-programming"] ?? [],
        });
    }
}, []);
    function save(updated: ProgressData){
        setProgress(updated);
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(updated)
        );
    }

    function completeTopic(
        roadmap: keyof ProgressData,
        topicId: string
    ){
        if(progress[roadmap].includes(topicId)) return;

        const updated ={
            ...progress,
            [roadmap]: [...progress[roadmap], topicId],
        };
        save(updated);
    }
    function isCompleted(
        roadmap: keyof ProgressData,
        topicId: string
    ){
        return progress[roadmap].includes(topicId);
    }
    function getCompletedCount(
        roadmap: keyof ProgressData
    ){
        return progress[roadmap].length;
    }
    return{
        progress,
        completeTopic,
        isCompleted,
        getCompletedCount,
    };
}