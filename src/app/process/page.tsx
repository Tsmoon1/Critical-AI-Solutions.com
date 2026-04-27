"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import {
    BrainCircuit,
    Rocket,
    BarChart3,
    BookOpen,
    Flame,
    Database,
    ArrowRightLeft,
    Trash2,
    Wrench,
    Globe
} from "lucide-react";

const diagnosticPoints = [
    {
        title: "The Attention Trail",
        description: "Start where teacher time and energy actually flows—not philosophically, but literally. Where do planning hours go? What consumes the most faculty meeting time? What drains teachers between 3pm and 5pm? Most schools run on institutional memory disguised as process. The people closest to students often have no documentation for what they actually do.",
        icon: BookOpen,
    },
    {
        title: "The Friction Points",
        description: "Don't ask 'what's your biggest challenge' because you'll get aspirational answers. Ask: 'What task makes you want to quit?' 'What do you redo most often?' 'What would you eliminate tomorrow if you could?' Pain is specific. If a teacher describes frustration in abstract terms, you haven't dug deep enough.",
        icon: Flame,
    },
    {
        title: "The Assessment Gap",
        description: "What decisions about student progress are made on intuition versus real data? Not because intuition is wrong—experienced teachers have excellent intuition—but because it reveals where visibility is missing. 'How do you know when a student is falling behind?' If the answer is 'I just know,' you've found a gap worth examining.",
        icon: Database,
    },
    {
        title: "The Handoff Disasters",
        description: "Every time a student's information passes from teacher to teacher, grade level to grade level, or department to department, something gets abbreviated or dropped. Map those transitions. 'How does a student's learning history travel from 6th to 7th grade?' The gaps between systems are where students fall through.",
        icon: ArrowRightLeft,
    },
    {
        title: "The EdTech Graveyard",
        description: "What software did your school purchase that nobody actually uses? This isn't a technology failure—it's a process failure. The tool didn't fit the real workflow, no one had bandwidth to implement it, or it solved a problem the school didn't really have. Understanding the graveyard is how you avoid filling it again.",
        icon: Trash2,
    },
    {
        title: "The Missing Tool",
        description: "What workarounds do your teachers run because no existing app does exactly what they need? A spreadsheet held together with prayer, a Google Form that almost works, a process nobody has documented. That workaround is a tool waiting to be built—and with Claude Code and modern AI development tools, building it is now within reach for any school.",
        icon: Wrench,
    },
    {
        title: "Strategic Training",
        description: "The best system is worthless if teachers treat it as a foreign object. We map who needs to know what, build training around actual classroom and administrative workflows, and ensure the people closest to students can lead the tools—not depend on us to run them. Faculty should own the AI, not rent it from a consultant.",
        icon: Globe,
    },
];

const subsequentPhases = [
    {
        id: "02",
        title: "Strategy Model",
        description: "We design a custom implementation plan for your school. This ensures teacher judgment and student formation remain central while automating the administrative and repetitive tasks that consume faculty without producing learning.",
        icon: BrainCircuit,
    },
    {
        id: "03",
        title: "Implementation",
        description: "Using Claude Code and modern AI development tools, we build custom apps and workflows tailored to your school's actual processes. No off-the-shelf software that almost fits—tools your faculty can own, maintain, and extend.",
        icon: Rocket,
    },
    {
        id: "04",
        title: "Training & Handoff",
        description: "Technology is useless if teachers see it as a threat or a burden. We train around real classroom and administrative workflows so your faculty leads the AI—not the other way around.",
        icon: BarChart3,
    },
];

export default function ProcessPage() {
    return (
        <main className="flex min-h-screen flex-col bg-slate-950 text-white pt-32 sm:pt-40">
            <Container className="py-24">
                {/* Header */}
                <div className="max-w-3xl mb-32">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6"
                    >
                        The Critical Method
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-zinc-400 leading-relaxed"
                    >
                        We follow a &ldquo;Diagnosis First, Tools Second&rdquo; approach. Most AI initiatives in schools fail because they skip the hard questions. We don&apos;t.
                    </motion.p>
                </div>

                {/* PHASE 01: DIAGNOSTIC (Detailed) */}
                <section className="mb-40">
                    <div className="flex items-end justify-between mb-12 border-b border-zinc-800 pb-6">
                        <div>
                            <h2 className="text-sm font-mono text-blue-500 mb-2">PHASE 01</h2>
                            <h3 className="text-3xl font-bold text-white">The Diagnostic</h3>
                        </div>
                        <div className="hidden md:block max-w-md text-right text-zinc-400 text-sm">
                            &ldquo;Finding the three or four places where better systems create disproportionate returns.&rdquo;
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {diagnosticPoints.map((point, index) => (
                            <motion.div
                                key={point.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="rounded-2xl border border-zinc-900 bg-zinc-900/20 p-8 hover:bg-zinc-900/40 transition-colors"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                                        <point.icon className="h-5 w-5" />
                                    </div>
                                    <h4 className="font-bold text-lg text-white">{point.title}</h4>
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {point.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 rounded-xl bg-blue-900/10 border border-blue-500/20 text-blue-200 text-sm">
                        <strong>The Goal:</strong> The diagnostic phase isn&apos;t about cataloging everything a school does. It&apos;s about finding strategic leverage points where better systems create disproportionate returns for teachers and students.
                    </div>
                </section>

                {/* SUBSEQUENT PHASES (Summary) */}
                <div className="grid grid-cols-1 gap-12">
                    {subsequentPhases.map((step) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group border-t border-zinc-900 pt-12 grid grid-cols-1 md:grid-cols-4 gap-8"
                        >
                            <div className="md:col-span-1">
                                <span className="text-6xl font-black text-zinc-900 group-hover:text-zinc-800 transition-colors">
                                    {step.id}
                                </span>
                            </div>

                            <div className="md:col-span-3 lg:col-span-2">
                                <div className="flex items-center gap-4 mb-4">
                                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                                </div>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            <div className="hidden lg:flex md:col-span-1 justify-end items-start text-zinc-600">
                                <step.icon className="h-12 w-12" />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </Container>
        </main>
    );
}
