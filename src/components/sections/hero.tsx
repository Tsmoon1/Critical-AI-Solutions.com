"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />

            <Container className="relative">
                <div className="mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

                    {/* Left: text content */}
                    <div className="flex-1">

                        {/* Animated Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-900/10 px-3 py-1 text-sm font-medium text-blue-400 backdrop-blur-sm"
                        >
                            <Sparkles className="mr-2 h-4 w-4" />
                            <span>Classical Education × AI Literacy</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6"
                        >
                            Most Schools Either Fear AI{" "}
                            <span className="text-blue-400">
                                or Use It Without a Plan
                            </span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg leading-8 text-zinc-400 max-w-xl mb-10"
                        >
                            Most schools are stuck between two bad options: avoid AI out of fear, or adopt it without a plan and watch it create more problems than it solves. Twenty-five years inside classical education showed me a third path&mdash;diagnose first, train with integrity, and build tools that actually fit your school instead of buying something that almost does.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href="/contact">
                                <Button variant="glow" size="lg" className="group">
                                    Schedule a Discovery
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link href="/workshop">
                                <Button variant="outline" size="lg" className="group border-slate-600 text-zinc-300 bg-transparent hover:border-blue-500/60 hover:text-white hover:bg-blue-900/20">
                                    Free Workshop
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="shrink-0"
                    >
                        <div className="relative h-80 w-60 md:h-[420px] md:w-[300px] overflow-hidden rounded-2xl border border-slate-700/50 shadow-2xl shadow-blue-900/20">
                            <Image
                                src="/headshot.jpg"
                                alt="Tim Moon, Founder of Critical AI Solutions"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
