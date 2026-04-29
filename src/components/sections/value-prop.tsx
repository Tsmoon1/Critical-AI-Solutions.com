"use client";

import { motion } from "framer-motion";
import { GraduationCap, FileSearch, Code, Users } from "lucide-react";
import { Container } from "@/components/ui/container";

const items = [
    {
        title: "AI Literacy Training",
        description: "Hands-on workshops that teach teachers and administrators to use AI tools with integrity: prompting, evaluation, and ethical use grounded in your school's mission.",
        icon: GraduationCap,
    },
    {
        title: "Diagnostic-First Methodology",
        description: "We map your school's processes, pain points, and tool graveyard before recommending or building anything. Most EdTech fails because this step gets skipped.",
        icon: FileSearch,
    },
    {
        title: "Custom Tool Building",
        description: "Using Claude Code and modern AI development tools, we help schools build apps that fit their actual workflows instead of buying something that almost fits and costs forever.",
        icon: Code,
    },
    {
        title: "Faculty Ownership",
        description: "Teachers own the tools we build together. We train your staff to maintain, adapt, and extend what we create. No consultant dependency, no recurring license.",
        icon: Users,
    },
];

export function ValueProp() {
    return (
        <section className="py-24 bg-slate-950 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        What You&apos;re <span className="text-blue-500">Actually Buying</span>
                    </h2>
                    <div className="mt-4 space-y-1 text-lg text-zinc-400">
                        <p>Not another SaaS subscription. Vendors sell those forever.</p>
                        <p>Not generic AI training. YouTube does that for free.</p>
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
