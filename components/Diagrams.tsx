
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Scale, ShieldCheck, BadgeCheck } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const products = [
    {
      name: "Premium Rice",
      category: "Grains",
      desc: "High-quality Basmati and non-Basmati rice sourced from the best fields in India.",
      // White rice bowl/sack
      img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Exotic Spices",
      category: "Spices",
      desc: "Cardamom, Pepper, Turmeric and other authentic Indian spices known for aroma.",
      // Variety of spices in bowls
      img: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Millets & Grains",
      category: "Superfoods",
      desc: "Nutrient-rich Bajra, Ragi, and other millets promoting a healthy lifestyle.",
      // Close up of grains/textures
      img: "https://images.unsplash.com/photo-1486328228599-85db4443971f?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Engineering Goods",
      category: "Industrial",
      desc: "Precision engineering components and machinery parts for global industries.",
      // Industrial gears/machinery
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "Sugar",
        category: "Commodities",
        desc: "Premium grade sugar sourced directly from top manufacturers.",
        // Sugar cubes/spoon
        img: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "Pulse & Cereals",
        category: "Staples",
        desc: "A wide variety of essential pulses and cereals for international markets.",
        // Lentils/Pulses in wooden spoons
        img: "https://images.unsplash.com/photo-1515543904379-3d757afe726e?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
      {products.map((item, idx) => (
        <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
        >
            <div className="h-48 overflow-hidden relative bg-stone-100">
                <img 
                    src={item.img} 
                    alt={item.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-vivarman-gold/90 text-vivarman-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    {item.category}
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl text-vivarman-green mb-2">{item.name}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4 flex-1">{item.desc}</p>
                <div className="w-12 h-1 bg-vivarman-gold"></div>
            </div>
        </motion.div>
      ))}
    </div>
  );
};

export const ServicesList: React.FC = () => {
    const services = [
        {
            icon: <Globe size={32} />,
            title: "Global Export",
            desc: "Connecting Indian produce with international markets seamlessly."
        },
        {
            icon: <BadgeCheck size={32} />,
            title: "Fully Certified",
            desc: "Registered with FSSAI, APEDA, Spices Board, and LEI compliant."
        },
        {
            icon: <Scale size={32} />,
            title: "Fair Trade",
            desc: "Ensuring win-win deals for both producers and buyers."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Quality Assurance",
            desc: "Rigorous quality checks to meet global standards."
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            {services.map((s, i) => (
                <div key={i} className="p-6 bg-vivarman-cream border border-stone-200 rounded-lg text-center hover:border-vivarman-gold transition-colors duration-300 group">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vivarman-green/10 text-vivarman-green mb-4 group-hover:bg-vivarman-gold group-hover:text-vivarman-dark transition-colors">
                        {s.icon}
                    </div>
                    <h3 className="font-serif text-lg text-vivarman-dark mb-2">{s.title}</h3>
                    <p className="text-sm text-stone-600">{s.desc}</p>
                </div>
            ))}
        </div>
    );
}
