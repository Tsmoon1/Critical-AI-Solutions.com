"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    return (
        <main className="flex min-h-screen flex-col bg-slate-950 text-white pt-32 sm:pt-40">
            <Container className="py-24">
                <div className="mx-auto max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-900/10 px-3 py-1 text-sm font-medium text-blue-400">
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Free Discovery Call</span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            Let&apos;s talk about your school
                        </h1>
                        <p className="text-lg text-zinc-400 leading-relaxed max-w-prose">
                            No pitch, no pressure. We&apos;ll spend 30 minutes understanding how your school actually works and whether AI training or custom tools make sense for you right now.
                        </p>
                    </motion.div>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="rounded-2xl border border-blue-500/30 bg-blue-900/10 p-12 text-center"
                        >
                            <h2 className="text-2xl font-bold text-white mb-2">We&apos;ll be in touch</h2>
                            <p className="text-zinc-400">Expect to hear from us within one business day.</p>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            onSubmit={async (e) => {
                                e.preventDefault();
                                setSubmitting(true);
                                setError("");
                                const form = e.currentTarget;
                                const formData = new FormData(form);
                                const res = await fetch("/api/contact", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({
                                        name: formData.get("name"),
                                        email: formData.get("email"),
                                        school: formData.get("school"),
                                        pain: formData.get("pain"),
                                    }),
                                });
                                setSubmitting(false);
                                if (!res.ok) {
                                    setError("Something went wrong. Please try again.");
                                    return;
                                }
                                setSubmitted(true);
                            }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="you@school.edu"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="school" className="block text-sm font-medium text-zinc-300 mb-2">
                                    Tell us about your school
                                </label>
                                <input
                                    type="text"
                                    id="school"
                                    name="school"
                                    required
                                    className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    placeholder="e.g. Classical K-12, 200 students, Austin TX"
                                />
                            </div>
                            <div>
                                <label htmlFor="pain" className="block text-sm font-medium text-zinc-300 mb-2">
                                    What&apos;s your biggest challenge with AI right now?
                                </label>
                                <textarea
                                    id="pain"
                                    name="pain"
                                    rows={4}
                                    className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                                    placeholder="Don't worry about using the right words. Just tell us what's on your mind."
                                />
                            </div>
                            {error && (
                                <p className="text-red-400 text-sm">{error}</p>
                            )}
                            <Button type="submit" variant="glow" size="lg" className="group w-full sm:w-auto" disabled={submitting}>
                                {submitting ? "Sending..." : "Schedule a Discovery"}
                                {!submitting && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
                            </Button>
                        </motion.form>
                    )}
                </div>
            </Container>
        </main>
    );
}
