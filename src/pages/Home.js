import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import Pozadina from '../assets/pozadina.jpg'
import ilahija from '../assets/cover_nocilahija.JPG'
import testament from '../assets/cover_testamnet.jpg'
import vatrogasci from '../assets/cover_vatrogasci.jpg'
import graz from '../assets/grazcover.jpg'
import aras from '../assets/cover_aras.jpg'
import ajnai from '../assets/cover_ajnai.jpg'
import enesdanijela from '../assets/cover_enesdanijela.jpg'
import frano from "../assets/frano_cover.jpg";


const Home = () => {
    const featuredEvents = [
        {
            id: 'enes_danijela',
            title: 'Enes & Danijela',
            description: '',
            date: '07.02.2026.',
            location: 'Etno selo Čardaci Vitez, BiH',
            coverImage: enesdanijela,
            imageCount: 15,
        },
        {
            id: 'Ajna_islamovic_slike',
            title: 'Ajna Islamović - portret sesija',
            description: '',
            date: '06.02.2026.',
            location: 'Etno selo Čardaci Vitez, BiH',
            coverImage: ajnai,
            imageCount: 9,
        },
        {
            id: 'frano-romari',
            title: 'Frano Topić - Sport sesija',
            description: '',
            date: '31.01.2026.',
            location: 'Stadion Dolac na Lašvi, BiH',
            coverImage: frano,
            imageCount: 6,
        },
    ];

    const stats = [
        { icon: Camera, label: 'Photos Taken', value: '10,000+' },
        { icon: Users, label: 'Happy Clients', value: '500+' },
        { icon: Award, label: 'Awards Won', value: '25+' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={Pozadina}
                        alt="Photography hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-800/70 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Capturing
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-orange-500">
                    {' '}Beautiful Moments
                  </span>
                        </h1>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/portfolio"
                                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white font-semibold rounded-lg hover:from-fuchsia-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                            >
                                Pogledaj Portfolio / Galeriju
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-800 transition-all duration-300"
                            >
                                Kontaktiraj me!
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Events */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            Posljednja izdanja
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Pogledajte najnovije fotografske projekte!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <EventCard {...event} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white font-semibold rounded-lg hover:from-fuchsia-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Pogledaj sve
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;