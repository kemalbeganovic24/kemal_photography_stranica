import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, Building, Heart, Star, Disc, Zap, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga4';

import Header from '../components/Header';
import Footer from '../components/Footer';

import kamera from "../assets/eos1200d.jpg";
import kamera1 from "../assets/760d.jpg";

import canon from "../assets/objektiv1.jpg";
import canon1 from "../assets/objektiv2.jpg";
import canon2 from "../assets/objektiv3.jpg";
import canon3 from "../assets/objektiv4.jpg";
import canon4 from "../assets/objektiv5.jpg";

import godox from "../assets/godox.jpg";
import tripod from "../assets/tripod.jpg";

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            key: 'weddings',
            icon: Heart,
            title: t('services_list.weddings.title'),
            description: t('services_list.weddings.description'),
            features: [
                t('services_list.weddings.f1'),
                t('services_list.weddings.f2'),
                t('services_list.weddings.f3')
            ],
            price: t('services_list.weddings.price'),
        },
        {
            key: 'portraits',
            icon: Users,
            title: t('services_list.portraits.title'),
            description: t('services_list.portraits.description'),
            features: [t('services_list.portraits.f1')],
            price: t('services_list.portraits.price'),
        },
        {
            key: 'events',
            icon: Building,
            title: t('services_list.events.title'),
            description: t('services_list.events.description'),
            features: [],
            price: t('services_list.events.price'),
        },
        {
            key: 'sports',
            icon: Camera,
            title: t('services_list.sports.title'),
            description: t('services_list.sports.description'),
            features: [t('services_list.sports.f1')],
            price: t('services_list.sports.price'),
        },
    ];

    const equipment = [
        {
            category: t('equipment_cat.cameras'),
            icon: Camera,
            items: [
                { name: 'Canon EOS 760D', image: kamera1 },
                { name: 'Canon EOS 1200D', image: kamera },
            ],
        },
        {
            category: t('equipment_cat.lenses'),
            icon: Disc,
            items: [
                { name: 'EF 24-70mm f/2.8 L USM', image: canon },
                { name: 'EF-S 55-250mm 1:4-5.6', image: canon4 },
                { name: 'EF 35-105mm 1:4-5.5-5.6', image: canon3 },
                { name: 'EF 50mm 1:1.8', image: canon2 },
                { name: 'EF-S 10-18mm', image: canon1},
            ],
        },
        {
            category: t('equipment_cat.accessories'),
            icon: Zap,
            items: [
                { name: 'GodoX TT600', image: godox },
                { name: 'Tripod PLOKANA PK-9990', image: tripod },
            ],
        },
    ];

    const trackServiceClick = (serviceTitle) => {
        ReactGA.event({
            action: 'click_service_card',
            params: {
                service_name: serviceTitle
            }
        });
    };

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
                            {t('services_hero_title')}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Equipment Section */}
            <section className="py-20 bg-slate-950 text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-fuchsia-600 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {t('equipment_title')}
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            {t('equipment_subtitle')}
                        </p>
                    </motion.div>

                    <div className="space-y-20">
                        {equipment.map((group) => (
                            <div key={group.category}>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <group.icon className="h-6 w-6 text-fuchsia-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold">{group.category}</h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {group.items.map((item, itemIndex) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: itemIndex * 0.1 }}
                                            className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-fuchsia-500/50 transition-all duration-300"
                                        >
                                            <div className="aspect-[4/3] overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="p-4 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
                                                <p className="text-sm font-medium text-white flex items-center gap-2">
                                                    <ShieldCheck className="h-4 w-4 text-fuchsia-500" />
                                                    {item.name}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                onClick={() => trackServiceClick(service.title)}
                                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
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
                                {service.description && (
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                )}
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