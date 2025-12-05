import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

const EventCard = ({
                       id,
                       title,
                       description,
                       date,
                       location,
                       coverImage,
                       imageCount,
                   }) => {
    return (
        <Link to={`/event/${id}`} className="group block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                    <img
                        src={coverImage}
                        alt={title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-fuchsia-600 text-white px-2 py-1 rounded-full text-sm font-medium">
                        {imageCount} photos
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-fuchsia-600 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default EventCard;