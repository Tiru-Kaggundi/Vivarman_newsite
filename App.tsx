
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { GlobeScene } from './components/QuantumScene';
import { ProductGrid, ServicesList } from './components/Diagrams';
import { ArrowDown, Menu, X, Mail, Phone, MapPin, Leaf, CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-vivarman-cream text-stone-800 selection:bg-vivarman-gold selection:text-vivarman-dark font-sans">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-vivarman-gold rounded-sm flex items-center justify-center text-white shadow-sm">
                <Leaf size={20} />
            </div>
            <div className="flex flex-col">
                <span className={`font-serif font-bold text-xl tracking-wide leading-none transition-colors ${scrolled ? 'text-vivarman-green' : 'text-vivarman-green md:text-white'}`}>
                VIVARMAN
                </span>
                <span className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? 'text-stone-500' : 'text-stone-300 md:text-white/80'}`}>Enterprises LLP</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#about" onClick={scrollToSection('about')} className={`hover:text-vivarman-gold transition-colors cursor-pointer uppercase ${scrolled ? 'text-stone-600' : 'text-white/90'}`}>About</a>
            <a href="#products" onClick={scrollToSection('products')} className={`hover:text-vivarman-gold transition-colors cursor-pointer uppercase ${scrolled ? 'text-stone-600' : 'text-white/90'}`}>Products</a>
            <a href="#services" onClick={scrollToSection('services')} className={`hover:text-vivarman-gold transition-colors cursor-pointer uppercase ${scrolled ? 'text-stone-600' : 'text-white/90'}`}>Services</a>
            <a href="#contact" onClick={scrollToSection('contact')} className="px-5 py-2 bg-vivarman-gold text-white rounded-sm hover:bg-yellow-600 transition-colors shadow-sm cursor-pointer uppercase text-xs font-bold tracking-widest">
              Contact Us
            </a>
          </div>

          <button className={`md:hidden p-2 ${scrolled ? 'text-stone-900' : 'text-vivarman-green'}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-vivarman-cream flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-vivarman-gold transition-colors cursor-pointer">About Us</a>
            <a href="#products" onClick={scrollToSection('products')} className="hover:text-vivarman-gold transition-colors cursor-pointer">Our Products</a>
            <a href="#services" onClick={scrollToSection('services')} className="hover:text-vivarman-gold transition-colors cursor-pointer">Services</a>
            <a href="#contact" onClick={scrollToSection('contact')} className="px-8 py-3 bg-vivarman-green text-white rounded-sm shadow-lg cursor-pointer">Contact Us</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-vivarman-green">
        <GlobeScene />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-vivarman-green/90" />

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="inline-block mb-6 px-4 py-1 border border-vivarman-gold/50 text-vivarman-gold text-xs tracking-[0.3em] uppercase font-bold rounded-full backdrop-blur-sm bg-black/20">
            Export • Import • Trade
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6 drop-shadow-lg">
            Global Reach <br/>
            <span className="text-vivarman-gold italic">Local Expertise</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-200 font-light leading-relaxed mb-12">
            Specializing in the trade of premium agricultural products, spices, and engineering goods from the heart of India to the world.
          </p>
          
          <div className="flex justify-center">
             <a href="#about" onClick={scrollToSection('about')} className="group flex flex-col items-center gap-3 text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer">
                <span className="tracking-widest uppercase text-xs">Discover More</span>
                <span className="p-3 border border-white/20 rounded-full group-hover:border-white group-hover:bg-white/10 transition-all">
                    <ArrowDown size={20} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Introduction / About */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
                 <div className="absolute -top-4 -left-4 w-24 h-24 bg-vivarman-gold/20 rounded-full blur-2xl"></div>
                 <h2 className="font-serif text-4xl md:text-5xl leading-tight text-vivarman-green mb-6 relative z-10">
                    Friendly traders working for <span className="italic text-vivarman-gold">Win-Win</span> deals.
                 </h2>
                 <div className="w-20 h-1.5 bg-vivarman-gold mb-8"></div>
                 <p className="text-lg text-stone-600 leading-relaxed mb-6">
                    Based in <strong>Bengaluru</strong> (erstwhile Bangalore), Vivarman Enterprises LLP specializes in the import and export of agricultural, allied, and engineering products.
                 </p>
                 <p className="text-lg text-stone-600 leading-relaxed">
                    We bridge the gap between local farmers, manufacturers, and the global market. Our philosophy is simple: create value for both parties. With deep roots in Karnataka and a vision for the globe, we ensure seamless trade execution.
                 </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800" 
                    alt="Shipping container and trade" 
                    className="absolute inset-0 w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-vivarman-green/20"></div>
            </div>
          </div>
        </section>

        {/* Certifications Banner */}
        <div className="bg-vivarman-green text-white py-16 border-t border-vivarman-gold/20">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-vivarman-gold font-serif text-2xl mb-8">Fully Accredited & Certified</h3>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-90">
               <div className="flex flex-col items-center gap-3 group">
                 <div className="p-4 rounded-full border border-white/10 group-hover:border-vivarman-gold transition-colors">
                    <CheckCircle className="text-vivarman-gold" size={28} />
                 </div>
                 <div className="flex flex-col">
                    <span className="font-bold text-xl tracking-widest">FSSAI</span>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400">Food Safety India</span>
                 </div>
               </div>
               <div className="flex flex-col items-center gap-3 group">
                 <div className="p-4 rounded-full border border-white/10 group-hover:border-vivarman-gold transition-colors">
                    <Leaf className="text-vivarman-gold" size={28} />
                 </div>
                 <div className="flex flex-col">
                    <span className="font-bold text-xl tracking-widest">APEDA</span>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400">Agricultural Export</span>
                 </div>
               </div>
               <div className="flex flex-col items-center gap-3 group">
                 <div className="p-4 rounded-full border border-white/10 group-hover:border-vivarman-gold transition-colors">
                    <CheckCircle className="text-vivarman-gold" size={28} />
                 </div>
                 <div className="flex flex-col">
                    <span className="font-bold text-xl tracking-widest">SPICES BOARD</span>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400">Government of India</span>
                 </div>
               </div>
               <div className="flex flex-col items-center gap-3 group">
                 <div className="p-4 rounded-full border border-white/10 group-hover:border-vivarman-gold transition-colors">
                    <CheckCircle className="text-vivarman-gold" size={28} />
                 </div>
                 <div className="flex flex-col">
                    <span className="font-bold text-xl tracking-widest">LEI</span>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400">Legal Entity Identifier</span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section id="services" className="py-20 bg-vivarman-cream">
            <div className="container mx-auto px-6 text-center">
                <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">WHAT WE DO</div>
                <h2 className="font-serif text-4xl text-vivarman-green mb-12">Our Services</h2>
                <ServicesList />
            </div>
        </section>

        {/* Products Showcase */}
        <section id="products" className="py-24 bg-white relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-50 skew-x-12 opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-vivarman-gold/10 text-vivarman-gold text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                            Portfolio
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl text-vivarman-green">Our Products</h2>
                    </div>
                    <p className="max-w-md text-stone-600 text-right mt-4 md:mt-0">
                        From the finest grains to robust engineering goods, we source only the best quality for our international partners.
                    </p>
                </div>
                
                <ProductGrid />
                
                <div className="text-center mt-12">
                    <p className="italic text-stone-500 mb-6">"Quality is not an act, it is a habit."</p>
                    <a href="#contact" onClick={scrollToSection('contact')} className="inline-block border-b-2 border-vivarman-gold text-vivarman-green font-bold pb-1 hover:text-vivarman-gold transition-colors">
                        Request a Catalogue
                    </a>
                </div>
            </div>
        </section>

        {/* Impact / Global Map placeholder or Texture */}
        <section className="py-24 bg-vivarman-green text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1500" 
                    alt="World Map Texture"
                    className="w-full h-full object-cover" 
                />
            </div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="font-serif text-4xl md:text-5xl mb-8">Ready to expand your reach?</h2>
                <p className="text-xl text-stone-300 max-w-2xl mx-auto mb-10">
                    Partner with Vivarman Enterprises for reliable, transparent, and efficient trade solutions.
                </p>
                <button onClick={scrollToSection('contact')} className="px-8 py-4 bg-vivarman-gold text-vivarman-dark font-bold rounded-sm shadow-lg hover:bg-white hover:text-vivarman-green transition-all duration-300">
                    Start a Conversation
                </button>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-[#F5F4F0]">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">GET IN TOUCH</div>
                    <h2 className="font-serif text-4xl text-vivarman-green mb-4">Contact Us</h2>
                    <p className="text-stone-500 max-w-xl mx-auto">Have questions or need a quote? We’d love to hear from you!</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {/* Address Card */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 text-center hover:border-vivarman-gold transition-colors flex flex-col items-center">
                        <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-vivarman-gold">
                            <MapPin size={24} />
                        </div>
                        <h3 className="font-serif text-xl mb-4 text-vivarman-green">Visit Us</h3>
                        <p className="text-xs text-stone-600 leading-relaxed">
                            NO 411, 1ST FLOOR 4TH CROSS,<br/>
                            7TH BLOCK WEST JAYANAGAR,<br/>
                            Thataguni, JAYANAGAR POLICE STATION,<br/>
                            Bangalore South, Bangalore - 560082,<br/>
                            Karnataka, India
                        </p>
                    </div>

                    {/* UAE Liaison Card */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 text-center hover:border-vivarman-gold transition-colors flex flex-col items-center">
                        <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-vivarman-gold">
                            <MapPin size={24} />
                        </div>
                        <h3 className="font-serif text-xl mb-4 text-vivarman-green">UAE Liaison</h3>
                        <p className="text-xs text-stone-600 leading-relaxed">
                            <strong>LA Global Trading Agents FZ-LLC</strong><br/>
                            FDRK5815, Compass Building,<br/>
                            Al Shohada Road, Al Hamra Industrial Zone-FZ<br/>
                            Ras Al Khaimah, United Arab Emirates<br/>
                            <span className="block mt-2 font-semibold text-vivarman-green">
                                Ph: Mr Roopesh - <a href="tel:+971509467406" className="hover:text-vivarman-gold">+97-150-946-7406</a>
                            </span>
                        </p>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 text-center hover:border-vivarman-gold transition-colors flex flex-col items-center">
                        <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-vivarman-gold">
                            <Mail size={24} />
                        </div>
                        <h3 className="font-serif text-xl mb-4 text-vivarman-green">Email Us</h3>
                        <p className="text-xs text-stone-600 mb-4">
                            For trade inquiries and quotes:
                        </p>
                        <a href="mailto:trade@vivarman.com" className="text-vivarman-green font-bold text-base hover:underline">
                            trade@vivarman.com
                        </a>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 text-center hover:border-vivarman-gold transition-colors flex flex-col items-center">
                        <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-vivarman-gold">
                            <Phone size={24} />
                        </div>
                        <h3 className="font-serif text-xl mb-4 text-vivarman-green">Call Us</h3>
                        <div className="flex flex-col gap-2 text-stone-600 font-medium text-sm">
                            <a href="tel:+919845794569" className="hover:text-vivarman-gold transition-colors">+91-9845794569</a>
                            <a href="tel:+919663308569" className="hover:text-vivarman-gold transition-colors">+91-9663308569</a>
                            <a href="tel:+919980206008" className="hover:text-vivarman-gold transition-colors">+91-9980206008</a>
                        </div>
                    </div>
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-vivarman-dark text-stone-400 py-12 border-t border-stone-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                     <div className="w-6 h-6 bg-vivarman-gold rounded-sm flex items-center justify-center text-vivarman-dark">
                        <Leaf size={14} />
                     </div>
                     <span className="text-white font-serif font-bold text-2xl">VIVARMAN</span>
                </div>
                <p className="text-sm opacity-60">Global Reach, Local Expertise, Win-Win deals.</p>
            </div>
            
            <div className="flex gap-6 text-sm">
                <a href="#about" onClick={scrollToSection('about')} className="hover:text-vivarman-gold transition-colors">About</a>
                <a href="#products" onClick={scrollToSection('products')} className="hover:text-vivarman-gold transition-colors">Products</a>
                <a href="#services" onClick={scrollToSection('services')} className="hover:text-vivarman-gold transition-colors">Services</a>
                <a href="#contact" onClick={scrollToSection('contact')} className="hover:text-vivarman-gold transition-colors">Contact</a>
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600 border-t border-stone-800/50 pt-8">
            &copy; 2025 Vivarman Enterprises LLP. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
