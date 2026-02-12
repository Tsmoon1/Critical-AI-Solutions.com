"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export function About() {
    return (
        <section className="py-24 bg-black sm:py-32">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                        <div className="shrink-0">
                            <div className="relative h-64 w-48 overflow-hidden rounded-2xl border border-zinc-800">
                                <Image
                                    src="/headshot.jpg"
                                    alt="Tim Moon, Founder of Critical AI Solutions"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-sm font-mono text-blue-500 mb-2">WHO&apos;S BEHIND THIS</h2>
                            <h3 className="text-2xl font-bold text-white mb-4">Tim Moon</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                I spent twenty years in educational leadership watching schools waste millions on technology that promised transformation but delivered distraction. The pattern in business is identical: 95% of AI implementations fail because organizations automate before they diagnose. I have also spent thousands of hours researching, using, and teaching AI workflows and tools. I founded Critical AI Solutions to help small businesses avoid that expensive mistake&mdash;by identifying what <em className="text-zinc-300 not-italic font-medium">not</em> to automate before they build their operations around the wrong systems.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
