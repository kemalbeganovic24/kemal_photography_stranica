import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, Building, Heart, Star, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
    const services = [
        {
            icon: Heart,
            title: 'Vjenčanja',
            description: '',
            features: ['Cijelodnevno slikanje', 'Općinsko/Šerijatsko vjenčanje', 'Editovanje (Lightroom)'],
            price: 'Starting at 400KM',
        },
        {
            icon: Users,
            title: 'Portretske sesije',
            description: 'Portretske sesije za individualne osobe, grupe, porodice, parove i slično.',
            features: ['1-4 sata sesije'],
            price: 'Na upit',
        },
        {
            icon: Building,
            title: 'Događaji / eventi',
            description: '',
            features: [],
            price: 'Na upit',
        },
        {
            icon: Camera,
            title: 'Sport',
            description: '',
            features: ['Fudbal/Nogomet, Futsal, Košarka, Stoni tenis, tenis'],
            price: 'Na upit',
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
                            Usluge
                        </h1>

                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white rounded-lg mr-4">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                                        <p className="text-fuchsia-600 font-semibold">{service.price}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-gray-600">
                                            <Star className="h-4 w-4 text-fuchsia-600 mr-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            <Footer />
        </div>
    );
};

export default Services;