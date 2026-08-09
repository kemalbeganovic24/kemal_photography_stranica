import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

const Portfolio = () => {
    const allEvents = [
        {
            id: 'adnan_i_asja_2026',
            title: 'Adnan & Asja Svadba',
            description: '',
            date: '07.08.2026.',
            location: 'Zenica, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/IMG_0405.jpg',
            imageCount: 12,
        },
        {
            id: 'farma-lavandi2026',
            title: 'Farma Lavandi',
            description: '',
            date: '26.07.2026.',
            location: 'Visoko, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/lavandacover.jpg',
            imageCount: 6,
        },
        {
            id: 'smotra-bzkodvitez-2026',
            title: '18. Međunarodna smotra Vitez',
            description: '',
            date: '22.07.2026.',
            location: 'Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/smotrabzk2026_cover.jpg',
            imageCount: 153,
        },
        {
            id: 'ena-sesija-slikanja2026',
            title: 'Ena sesija slikanja',
            description: '',
            date: '14.05.2026.',
            location: 'Kopenhagen, Danska',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/ena_cover.jpg',
            imageCount: 7,
        },
        {
            id: 'smotra-folklora-turbe-2026',
            title: 'Smotra folklra Turbe 2026',
            description: '',
            date: '04.07.2026.',
            location: 'Turbe-Travnik, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/smotraturbe2026_cover.JPG',
            imageCount: 70,
        },
        {
            id: 'Nyhavn',
            title: 'Nyhavn Kopenhagen',
            description: 'Nyhavn Kopenhagen',
            date: '10.05.2026.',
            location: 'Kopenhagen, Danska',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/nyhavn_cover.JPG',
            imageCount: 52,
        },
        {
            id: 'Grad-Kopenhagen',
            title: 'Grad Kopenhagen',
            description: 'Grad Kopenhagen',
            date: '10.05.2026.',
            location: 'Kopenhagen, Danska',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/kopenhagen1_cover.JPG',
            imageCount: 19,
        },
        {
            id: 'Centar-Kopenhagena',
            title: 'Centar Grada Kopenhagena',
            description: 'Centar grada Kopenhagen',
            date: '10.05.2026.',
            location: 'Kopenhagen, Danska',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/kopenhagen2_cover.JPG',
            imageCount: 27,
        },
        {
            id: 'tivoli-gardens-cuvari-2026',
            title: 'Tivoli Gardens ',
            description: 'Tivoli Youth Guard - Omladinska garda',
            date: '10.05.2026.',
            location: 'Kopenhagen, Danska',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/tivoliguards_cover.JPG',

            imageCount: 12,
        },
        {
            id: 'tivoli-gardens-kopenhagen-2026',
            title: 'Tivoli Gardens',
            description: '',
            date: '10.05.2026.',
            location: 'Kopenhagen, Danska',
            coverImage:  'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/tivoli_cover.JPG',

            imageCount: 26,
        },
        {
            id: 'ednan-baltic-sesija-2026',
            title: 'Ednan Baltić - sesija slikanja',
            description: '',
            date: '31.05.2026.',
            location: 'Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/balta_cover.jpg',
            imageCount: 4,
        },
        {
            id: 'tradicionalno_bajramsko_sijelo_nek_mirisu_avlije_2026',
            title: 'Tradicionlano Bajramsko sijelo "Nek mirišu avlije"',
            description: '',
            date: '29.05.2026.',
            location: 'Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/laris_cover.jpg',
            imageCount: 24,
        },
        {
            id: 'matura-msst2026',
            title: 'Matura 2026. Mješovite srednje škole Travnik',
            description: '',
            date: '23.05.2026.',
            location: 'Travnik, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/mss_cover.jpg',
            imageCount: 5,
        },
        {
            id: 'ahmed-varupa-matura-msst2026',
            title: 'Ahmed Varupa Matura 2026',
            description: '',
            date: '23.05.2026.',
            location: 'Travnik, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/ahmed_cover.jpg',
            imageCount: 7,
        },
        {
            id: 'amila-pezer-matura-msst2026',
            title: 'Amila Pezer Matura 2026',
            description: '',
            date: '23.05.2026.',
            location: 'Etno selo Čardaci Vitez, Travnik, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/amilapezer_cover.jpg',
            imageCount: 12,
        },
        {
            id: 'amila-dajic-matura-msst2026',
            title: 'Amila Dajić Matura 2026',
            description: '',
            date: '29.04.2026.',
            location: 'Travnik, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/amiladajic_cover.jpg',
            imageCount: 12,
        },
        {
            id: 'edin-suljevic-matura-msst2026',
            title: 'Edin Suljević Matura 2026',
            description: '',
            date: '23.05.2026.',
            location: 'Etno selo Čardaci Vitez, Travnik, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/sulja_cover.jpg',
            imageCount: 8,
        },
        {
            id: 'edna-tulum-matura-mseus2026',
            title: 'Edna Tulum Matura 2026',
            description: '',
            date: '22.05.2026.',
            location: 'Travnik, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/ednat_cover.jpg',
            imageCount: 4,
        },
        {
            id: 'matura-msts2026',
            title: 'Matura 2026. Mješovite srednje tehničke škole Travnik',
            description: '',
            date: '16.05.2026.',
            location: 'Travnik, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/msts26_cover.jpg',
            imageCount: 22,
        },

        {
            id: 'amar-hodzic-matura-msts2026',
            title: 'Amar Hodžić Matura 2026',
            description: '',
            date: '16.05.2026.',
            location: 'Travnik, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/amarhodzic_cover.jpg',
            imageCount: 8,
        },
        {
            id: 'dan-otvorenih-vrata-univerziteta-u-zenici-2026',
            title: 'Dan otvorenih vrata Univerziteta u Zenici 2026',
            description: '',
            date: '29.04.2026.',
            location: 'Kampus Univerziteta u Zenici, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/dov_zenica_cover.JPG',
            imageCount: 50,
        },
        {
            id: 'etno-selo-cardaci2026',
            title: 'Etno selo Čardaci',
            description: '',
            date: '26.04.2026.',
            location: 'Etno selo Čardaci Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/etno_cover.jpg',
            imageCount: 3,
        },
        {
            id: 'bajramsko_sijelo_nek_mirisu_avlije_2026',
            title: 'Bajramsko sijelo "Nek mirišu avlije"',
            description: '',
            date: '22.03.2026.',
            location: 'Dvorana Behar Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/bajramskoselo_cover.jpg',
            imageCount: 34,
        },
        {
            id: 'enes_danijela',
            title: 'Enes & Danijela',
            description: '',
            date: '07.02.2026.',
            location: 'Etno selo Čardaci Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/cover_enesdanijela.jpg',
            imageCount: 15,
        },
        {
            id: 'Ajna_islamovic_slike',
            title: 'Ajna Islamović - portret sesija',
            description: '',
            date: '06.02.2026.',
            location: 'Etno selo Čardaci Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/cover_ajnai.jpg',
            imageCount: 9,
        },
        {
            id: 'frano-romari',
            title: 'Frano Topić - Sport sesija',
            description: '',
            date: '31.01.2026.',
            location: 'Stadion Dolac na Lašvi, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/frano_cover.jpg',
            imageCount: 6,
        },
        {
            id: 'Zarucivanje_aras',
            title: 'Zaručivanje Aras',
            description: '',
            date: '25.01.2026.',
            location: 'Travnik, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/cover_aras.jpg',
            imageCount: 5,
        },
        {
            id: 'Kumstvo_Dzejalana',
            title: 'Galerija slika sa kumstva',
            description: '',
            date: '04.01.2026.',
            location: 'Restoran Bistrovo Kruščica Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/cover_kumstvodzejlana.jpg',
            imageCount: 21,
        },
        {
            id: 'Graz',
            title: 'Galerija slika iz Graza',
            description: '',
            date: '29.11.2025.',
            location: 'Graz, Austrija',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/grazcover.jpg',
            imageCount: 30,
        },
        {
            id: 'premijera-filma-testament',
            title: 'Premijera filma ,,Testament"',
            description: '',
            date: '23.10.2025.',
            location: 'Kino sala Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/cover_testamnet.jpg',
            imageCount: 29,
        },
        {
            id: 'noc-ilahija-kasida',
            title: 'Noć ilahija i kasida',
            date: '18.10.2025.',
            location: 'Kino sala Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/cover_nocilahija.JPG',
            imageCount: 9,
        },
        {
            id: 'obiljezavanje-vatrogasaca',
            title: 'Obilježavanje 60. godišnjice DVD Stari Vitez',
            description: '',
            date: '18.10.2025.',
            location: 'Dvorana Behar Stari Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/cover_vatrogasci.jpg',
            imageCount: 39,
        },
        {
            id: 'fk-vitez',
            title: 'FK Vitez',
            description: 'Galerija slika fudbalera FK Vitez - sezona 2025/2026',
            date: 'Sezona 2025/2026',
            location: 'Gradski stadion Vitez',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/cover_fk.JPG',
            imageCount: 14,
        },
        {
            id: 'kmf-vitez',
            title: 'KMF Vitez',
            description: 'Galerija slika KMF Vitez - sezona 2025/2026',
            date: 'Sezona 2025/2026',
            location: 'Gradska sportska dvorana Vitez',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/cover_kmf.JPG',
            imageCount: 25,
        },
        {
            id: 'anes-ajla',
            title: 'Anes & Ajla',
            description: '',
            date: '21.8.2025.',
            location: 'Busovača, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/cover_anesajla.jpg',
            imageCount: 7,
        },
        {
            id: 'elvedin-semina',
            title: 'Elvedin & Semina',
            description: '',
            date: '29.7.2025.',
            location: 'Zenica, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/cover_elvedinsemina.jpg',
            imageCount: 9,
        },
        {
            id: 'smotra-vitez-2025',
            title: 'Međunarodni folkorlni festival Vitez 2025.',
            description: 'Međunarodna smotra folklora u Vitezu.',
            date: '31.7.2025.',
            location: 'Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/cover_bzk.jpg',
            imageCount: 28,
        },
        {
            id: 'emanulah-dzenita',
            title: 'Emanulah & Dženita',
            description: '',
            date: '27.7.2025.',
            location: 'Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/cover_emanulah.jpg',
            imageCount: 11,
        },
        {
            id: 'matura-mss-travnik-2025',
            title: 'Matura 2025. Mješovite srednje škole Travnik',
            description: '',
            date: '24.05.2025.',
            location: 'Travnik, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/msstravnikcover.jpg',
            imageCount: 33,
        },
        {
            id: 'matura-msts-travnik-2025',
            title: 'Matura 2025. Mješovita srednja tehnička škola Travnik',
            description: '',
            date: '17.5.2025.',
            location: 'Travnik, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/mstscover.jpg',
            imageCount: 12,
        },
        {
            id: 'matura-mss-vitez-2025',
            title: 'Matura 2025. Mješovite srednje škole Vitez',
            description: '',
            date: '23.5.2025.',
            location: 'Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/mssvitezcover.jpg',
            imageCount: 14,
        },
        {
            id: 'amila-pezer',
            title: 'Amila Pezer - portret sesija',
            description: '',
            date: '22.5.2025.',
            location: 'Etno selo Čardaci Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/amilap_cover.jpg',
            imageCount: 7,
        },
        {
            id: 'tarik-sajra',
            title: 'Tarik & Sajra',
            description: '',
            date: '11.03.2025.',
            location: 'Etno selo Čardaci Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/tarik_sajra_cover.jpg',
            imageCount: 10,
        },
        {
            id: 'nermin-zahida',
            title: 'Nermin & Zahida',
            description: '',
            date: '11.10.2024.',
            location: 'Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/nermincover.jpg',
            imageCount: 10,
        },
        {
            id: 'mevludin-hana',
            title: 'Mevludin & Hana',
            description: '',
            date: '27.12.2024.',
            location: 'Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/mevle_hana_cover.jpg',
            imageCount: 5,
        },
        {
            id: 'faris-adna',
            title: 'Faris & Adna',
            description: '',
            date: '28.08.2024.',
            location: 'Travnik, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/faris_adna_cover.jpg',
            imageCount: 11,
        },
        {
            id: 'haris-armina',
            title: 'Harisa & Armina',
            description: '',
            date: '16.08.2024.',
            location: 'Zenica, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/haris_armina_cover.jpg',
            imageCount: 7,
        },
        {
            id: 'belma-hero-matura',
            title: 'Belma Hero - matura',
            description: '',
            date: '24.05.2024.',
            location: 'Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/belma_cover.jpg',
            imageCount: 19,
        },
        {
            id: 'harisa-zejnic-matura',
            title: 'Harisa Zejnić - matura',
            description: '',
            date: '24.05.2024.',
            location: 'Tvrđava Travnik, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/harisa_cover.jpg',
            imageCount: 15,
        },
        {
            id: 'suana-hurem-matura',
            title: 'Suana Hurem - matura',
            description: '',
            date: '17.05.2024.',
            location: 'Vitez, BiH',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/suana_cover.jpg',
            imageCount: 11,
        },
        {
            id: 'venecija-venice-italy',
            title: 'Venecija',
            description: 'Galerija slika iz Venecije.',
            date: '17.9.2023.',
            location: 'Venecija, Italija',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/venecijacover2.jpg',
            imageCount: 19,
        },
        {
            id: 'san-marino',
            title: 'San Marino',
            description: 'Galerija slika iz San Marina.',
            date: '19.9.2023.',
            location: 'San Marino, SAN',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/sanmarino_cover.JPG',
            imageCount: 16,
        },
        {
            id: 'rimini',
            title: 'Rimini',
            description: 'Galerija slika iz Riminija.',
            date: '20.09.2023.',
            location: 'Rimini, Italija',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/riminicover.JPG',
            imageCount: 11,
        },

        {
            id: 'verona',
            title: 'Verona',
            description: 'Galerija slika iz Verone.',
            date: '22.09.2023.',
            location: 'Verona, Italija',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/veronacover.JPG',
            imageCount: 20,
        },
        {
            id: 'Freiburg',
            title: 'Freiburg',
            description: 'Galerija slika iz Freiburga.',
            date: '01.8.2022.',
            location: 'Freiburg, Njemačka',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/freiburgcover.JPG',
            imageCount: 9,
        },

        {
            id: 'Breisach-am-Rhein',
            title: 'Breisach am Rhein ',
            description: 'Galerija slika iz Breisacha.',
            date: '29.7.2022.',
            location: 'Breisach am Rhein, Njemačka',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/brajzahcover.JPG',
            imageCount: 8,
        },

        {
            id: 'strasburg-france',
            title: 'Strasburg',
            description: 'Galerija slika iz Strasburga.',
            date: '16.7.2022.',
            location: 'Strasburg, Francuska',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/strasburgcover.JPG',
            imageCount: 23,
        },

        {
            id: 'colmar-france',
            title: 'Colmar',
            description: 'Galerija slika iz Colmara.',
            date: '13.7.2022.',
            location: 'Colmar, Francuska',
            coverImage: 'https://loojmdgwtbcuphthylls.supabase.co/storage/v1/object/public/portfolio/colmarcover.JPG',
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