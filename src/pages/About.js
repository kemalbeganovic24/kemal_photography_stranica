import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Award, Heart, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import omeni from '../assets/pozadina.jpg'

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-violet-400/10 to-fuchsia-600/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                            O meni
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Zovem se Kemal i bavim se fotografijom sa ciljem da uhvatim trenutke koje se pamte.
                            Bavim se portretima, događajima, sportom i kreativnom fotografijom, ali jednako volim i mir prirode gdje mogu fotografisati pejzaže.
                            Editovanje u Lightroomu mi je posebno zadovoljstvo jer to mi je vrijeme za smirenje, uživanje i kreativnost, gdje svakoj fotografiji dam njen jedinstveni izgled i atmosferu.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-slate-800 mb-6">Moja priča</h2>
                            <p className="text-gray-600 mb-6">
                                Kemal Photography je nastao u oktobru 2022. godine, najprije kao jednostavna zabava i način da zabilježim trenutke koji mi se sviđaju. Malo po malo, kroz fotografiju, razvijao sam svoj stil i gledanje svijeta, istražujući prirodu, gradove, putovanja i ljude. Danas, ono što je počelo kao igra, postalo je moja strast i način da dijelim svoj pogled na svijet kroz objektiv.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-fuchsia-600">500+</div>
                                    <div className="text-sm text-gray-600">Zadovoljnih korisnika</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-orange-500">80,000+</div>
                                    <div className="text-sm text-gray-600">Fotografija</div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={omeni}
                                alt="Photography studio"
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">Moje vještine</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Camera,
                                title: 'Kreativnost',
                                description: '',
                            },
                            {
                                icon: Heart,
                                title: 'Upornost',
                                description: '',
                            },
                            {
                                icon: Users,
                                title: 'Tehnička vještina',
                                description: '',
                            },
                            {
                                icon: Award,
                                title: 'Strpljenje',
                                description: '',
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white rounded-full mb-4">
                                    <value.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-800 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;