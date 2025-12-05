import React from 'react';
import {Instagram, Facebook, Twitter, Mail, Phone, Linkedin} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Foto Kemmy</h3>
                        <p className="text-gray-300 mb-4">
                            Umjetnost, detalji i vaši posebni trenuci u jednoj fotografiji.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/kemal_.photography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-300 hover:text-fuchsia-600 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://www.facebook.com/share/17YYXbQzui/?mibextid=wwXIfr" className="text-gray-300 hover:text-fuchsia-600 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/kemal-beganovi%C4%87-53a63b357/" className="text-gray-300 hover:text-fuchsia-600 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Usluge</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="/services" className="hover:text-fuchsia-600 transition-colors">Vjenčanja</a></li>
                            <li><a href="../pages/Services.js" className="hover:text-fuchsia-600 transition-colors">Portret sesije</a></li>
                            <li><a href="/services" className="hover:text-fuchsia-600 transition-colors">Događaji / eventi</a></li>
                            <li><a href="/services" className="hover:text-fuchsia-600 transition-colors">Sport</a></li>


                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
                        <div className="space-y-2 text-gray-300">
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>kemalbeganovic77@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>+387 62 890 153</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                    <p>&copy; 2025 Kemal Photography. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;