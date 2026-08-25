import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Award, Users } from 'lucide-react';
import ReactGA from 'react-ga4';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // <-- 1. UVOZIMO PRIJEVOD
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import Pozadina from '../assets/pozadinskaslika2026.jpeg';

const Home = () => {
    const { t } = useTranslation(); // <-- 2. AKTIVIRAMO PRIJEVOD

    const featuredEvents = [
        {
            id: 'amar_kanita_2026',
            title: 'Amar & Kanita',
            description: '',
            date: '22.08.2026.',
            location: 'Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/amarkanitacover.jpg',
            imageCount: 15,
        },
        {
            id: 'elvir_ilhana_2026',
            title: 'Elvir & Ilhana',
            description: '',
            date: '15.08.2026.',
            location: 'Busoavača, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/ilhanaelvircover.jpg',
            imageCount: 8,
        },
        {
            id: 'adnan_i_asja_2026',
            title: 'Adnan & Asja',
            description: '',
            date: '07.08.2026.',
            location: 'Zenica, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/IMG_0405.jpg',
            imageCount: 12,
        },
    ];

    const trackPortfolioClick = () => {
        ReactGA.event({
            action: 'hero_click_portfolio',
            params: { section: 'hero_home' }
        });
    };

    const trackContactClick = () => {
        ReactGA.event({
            action: 'hero_click_contact',
            params: { section: 'hero_home' }
        });
    };

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
                            {t('hero_capturing', 'Capturing')} {/* <-- Prijevod teksta */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-orange-500">
                                {' '}{t('hero_moments', 'Beautiful Moments')} {/* <-- Prijevod teksta */}
                            </span>
                        </h1>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/portfolio"
                                onClick={trackPortfolioClick}
                                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white font-semibold rounded-lg hover:from-fuchsia-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                            >
                                {t('hero_btn_portfolio', 'Pogledaj Portfolio / Galeriju')} {/* <-- Prijevod gumba */}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                to="/contact"
                                onClick={trackContactClick}
                                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-800 transition-all duration-300"
                            >
                                {t('hero_btn_contact', 'Kontaktiraj me!')} {/* <-- Prijevod gumba */}
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
                            {t('events_heading', 'Posljednja izdanja')} {/* <-- Prijevod naslova */}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {t('events_subheading', 'Pogledajte najnovije fotografske projekte!')} {/* <-- Prijevod podnaslova */}
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
                            onClick={trackPortfolioClick}
                            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white font-semibold rounded-lg hover:from-fuchsia-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                        >
                            {t('events_view_all', 'Pogledaj sve')} {/* <-- Prijevod gumba */}
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