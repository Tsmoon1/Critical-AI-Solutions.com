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
    Globe
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "The Money Trail",
        description: "We start where your cash actually flows, not in theory, but literally. How do customers find you? What's the exact path from first contact to payment?",
        icon: Banknote,
        className: "md:col-span-1",
    },
    {
        title: "The Pain Points",
        description: "We identify the tasks that make you want to throw your computer out the window. And the tasks you redo most often?",
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
        description: "What software did you buy that nobody is using? Usually, it's not the tool; it's that the tool didn't fit the actual workflow, or nobody had time to learn it.",
        icon: Archive,
        className: "md:col-span-2",
    },
    {
        title: "Strategic Training",
        description: "Don't just build tools; build tools that leverage your team.",
        icon: Globe,
        className: "md:col-span-2",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-zinc-950 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Why <span className="text-blue-500">Critical AI?</span>
                    </h2>
                    <p className="mt-4 text-lg text-zinc-400">
                        We help you navigate the noise and build systems that actually work for your business.
                    </p>
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
