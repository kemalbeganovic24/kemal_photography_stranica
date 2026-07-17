import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Instagram, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight mb-4">
                            <Camera className="h-8 w-8 text-fuchsia-500" />
                            <span className="bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
                                Studio
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            {t('footer_desc', 'Profesionalno bilježenje vaših najvažnijih životnih trenutaka kroz objektiv kreativnosti i strasti.')}
                        </p>
                    </div>

                    {/* Brzi Linkovi */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-orange-400">{t('footer_links_title', 'Brzi linkovi')}</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors">{t('nav_home', 'Početna')}</Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">{t('nav_portfolio', 'Portfolio')}</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">{t('nav_services', 'Usluge')}</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">{t('nav_about', 'O meni')}</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">{t('nav_contact', 'Kontakt')}</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kontakt i mreže */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-orange-400">{t('footer_contact_title', 'Kontakt informacije')}</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <Phone className="h-5 w-5 text-fuchsia-500" />
                                <span>+387 62 123 456</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-fuchsia-500" />
                                <span>info@photography.com</span>
                            </li>
                            <li className="flex items-center gap-2 pt-2">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 bg-slate-800 rounded-full hover:bg-fuchsia-600 hover:text-white transition-all text-gray-300"
                                >
                                    <Instagram className="h-5 w-5" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} Studio. {t('footer_rights', 'Sva prava zadržana.')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;