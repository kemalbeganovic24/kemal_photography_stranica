import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Početna', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'O meni', href: '/about' },
        { name: 'Usluge', href: '/services' },
        { name: 'Kontakt', href: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <Camera className="h-8 w-8 text-fuchsia-600" />
                        <span className="text-xl font-bold text-slate-800">Kemal Photography</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    isActive(item.href)
                                        ? 'text-fuchsia-600 border-b-2 border-fuchsia-600'
                                        : 'text-slate-800 hover:text-fuchsia-600'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-slate-800 hover:text-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                                    isActive(item.href)
                                        ? 'text-fuchsia-600 bg-fuchsia-50'
                                        : 'text-slate-800 hover:text-fuchsia-600 hover:bg-gray-50'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;