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
import tariksajra from '../assets/tarik_sajra_cover.jpg'
import mevlehana from '../assets/mevle_hana_cover.jpg'
import harisarmina from '../assets/haris_armina_cover.jpg'
import farisadna from '../assets/faris_adna_cover.jpg'
import graz from '../assets/grazcover.jpg'
import colmar from '../assets/colmarcover.JPG'
import rimini from '../assets/riminicover.JPG'
import verona from '../assets/veronacover.JPG'
import sanmarino from '../assets/sanmarino_cover.JPG'
import venecija from '../assets/venecijacover1.jpg'
import dzejlanakumstvo from '../assets/cover_kumstvodzejlana.jpg'
import aras from '../assets/cover_aras.jpg'
import ajnai from '../assets/cover_ajnai.jpg'
import enesdanijela from '../assets/cover_enesdanijela.jpg'

import strasburg from '../assets/strasburgcover.JPG'
import brajzah from '../assets/brajzahcover.JPG'
import freiburg from '../assets/freiburgcover.JPG'

import amila from '../assets/amilap_cover.jpg'
import frano from '../assets/frano_cover.jpg'
import belma from '../assets/belma_cover.jpg'
import harisa from '../assets/harisa_cover.jpg'
import suana from '../assets/suana_cover.jpg'
import bajramskosijelo from "../assets/bajramskoselo_cover.jpg";
import dovzenica from "../assets/dov_zenica_cover.JPG";
import etnoselo from "../assets/etno_cover.jpg";
import sulja from "../assets/sulja_cover.jpg";
import amiladajic from "../assets/amiladajic_cover.jpg";
import amarh from "../assets/amarhodzic_cover.jpg";
import ednat from "../assets/ednat_cover.jpg";
import msts26 from "../assets/msts26_cover.jpg";
import mss26 from "../assets/mss_cover.jpg";
import ahmedv from "../assets/ahmed_cover.jpg";
import amilap from "../assets/amilapezer_cover.jpg";
import ednanbalta from "../assets/balta_cover.jpg";
import larisbzk from "../assets/laris_cover.jpg";

