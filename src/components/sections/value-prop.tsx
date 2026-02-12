"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, FileSearch, ListChecks } from "lucide-react";
import { Container } from "@/components/ui/container";

const items = [
    {
        title: "Failure Prevention",
        description: "Pattern recognition across 30+ implementations so you don't repeat expensive mistakes.",
        icon: ShieldCheck,
    },
    {
        title: "Human-in-the-Loop Design",
        description: "Systems where machines handle repetition and humans handle relationships.",
        icon: Users,
    },
    {
        title: "Process Clarity First",
        description: "We document and fix broken workflows before automating them.",
        icon: FileSearch,
    },
    {
        title: "Implementation Discipline",
        description: "The 6-step methodology that addresses why 95% fail.",
        icon: ListChecks,
    },
];

export function ValueProp() {
    return (
        <section className="py-24 bg-black sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        What You&apos;re <span className="text-blue-500">Actually Buying</span>
                    </h2>
                    <div className="mt-4 space-y-1 text-lg text-zinc-400">
                        <p>Not tool training&mdash;vendors do that for free.</p>
                        <p>Not generic advice&mdash;you can get that from YouTube.</p>
                        <p className="text-zinc-300 font-medium">You&apos;re buying:</p>
                    </div>
                </div>

                <div className="mx-auto max-w-4xl grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
                        >
                            <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
