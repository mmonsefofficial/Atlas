"use client";
import{useState} from "react";
import {Plus} from "lucide-react";
import {faq} from "@/data/faq";

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return(
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
                <h2 className="text-5xl font-semibold tracking-tight">
                    Frequently Asked Questions
                </h2>
                <p className="mt-6 text-lg text-gray-500">
                    Everything you need to know before getting started.
                </p>
            </div>
            <div className="mt-20">
                {faq.map((faq, index) => {
                    const isOpen = open === index;
                    return(
                        <div 
                        key={faq.question}
                        className="border-b border-gray-200 py-6"
                        >
                        <button 
                        onClick={() =>
                            setOpen(isOpen ? null : index)
                        }
                        className="flex w-full items-center justify-between text-left"
                        >
                            <h3 className="text-xl font-medium">
                                {faq.question}
                            </h3>
                            <Plus 
                            size={24}
                            className={`transition duration-300 ${
                                isOpen ? "rotate-45" : ""
                            }`}
                            />

                            
                        </button>
                        <div 
                        className={`grid overflow-hidden transition-all duration-500 ${
                                isOpen 
                                  ? "grid-rows-[1fr] opacity-100 mt-5"
                                  : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden">
                                <p className="max-w-3xl leading-8 text-gray-500">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                    );
                })}
            </div>
          </div>
        </section>
    );
}