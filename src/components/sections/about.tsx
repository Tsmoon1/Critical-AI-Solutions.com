"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function About() {
    return (
        <section className="py-24 bg-slate-950 sm:py-32">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl"
                >
                    <h2 className="text-sm font-mono text-blue-500 mb-2">WHO&apos;S BEHIND THIS</h2>
                    <h3 className="text-2xl font-bold text-white mb-1">Tim Moon</h3>
                    <p className="text-sm text-zinc-500 mb-6">Dean of Rhetoric · AI Liaison, Wayland Baptist University · Founder, VoiceArc</p>
                    <p className="text-zinc-400 leading-relaxed mb-4">
                        I spent twenty-five years inside classical education&mdash;as a teacher, Dean of Rhetoric, and school leader&mdash;watching institutions spend heavily on technology that promised transformation and delivered distraction. The EdTech failure rate mirrors every other AI failure rate: organizations reach for tools before they understand their processes.
                    </p>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        I now serve as AI Liaison and Adjunct Professor at Wayland Baptist University, teach a Professional Readiness course integrating AI literacy, and founded <em className="text-zinc-300 not-italic font-medium">VoiceArc</em>&mdash;an AI-assisted rhetoric analysis tool for writing teachers. I write about the intersection of classical education and artificial intelligence at <em className="text-zinc-300 not-italic font-medium">Silicon and Soul</em>. I founded Critical AI Solutions to help schools navigate AI the way a classical educator should: asking better questions first.
                    </p>

                    <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="border-l-2 border-lime-500 pl-6 py-2"
                    >
                        <p className="text-zinc-300 leading-relaxed italic mb-4">
                            &ldquo;As an adjunct AI Liaison at Wayland Baptist University, Tim has demonstrated important discernment and skill in teaching students, teachers, and staff to apply AI in effective and ethical ways. His years of experience in education and educational leadership, along with his astute understanding of AI in education, provide a unique and essential perspective for education in the Age of AI.&rdquo;
                        </p>
                        <footer className="text-sm text-zinc-500 not-italic">
                            <span className="font-medium text-zinc-400">Dr. Simmons</span>
                            <span className="mx-2">·</span>
                            Executive Director and Campus Dean, San Antonio Campus · Professor of Christian Ministry and Counseling, School of Christian Studies · Wayland Baptist University
                        </footer>
                    </motion.blockquote>
                </motion.div>
            </Container>
        </section>
    );
}
