"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-black pt-32 pb-20 sm:pt-40 sm:pb-28">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

            <Container className="relative">
                <div className="mx-auto max-w-4xl text-center">

                    {/* Animated Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-900/10 px-3 py-1 text-sm font-medium text-blue-400 backdrop-blur-sm"
                    >
                        <Sparkles className="mr-2 h-4 w-4" />
                        <span>Critical AI Solutions</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-gradient-to-br from-white via-white to-zinc-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
                    >
                        Before You Automate Anything, <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Let's Figure Out What's Worth Automating
                        </span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 text-lg leading-8 text-zinc-400 sm:text-xl max-w-2xl mx-auto"
                    >
                        95% of AI implementations fail—usually because nobody asked the right questions first. We help small businesses cut through the hype, avoid costly mistakes, and implement AI that actually fits how you work.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
                    >
                        <Link href="/contact">
                            <Button variant="glow" size="lg" className="group w-full sm:w-auto">
                                Schedule a Discovery
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
