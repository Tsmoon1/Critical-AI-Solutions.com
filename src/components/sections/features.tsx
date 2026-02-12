"use client";

import { motion } from "framer-motion";
import {
    Banknote,
    Flame,
    Clock,
    Database,
    ArrowLeftRight,
    TrendingUp,
    Archive,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "The Money Trail",
        description: "We start where your cash actually flows. How do customers find you? What's the exact path from first contact to payment?",
        icon: Banknote,
        className: "md:col-span-1",
    },
    {
        title: "The Pain Points",
        description: "What tasks do you dread? What do you redo most often? That's where automation either saves you or makes things worse.",
        icon: Flame,
        className: "md:col-span-1",
    },
    {
        title: "The Time Thieves",
        description: "We analyze your day for you, hour by hour. Where did your time really go? The difference between perceived and actual time allocation can tell you everything.",
        icon: Clock,
        className: "md:col-span-1",
    },
    {
        title: "The Data Desert",
        description: "We help you determine what decisions you make on gut feelings versus real data. For example, how do you know when to reorder inventory? Measurable data is useful data.",
        icon: Database,
        className: "md:col-span-2",
    },
    {
        title: "The Handoff Disasters",
        description: "How often does your information pass from one person to another? This is where something often gets lost? We help you map those transitions.",
        icon: ArrowLeftRight,
        className: "md:col-span-1",
    },
    {
        title: "The Growth Ceiling",
        description: "What would break first if you doubled your customer base tomorrow? The constraint that would snap under 2x load is probably already groaning under 1x.",
        icon: TrendingUp,
        className: "md:col-span-1",
    },
    {
        title: "The Tool Graveyard",
        description: "What software did you buy that nobody uses? That's not a tool problem—that's a process problem. We make sure it doesn't happen again.",
        icon: Archive,
        className: "md:col-span-2",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-zinc-950 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        The Questions Nobody Else Asks{" "}
                        <span className="text-blue-500">Before Selling You Tools</span>
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
