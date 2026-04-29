"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, CheckCircle2, BookOpen, CalendarDays } from "lucide-react";
import Link from "next/link";

const outcomes = [
    "Understand what AI actually is (and isn't) so you can have honest conversations with faculty and parents",
    "Identify the three ways schools misuse AI and how to avoid each one",
    "Develop a simple, defensible policy framework you can implement immediately",
    "Recognize where AI can genuinely reduce teacher workload without undermining craft",
    "Leave with a one-page action plan tailored to your school's size and culture",
];

const whoItIsFor = [
    "Heads of school and academic deans navigating board or parent pressure",
    "Curriculum directors building or revising AI policy",
    "Faculty leads who need a shared vocabulary before staff-wide training",
    "Teachers who want to use AI responsibly but don't know where to start",
];

export default function WorkshopPage() {
    return (
        <main className="flex min-h-screen flex-col bg-slate-950 text-white pt-32 sm:pt-40">

            {/* Hero */}
            <section className="pb-16 sm:pb-24">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="mb-4 inline-flex items-center rounded-full border border-lime-500/30 bg-lime-900/10 px-3 py-1 text-sm font-medium text-lime-400">
                                <BookOpen className="mr-2 h-4 w-4" />
                                <span>Free Workshop · AI Fluency in Education</span>
                            </div>
                            <div className="mb-6 flex items-start gap-3 rounded-xl border border-blue-500/20 bg-blue-900/10 px-5 py-4 max-w-prose">
                                <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    <span className="font-semibold text-white">Now scheduling for end-of-year and back-to-school in-service days.</span>{" "}
                                    If your school is planning professional development for May–June or August, this workshop fits a single in-service slot: no pre-reading, no software, no follow-up homework required.
                                </p>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6 leading-tight">
                                Your Teachers Are Skeptical of AI.{" "}
                                <span className="text-blue-400">This Workshop Starts There.</span>
                            </h1>
                            <p className="text-lg text-zinc-400 leading-relaxed max-w-prose mb-8">
                                Most AI training for schools begins with enthusiasm and ends with eye-rolls. This one begins with the hard questions your faculty is already asking, and earns its way to practical answers.
                            </p>
                            <div className="flex flex-wrap gap-6 text-sm text-zinc-400 mb-10">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-blue-400" />
                                    <span>90 minutes</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-blue-400" />
                                    <span>Faculty, administrators, or mixed groups</span>
                                </div>
                            </div>
                            <Link href="/contact">
                                <Button variant="glow" size="lg" className="group">
                                    Request This Workshop
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* What You'll Leave With */}
            <section className="py-16 sm:py-24 bg-slate-900">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-mono text-blue-500 mb-2 uppercase tracking-wider">What You&apos;ll Leave With</h2>
                            <h3 className="text-2xl font-bold text-white mb-8">
                                Clarity, not hype
                            </h3>
                            <ul className="space-y-4">
                                {outcomes.map((outcome, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime-500" />
                                        <span className="text-zinc-300 leading-relaxed">{outcome}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Who It's For */}
            <section className="py-16 sm:py-24 bg-slate-950">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-mono text-blue-500 mb-2 uppercase tracking-wider">Who It&apos;s For</h2>
                            <h3 className="text-2xl font-bold text-white mb-8">
                                Built for schools, not startups
                            </h3>
                            <ul className="space-y-4">
                                {whoItIsFor.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                        <span className="text-zinc-300 leading-relaxed">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* When Schools Book This */}
            <section className="py-16 sm:py-24 bg-slate-950">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-mono text-blue-500 mb-2 uppercase tracking-wider">When Schools Book This</h2>
                            <h3 className="text-2xl font-bold text-white mb-8">
                                In-service is the right moment
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6">
                                    <p className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">End of Year · May–June</p>
                                    <p className="text-zinc-300 leading-relaxed text-sm max-w-prose">
                                        Close the year with faculty aligned on AI policy before summer. Teachers leave with a shared framework instead of spending summer confused about what&apos;s allowed in the fall.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6">
                                    <p className="text-sm font-semibold text-lime-400 mb-2 uppercase tracking-wider">Back to School · August</p>
                                    <p className="text-zinc-300 leading-relaxed text-sm max-w-prose">
                                        Start the year with a unified stance. Parents, faculty, and administration enter the year speaking the same language about AI, before the first student submits an AI-generated paper.
                                    </p>
                                </div>
                            </div>
                            <p className="mt-6 text-zinc-500 text-sm max-w-prose">
                                Both windows are booking now. In-service slots fill early, especially August dates.
                            </p>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Why Free */}
            <section className="py-16 sm:py-24 bg-slate-900">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-lime-500 pl-6 py-2"
                        >
                            <h2 className="text-sm font-mono text-blue-500 mb-4 uppercase tracking-wider">Why Free</h2>
                            <p className="text-zinc-300 leading-relaxed max-w-prose mb-4">
                                Because the first conversation should cost you nothing. My goal is to give your school a shared vocabulary and a defensible framework before any decision about deeper work. Schools that have done the thinking are better clients, and better off regardless of whether we work together further.
                            </p>
                            <p className="text-zinc-400 leading-relaxed max-w-prose">
                                The workshop is free. The follow-on work (deeper diagnostics, faculty training series, custom tool building) is not. But that decision should come after you&apos;ve seen what good AI guidance actually looks like.
                            </p>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-16 sm:py-24 bg-slate-950">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to have the real conversation?
                        </h2>
                        <p className="text-zinc-400 mb-8 max-w-prose mx-auto leading-relaxed">
                            Use the contact form to request a workshop date. Tell us a little about your school: size, culture, where faculty stands on AI right now. We&apos;ll follow up within one business day.
                        </p>
                        <Link href="/contact">
                            <Button variant="glow" size="lg" className="group">
                                Request This Workshop
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </motion.div>
                </Container>
            </section>

        </main>
    );
}
