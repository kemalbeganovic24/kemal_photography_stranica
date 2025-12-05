import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    service: z.string().min(1, 'Please select a service'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data) => {
        try {
            // Simulate form submission
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log('Form data:', data);
            toast.success('Message sent successfully! We\'ll get back to you soon.');
            reset();
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
        }
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
                            Kontaktiraj me!
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Spreman/a za zabilježiti vaše posebne trenutke?
                            Hajde da razgovaramo o vašim željama i stvorimo nešto posebno zajedno!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}


                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:pl-8"
                        >
                            <h2 className="text-3xl font-bold text-slate-800 mb-8">Kontakt informacije</h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white rounded-lg flex items-center justify-center">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">Email</h3>
                                        <p className="text-gray-600">kemalbeganovic77@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white rounded-lg flex items-center justify-center">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">Broj telefona</h3>
                                        <p className="text-gray-600">+387 062 890 153</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white rounded-lg flex items-center justify-center">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">Lokacija</h3>
                                        <p className="text-gray-600">72250 Vitez</p>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-8 p-6 bg-gradient-to-r from-violet-400/10 to-fuchsia-600/10 rounded-lg">
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">Hitno javljanje</h3>
                                <p className="text-gray-600">
                                    Inače odgovorim u roku 24 sata, u slučaju hitne situacija nazovite na broj.
                                    Za kontakt koristite aplikaciju Whatsapp ili Viber!
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;