const Portfolio = () => {
    const allEvents = [
        {
            id: 'ednan-baltic-sesija-2026',
            title: 'Ednan Baltić - sesija slikanja',
            description: '',
            date: '31.05.2026.',
            location: 'Vitez, BiH',
            coverImage: ednanbalta,
            imageCount: 4,
        },
        {
            id: 'tradicionalno_bajramsko_sijelo_nek_mirisu_avlije_2026',
            title: 'Tradicionlano Bajramsko sijelo "Nek mirišu avlije"',
            description: '',
            date: '29.05.2026.',
            location: 'Vitez, BiH',
            coverImage: larisbzk,
            imageCount: 24,
        },
        {
            id: 'matura-msst2026',
            title: 'Matura 2026. Mješovite srednje škole Travnik',
            description: '',
            date: '23.05.2026.',
            location: 'Travnik, BiH',
            coverImage: mss26,
            imageCount: 5,
        },
        {
            id: 'ahmed-varupa-matura-msst2026',
            title: 'Ahmed Varupa Matura 2026',
            description: '',
            date: '23.05.2026.',
            location: 'Travnik, BiH',
            coverImage: ahmedv,
            imageCount: 7,
        },
        {
            id: 'amila-pezer-matura-msst2026',
            title: 'Amila Pezer Matura 2026',
            description: '',
            date: '23.05.2026.',
            location: 'Etno selo Čardaci Vitez, Travnik, BiH',
            coverImage: amilap,
            imageCount: 12,
        },
        {
            id: 'amila-dajic-matura-msst2026',
            title: 'Amila Dajić Matura 2026',
            description: '',
            date: '29.04.2026.',
            location: 'Travnik, BiH',
            coverImage: amiladajic,
            imageCount: 12,
        },
        {
            id: 'edin-suljevic-matura-msst2026',
            title: 'Edin Suljević Matura 2026',
            description: '',
            date: '23.05.2026.',
            location: 'Etno selo Čardaci Vitez, Travnik, BiH',
            coverImage: sulja,
            imageCount: 8,
        },
        {
            id: 'edna-tulum-matura-mseus2026',
            title: 'Edna Tulum Matura 2026',
            description: '',
            date: '22.05.2026.',
            location: 'Travnik, BiH',
            coverImage: ednat,
            imageCount: 4,
        },
        {
            id: 'matura-msts2026',
            title: 'Matura 2026. Mješovite srednje tehničke škole Travnik',
            description: '',
            date: '16.05.2026.',
            location: 'Travnik, BiH',
            coverImage: msts26,
            imageCount: 22,
        },

        {
            id: 'amar-hodzic-matura-msts2026',
            title: 'Amar Hodžić Matura 2026',
            description: '',
            date: '16.05.2026.',
            location: 'Travnik, BiH',
            coverImage: amarh,
            imageCount: 8,
        },
        {
            id: 'dan-otvorenih-vrata-univerziteta-u-zenici-2026',
            title: 'Dan otvorenih vrata Univerziteta u Zenici 2026',
            description: '',
            date: '29.04.2026.',
            location: 'Kampus Univerziteta u Zenici, BiH',
            coverImage: dovzenica,
            imageCount: 50,
        },
        {
            id: 'etno-selo-cardaci2026',
            title: 'Etno selo Čardaci',
            description: '',
            date: '26.04.2026.',
            location: 'Etno selo Čardaci Vitez, BiH',
            coverImage: etnoselo,
            imageCount: 3,
        },
        {
            id: 'bajramsko_sijelo_nek_mirisu_avlije_2026',
            title: 'Bajramsko sijelo "Nek mirišu avlije"',
            description: '',
            date: '22.03.2026.',
            location: 'Dvorana Behar Vitez, BiH',
            coverImage: bajramskosijelo,
            imageCount: 34,
        },
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
        {
            id: 'Zarucivanje_aras',
            title: 'Zaručivanje Aras',
            description: '',
            date: '25.01.2026.',
            location: 'Travnik, BiH',
            coverImage: aras,
            imageCount: 5,
        },
        {
            id: 'Kumstvo_Dzejalana',
            title: 'Galerija slika sa kumstva',
            description: '',
            date: '04.01.2026.',
            location: 'Restoran Bistrovo Kruščica Vitez, BiH',
            coverImage: dzejlanakumstvo,
            imageCount: 21,
        },
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
            title: 'Premijera filma ,,Testament"',
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
            id: 'amila-pezer',
            title: 'Amila Pezer - portret sesija',
            description: '',
            date: '22.5.2025.',
            location: 'Etno selo Čardaci Vitez, BiH',
            coverImage: amila,
            imageCount: 7,
        },
        {
            id: 'tarik-sajra',
            title: 'Tarik & Sajra',
            description: '',
            date: '11.03.2025.',
            location: 'Etno selo Čardaci Vitez, BiH',
            coverImage: tariksajra,
            imageCount: 10,
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
            id: 'mevludin-hana',
            title: 'Mevludin & Hana',
            description: '',
            date: '27.12.2024.',
            location: 'Vitez, BiH',
            coverImage: mevlehana,
            imageCount: 5,
        },
        {
            id: 'faris-adna',
            title: 'Faris & Adna',
            description: '',
            date: '28.08.2024.',
            location: 'Travnik, BiH',
            coverImage: farisadna,
            imageCount: 11,
        },
        {
            id: 'haris-armina',
            title: 'Harisa & Armina',
            description: '',
            date: '16.08.2024.',
            location: 'Zenica, BiH',
            coverImage: harisarmina,
            imageCount: 7,
        },
        {
            id: 'belma-hero-matura',
            title: 'Belma Hero - matura',
            description: '',
            date: '24.05.2024.',
            location: 'Vitez, BiH',
            coverImage: belma,
            imageCount: 19,
        },
        {
            id: 'harisa-zejnic-matura',
            title: 'Harisa Zejnić - matura',
            description: '',
            date: '24.05.2024.',
            location: 'Tvrđava Travnik, BiH',
            coverImage: harisa,
            imageCount: 15,
        },
        {
            id: 'suana-hurem-matura',
            title: 'Suana Hurem - matura',
            description: '',
            date: '17.05.2024.',
            location: 'Vitez, BiH',
            coverImage: suana,
            imageCount: 11,
        },
        {
            id: 'venecija-venice-italy',
            title: 'Venecija',
            description: 'Galerija slika iz Venecije.',
            date: '17.9.2023.',
            location: 'Venecija, Italija',
            coverImage: venecija,
            imageCount: 19,
        },
        {
            id: 'san-marino',
            title: 'San Marino',
            description: 'Galerija slika iz San Marina.',
            date: '19.9.2023.',
            location: 'San Marino, SAN',
            coverImage: sanmarino,
            imageCount: 16,
        },
        {
            id: 'rimini',
            title: 'Rimini',
            description: 'Galerija slika iz Riminija.',
            date: '20.09.2023.',
            location: 'Rimini, Italija',
            coverImage: rimini,
            imageCount: 11,
        },

        {
            id: 'verona',
            title: 'Verona',
            description: 'Galerija slika iz Verone.',
            date: '22.09.2023.',
            location: 'Verona, Italija',
            coverImage: verona,
            imageCount: 20,
        },
        {
            id: 'Freiburg',
            title: 'Freiburg',
            description: 'Galerija slika iz Freiburga.',
            date: '01.8.2022.',
            location: 'Freiburg, Njemačka',
            coverImage: freiburg,
            imageCount: 9,
        },

        {
            id: 'Breisach-am-Rhein',
            title: 'Breisach am Rhein ',
            description: 'Galerija slika iz Breisacha.',
            date: '29.7.2022.',
            location: 'Breisach am Rhein, Njemačka',
            coverImage: brajzah,
            imageCount: 8,
        },

        {
            id: 'strasburg-france',
            title: 'Strasburg',
            description: 'Galerija slika iz Strasburga.',
            date: '16.7.2022.',
            location: 'Strasburg, Francuska',
            coverImage: strasburg,
            imageCount: 23,
        },

        {
            id: 'colmar-france',
            title: 'Colmar',
            description: 'Galerija slika iz Colmara.',
            date: '13.7.2022.',
            location: 'Colmar, Francuska',
            coverImage: colmar,
            imageCount: 20,
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