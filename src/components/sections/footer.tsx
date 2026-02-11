import { Container } from "@/components/ui/container";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="border-t border-zinc-900 bg-black text-zinc-400">
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="relative h-48 w-48 mb-4 overflow-hidden">
                            <Image
                                src="/logo.jpg"
                                alt="Critical AI Solutions Logo"
                                fill
                                className="object-contain invert"
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="/process" className="hover:text-blue-400 transition-colors">Our Process</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Business Diagnostic</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Implementation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-zinc-900 pt-8 text-center text-sm">
                    &copy; {new Date().getFullYear()} Critical AI Solutions. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
