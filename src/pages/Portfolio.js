import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import Ilahija from '../assets/cover_nocilahija.JPG'
import testament from '../assets/cover_testamnet.jpg'
import vatrogasci from '../assets/cover_vatrogasci.jpg'
import fkvitez from '../assets/cover_fk.JPG'
import kmfvitez from '../assets/cover_kmf.JPG'
import anesajla from '../assets/cover_anesajla.jpg'
import elvedin from '../assets/cover_elvedinsemina.jpg'
import folklor from '../assets/cover_bzk.jpg'
import emanulah from '../assets/cover_emanulah.jpg'
import msts from '../assets/mstscover.jpg'
import mssvitez from '../assets/mssvitezcover.jpg'
import msstravnik from '../assets/msstravnikcover.jpg'
import nermin from '../assets/nermincover.jpg'
import graz from '../assets/grazcover.jpg'
import francuska from '../assets/colmarcover.JPG'
import rimini from '../assets/riminicover.JPG'
import verona from '../assets/veronacover.JPG'
import sanmarino from '../assets/sanmarinocover.JPG'
import venecija from '../assets/venecijacover.JPG'


const Portfolio = () => {
    const allEvents = [
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
            id: 'noc-ilahija-kasida',
            title: 'Noć ilahija i kasida',
            date: '18.10.2025.',
            location: 'Kino sala Vitez, BiH',
            coverImage: Ilahija,
            imageCount: 9,
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
        {
            id: 'fk-vitez',
            title: 'FK Vitez',
            description: 'Galerija slika fudbalera FK Vitez - sezona 2025/2026',
            date: 'Sezona 2025/2026',
            location: 'Gradski stadion Vitez',
            coverImage: fkvitez,
            imageCount: 14,
        },
        {
            id: 'kmf-vitez',
            title: 'KMF Vitez',
            description: 'Galerija slika KMF Vitez - sezona 2025/2026',
            date: 'Sezona 2025/2026',
            location: 'Gradska sportska dvorana Vitez',
            coverImage: kmfvitez,
            imageCount: 24,
        },
        {
            id: 'anes-ajla',
            title: 'Anes & Ajla',
            description: '',
            date: '21.8.2025.',
            location: 'Busovača, BiH',
            coverImage: anesajla,
            imageCount: 7,
        },
        {
            id: 'elvedin-semina',
            title: 'Elvedin & Semina',
            description: '',
            date: '29.7.2025.',
            location: 'Zenica, BiH',
            coverImage: elvedin,
            imageCount: 9,
        },
        {
            id: 'smotra-vitez-2025',
            title: 'Međunarodni folkorlni festival Vitez 2025.',
            description: 'Međunarodna smotra folklora u Vitezu.',
            date: '31.7.2025.',
            location: 'Vitez, BiH',
            coverImage: folklor,
            imageCount: 28,
        },
        {
            id: 'emanulah-dzenita',
            title: 'Emanulah & Dženita',
            description: '',
            date: '27.7.2025.',
            location: 'Vitez, BiH',
            coverImage: emanulah,
            imageCount: 11,
        },
        {
            id: 'matura-mss-travnik-2025',
            title: 'Matura 2025. Mješovite srednje škole Travnik',
            description: '',
            date: '24.05.2025.',
            location: 'Travnik, BiH',
            coverImage: msstravnik,
            imageCount: 33,
        },
        {
            id: 'matura-msts-travnik-2025',
            title: 'Matura 2025. Mješovita srednja tehnička škola Travnik',
            description: '',
            date: '17.5.2025.',
            location: 'Travnik, BiH',
            coverImage: msts,
            imageCount: 32,
        },
        {
            id: 'matura-mss-vitez-2025',
            title: 'Matura 2025. Mješovite srednje škole Vitez',
            description: '',
            date: '23.5.2025.',
            location: 'Vitez, BiH',
            coverImage: mssvitez,
            imageCount: 14,
        },
        {
            id: 'nermin-zahida',
            title: 'Nermin & Zahida',
            description: '',
            date: '11.10.2024.',
            location: 'Vitez, BiH',
            coverImage: nermin,
            imageCount: 10,
        },
        {
            id: 'venecija-venice-italy',
            title: 'Venecija',
            description: 'Galerija slika iz Venecije.',
            date: '17.9.2023.',
            location: 'Venecija, Italija',
            coverImage: venecija,
            imageCount: 0,
        },
        {
            id: 'san-marino',
            title: 'San Marino',
            description: 'Galerija slika iz San Marina.',
            date: '19.9.2023.',
            location: 'San Marino, SAN',
            coverImage: sanmarino,
            imageCount: 0,
        },
        {
            id: 'rimini',
            title: 'Rimini',
            description: 'Galerija slika iz Riminija.',
            date: '18.10.2025.09.2023.',
            location: 'Rimini, Italija',
            coverImage: rimini,
            imageCount: 0,
        },
        {
            id: 'verona',
            title: 'Verona',
            description: 'Galerija slika iz Verone.',
            date: '28.12.2024..09.2023.',
            location: 'Verona, Italija',
            coverImage: verona,
            imageCount: 0,
        },
        {
            id: 'francuska-france',
            title: 'Francuska 2022.',
            description: 'Galerija slika iz Francuske.',
            date: '12.7.2022.',
            location: 'Colmar - Strasbourg - Freiburg - Breisach, Francuska, Njemačka',
            coverImage: francuska,
            imageCount: 0,
        },


    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-violet-400/10 to-fuchsia-600/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                            Portfolio / Galerija slika
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Pogledajte sva izadnja koje sam izdvojio za Vas!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <EventCard {...event} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Portfolio;