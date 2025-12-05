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


const Home = () => {
    const featuredEvents = [
        {
            id: 'Graz',
            title: 'Galerija slika iz Graza',
            description: '',
            date: '29.11.2025.',
            location: 'Graz, Austrija',
            coverImage: graz,
            imageCount: 30,
        },
        {
            id: 'premijera-filma-testament',
            title: 'Premijera filma ,,testament"',
            description: '',
            date: '23.10.2025.',
            location: 'Kino sala Vitez, BiH',
            coverImage: testament,
            imageCount: 20,
        },
        {
            id: 'obiljezavanje-vatrogasaca',
            title: 'Obilježavanje 60. godišnjice DVD Stari Vitez',
            description: '',
            date: '18.10.2025.',
            location: 'Dvorana Behar Stari Vitez, BiH',
            coverImage: vatrogasci,
            imageCount: 15,
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