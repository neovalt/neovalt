import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-5 w-full z-50 pt-4 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-transparent rounded-lg px-4 py-2 md:px-8 md:py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <Link to="/" className="flex items-center gap-2">
                                <img src="/assets/layout/logo.png" alt="Neovalt Logo" width={40} height={16} loading="lazy" />
                                <h1 className="bg-linear-to-r from-white via-gray-200 to-gray-600 bg-clip-text text-transparent font-bold text-3xl hidden md:flex">
                                    Neovalt
                                </h1>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-8 backdrop-blur-md rounded-full p-5 border border-white/20">
                            <Link
                                to="#home"
                                className="text-green-500 hover:text-green-500 transition-colors text-sm cursor-target font-semibold"
                            >
                                Home
                            </Link>
                            <Link
                                to="#features"
                                className={`text-white hover:text-green-500 transition-colors text-sm cursor-target font-medium`}
                            >
                                Section 1
                            </Link>
                            <Link
                                to="#testimonials"
                                className={`text-white hover:text-green-500 transition-colors text-sm cursor-target font-medium`}
                            >
                                Section 2
                            </Link>
                            <Link
                                to="#pricing"
                                className={`text-white hover:text-green-500 transition-colors text-sm cursor-target font-medium`}
                            >
                                Section 3
                            </Link>
                        </div>

                        {/* Desktop Buttons */}
                        <div className="hidden md:flex items-center gap-4">
                            <Link to="/auth/sign-up">
                                {/* <Button className="bg-white hover:bg-gray-200 text-black rounded-full px-6 text-sm font-medium"
								> */}
                                <Button
                                    className={`bg-white hover:bg-gray-200 text-black rounded-full px-6 text-sm font-medium transition-colors cursor-target`}
                                >
                                    Try Free
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <div className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-2 bg-black/25 backdrop-blur-md py-5 rounded-lg">
                            <Link to="#features" className="block px-4 py-2 text-white hover:text-green-500 text-sm">
                                Features
                            </Link>
                            <Link to="#insights" className="block px-4 py-2 text-white hover:text-green-500 text-sm">
                                Templates
                            </Link>
                            <Link to="#testimonials" className="block px-4 py-2 text-white hover:text-green-500 text-sm">
                                Pricing
                            </Link>
                            <Link to="#pricing" className="block px-4 py-2 text-white hover:text-green-500 text-sm">
                                Blog
                            </Link>
                            <div className="flex gap-2 px-4 pt-2">
                                <Link to="/auth/sign-in">
                                    <Button
                                        variant="ghost"
                                        className="flex-1 text-white hover:border-2 hover:border-gray-300 hover:bg-transparent text-sm rounded-full"
                                    >
                                        Sign in
                                    </Button>
                                </Link>
                                <Link to="/auth/sign-up">
                                    <Button className="flex-1 bg-black hover:bg-gray-900 text-white rounded-full text-sm">
                                        Try Free
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}