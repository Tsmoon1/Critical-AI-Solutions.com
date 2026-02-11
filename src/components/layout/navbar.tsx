"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
            <Container>
                <div className="flex h-32 items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative h-48 w-48 overflow-hidden">
                            <Image
                                src="/logo.jpg"
                                alt="Critical AI Solutions Logo"
                                fill
                                className="object-contain invert"
                            />
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/process" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                            Process
                        </Link>
                        <Link href="/contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                            Contact
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/contact">
                            <Button variant="glow" size="sm">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
}
