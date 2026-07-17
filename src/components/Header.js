import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const navigation = [
        { name: t('nav_home'), href: '/' },
        { name: t('nav_portfolio'), href: '/portfolio' },
        { name: t('nav_about'), href: '/about' },
        { name: t('nav_services'), href: '/services' },
        { name: t('nav_contact'), href: '/contact' },
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

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
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

                        {/* Gumbi za jezik */}
                        <div className="flex items-center space-x-1 border-l pl-6 border-slate-200">
                            <button
                                onClick={() => changeLanguage('bs')}
                                className={`px-2 py-1 text-xs font-bold rounded transition-colors ${
                                    i18n.language === 'bs'
                                        ? 'bg-fuchsia-100 text-fuchsia-700'
                                        : 'text-slate-500 hover:text-fuchsia-600'
                                }`}
                            >
                                BS
                            </button>
                            <span className="text-slate-300">|</span>
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`px-2 py-1 text-xs font-bold rounded transition-colors ${
                                    i18n.language === 'en'
                                        ? 'bg-fuchsia-100 text-fuchsia-700'
                                        : 'text-slate-500 hover:text-fuchsia-600'
                                }`}
                            >
                                EN
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-slate-800 hover:text-fuchsia-600"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 space-y-4">
                        <div className="space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-3 py-2 text-base font-medium ${
                                        isActive(item.href)
                                            ? 'text-fuchsia-600 bg-fuchsia-50'
                                            : 'text-slate-800 hover:bg-gray-50'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Gumbi za jezik */}
                        <div className="flex items-center space-x-3 px-3 pt-4 border-t border-slate-100">
                            <span className="text-xs text-slate-500">Jezik:</span>
                            <button
                                onClick={() => { changeLanguage('bs'); setIsMenuOpen(false); }}
                                className={`px-3 py-1 text-sm font-bold rounded ${
                                    i18n.language === 'bs' ? 'bg-fuchsia-600 text-white' : 'bg-slate-100'
                                }`}
                            >
                                BS
                            </button>
                            <button
                                onClick={() => { changeLanguage('en'); setIsMenuOpen(false); }}
                                className={`px-3 py-1 text-sm font-bold rounded ${
                                    i18n.language === 'en' ? 'bg-fuchsia-600 text-white' : 'bg-slate-100'
                                }`}
                            >
                                EN
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;