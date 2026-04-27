"use client";

import { motion } from "framer-motion";
import {
    BookOpen,
    Flame,
    Database,
    ArrowLeftRight,
    Archive,
    Wrench,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "The Attention Trail",
        description: "We start where teacher time and energy actually flows—not philosophically, but literally. Where do planning hours go? What consumes the most faculty meeting time? Most schools run on institutional memory disguised as process.",
        icon: BookOpen,
        className: "md:col-span-1",
    },
    {
        title: "The Friction Points",
        description: "Don't ask 'what's your biggest challenge' because you'll get aspirational answers. Ask: 'What task makes you want to quit?' 'What do you redo most often?' Pain is specific. If a teacher describes frustration in abstract terms, you haven't dug deep enough.",
        icon: Flame,
        className: "md:col-span-1",
    },
    {
        title: "The Assessment Gap",
        description: "What decisions about student progress are made on intuition versus real data? Not because intuition is wrong—experienced teachers have excellent intuition—but because it reveals where visibility is missing. 'How do you know when a student is falling behind?' If the answer is 'I just know,' you've found a gap.",
        icon: Database,
        className: "md:col-span-1",
    },
    {
        title: "The Handoff Disasters",
        description: "Every time a student's information passes from teacher to teacher, grade level to grade level, or department to department, something gets abbreviated or dropped. Map those transitions. The gaps between systems are where students fall through.",
        icon: ArrowLeftRight,
        className: "md:col-span-2",
    },
    {
        title: "The EdTech Graveyard",
        description: "What software did your school purchase that nobody actually uses? That's not a technology failure—it's a process failure. The tool didn't fit the real workflow, or it solved a problem the school didn't really have. Understanding the graveyard is how you avoid filling it again.",
        icon: Archive,
        className: "md:col-span-1",
    },
    {
        title: "The Missing Tool",
        description: "What workarounds do your teachers run because no existing app does exactly what they need? A spreadsheet held together with prayer, a Google Form that almost works, a process nobody has documented. That workaround is a tool waiting to be built—and with Claude Code, building it is now within reach.",
        icon: Wrench,
        className: "md:col-span-3",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-slate-900 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        The Questions Nobody Asks{" "}
                        <span className="text-blue-500">Before Implementing AI</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={cn(
                                "group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 hover:bg-zinc-900 transition-colors",
                                feature.className
                            )}
                        >
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-white">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
