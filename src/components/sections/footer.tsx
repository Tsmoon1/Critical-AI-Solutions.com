import { Container } from "@/components/ui/container";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 text-zinc-400">
            <Container className="py-12 md:py-16">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    <div className="shrink-0">
                        <div className="relative h-36 w-36 mb-4 overflow-hidden">
                            <Image
                                src="/logo.jpg"
                                alt="Critical AI Solutions Logo"
                                fill
                                className="object-contain invert mix-blend-screen"
                            />
                        </div>
                        <p className="text-sm text-zinc-500 max-w-xs">
                            AI literacy training and custom tool building for classical schools.
                        </p>
                    </div>
                    <div className="flex gap-16">
                        <div>
                            <h3 className="mb-4 text-sm font-semibold text-white">Navigation</h3>
                            <ul className="space-y-3 text-sm">
                                <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
                                <li><a href="/process" className="hover:text-blue-400 transition-colors">Our Process</a></li>
                                <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
                            <ul className="space-y-3 text-sm">
                                <li><a href="mailto:tsmoon@protonmail.com" className="hover:text-blue-400 transition-colors">tsmoon@protonmail.com</a></li>
                                <li><span className="text-zinc-500">Austin, Texas</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
                    &copy; {new Date().getFullYear()} Critical AI Solutions. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
