"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import {
    BrainCircuit,
    Rocket,
    BarChart3,
    Banknote,
    AlertTriangle,
    Clock,
    Database,
    ArrowRightLeft,
    TrendingUp,
    Trash2,
    Globe
} from "lucide-react";

// Detailed points for the Diagnostic Phase
const diagnosticPoints = [
    {
        title: "The Money Trail",
        description: "Start where cash flows—not philosophically, but literally. How do customers find you? What's the exact path from first contact to payment? Where do invoices live, who touches them, and what breaks when someone's out sick? Most small businesses run on institutional memory disguised as process.",
        icon: Banknote,
    },
    {
        title: "The Pain Points",
        description: "Don't ask \"what's your biggest challenge\" because you'll get platitudes. Instead: \"What task makes you want to throw your computer out the window?\" \"What do you redo most often?\" Pain is specific. Vague frustration means you haven't dug deep enough.",
        icon: AlertTriangle,
    },
    {
        title: "The Time Thieves",
        description: "Where does time actually go versus where they think it goes? Ask them to walk you through yesterday hour by hour. Patterns emerge. The difference between perceived and actual time allocation tells you everything about where systems have failed.",
        icon: Clock,
    },
    {
        title: "The Data Desert",
        description: "What decisions do they make on gut versus data? Not because gut is bad—often it's all they have—but because it shows you where visibility is missing. \"How do you know when to reorder inventory?\" If the answer is \"I just know,\" you've found a gap.",
        icon: Database,
    },
    {
        title: "The Handoff Disasters",
        description: "Every time information passes from one person to another, something gets lost. Map those transitions. \"How does sales tell operations what was promised?\" The gaps between systems are where money and goodwill leak.",
        icon: ArrowRightLeft,
    },
    {
        title: "The Growth Ceiling",
        description: "\"What would break first if you doubled your customer base tomorrow?\" This reveals which systems are barely holding together now. The constraint that would snap under 2x load is probably already groaning under 1x.",
        icon: TrendingUp,
    },
    {
        title: "The Tool Graveyard",
        description: "What software did they buy that nobody uses? Usually, it's not the tool; it's that the tool didn't fit the actual workflow, or nobody had time to learn it. It solved a problem they didn't really have.",
        icon: Trash2,
    },
    {
        title: "Strategic Training",
        description: "The best system in the world is worthless if your team treats it like a foreign object. We map who needs to know what, build training around actual daily workflows, and make sure the people closest to the work can maintain and adapt the tools without calling us. Your team should lead the AI, not depend on us to run it.",
        icon: Globe,
    },
];

const subsequentPhases = [
    {
        id: "02",
        title: "Strategy Model",
        description: "We design a custom implementation plan. This ensures human judgment is preserved at critical decision points while automating the repetitive grunt work.",
        icon: BrainCircuit,
    },
    {
        id: "03",
        title: "Implementation",
        description: "We deploy secure, business-grade agents using our Critical AI framework. No fragile prototypes—only robust systems designed for stability.",
        icon: Rocket,
    },
    {
        id: "04",
        title: "Training & Handoff",
        description: "Technology is useless if your team can't use it. We provide comprehensive training to ensure your staff leads the AI, not the other way around.",
        icon: BarChart3,
    },
];

export default function ProcessPage() {
    return (
        <main className="flex min-h-screen flex-col bg-black text-white pt-32 sm:pt-40">
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
                        We strictly follow a &ldquo;Strategy First, Code Second&rdquo; approach. Most AI projects fail because they skip the hard questions. We don&apos;t.
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
                                className={`rounded-2xl border border-zinc-900 bg-zinc-900/20 p-8 hover:bg-zinc-900/40 transition-colors ${index === 0 || index === 3 || index === 6 ? "md:col-span-2 lg:col-span-1" : ""
                                    }`}
                            // Use col-span logic to break up the grid visually if desired, 
                            // or just simple grid. Let's keep it simple grid for readability first.
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
                        <strong>The Goal:</strong> The diagnostic phase isn&apos;t about cataloging everything you do. It&apos;s about finding strategic leverage points.
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
