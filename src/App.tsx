/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Waves, 
  Camera, 
  Zap, 
  Shield, 
  ArrowRight, 
  Github, 
  Twitter, 
  Instagram,
  Menu,
  X,
  ChevronRight,
  Droplets,
  Radio,
  Thermometer,
  Activity,
  BarChart3,
  Gauge
} from 'lucide-react';
import { cn } from './lib/utils';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const sensorData = [
  { time: '10:00', ph: 7.2, turbidity: 12, temp: 24.5 },
  { time: '10:05', ph: 7.1, turbidity: 15, temp: 24.6 },
  { time: '10:10', ph: 7.3, turbidity: 11, temp: 24.4 },
  { time: '10:15', ph: 7.0, turbidity: 18, temp: 24.7 },
  { time: '10:20', ph: 6.9, turbidity: 22, temp: 24.8 },
  { time: '10:25', ph: 7.2, turbidity: 14, temp: 24.5 },
  { time: '10:30', ph: 7.4, turbidity: 10, temp: 24.3 },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Technology', href: '#tech' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Waves className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tight text-white">Aqua<span className="text-primary">ESP</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a target="_blank" href="https://fauziproject.myscalev.com/p/drone-underwater-nhwq" className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20">
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-primary text-white px-5 py-3 rounded-xl text-center font-semibold">
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Zap size={14} /> Powered by ESP32 Technology
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Real-Time <span className="text-gradient">Water Quality</span> Monitoring
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            Advanced ESP32-powered underwater drones equipped with industrial-grade 
            pH, Turbidity, and Temperature sensors. Monitor aquatic environments 
            instantly through our integrated real-time dashboard.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all group shadow-xl shadow-primary/20">
              Get Started <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all">
              View Demo
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold text-white">4K</div>
              <div className="text-sm text-slate-500">Video Quality</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">100m</div>
              <div className="text-sm text-slate-500">Max Depth</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">2.4G</div>
              <div className="text-sm text-slate-500">Wireless Control</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/5">
            <img 
              src="src/img/drone.jpg" 
              alt="Underwater Drone" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          </div>
          
          {/* Floating Stats Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl z-20 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <Shield className="text-green-500 w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">System Status</div>
                <div className="text-xs text-green-500 font-medium">All Systems Operational</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: "Precision pH Sensor",
      description: "Laboratory-grade pH monitoring with automatic temperature compensation for accurate acidity readings."
    },
    {
      icon: <Droplets className="w-8 h-8 text-accent" />,
      title: "Turbidity Analysis",
      description: "Optical sensors to measure water clarity and suspended solids in real-time, perfect for pollution tracking."
    },
    {
      icon: <Thermometer className="w-8 h-8 text-secondary" />,
      title: "Thermal Mapping",
      description: "High-accuracy temperature sensors to detect thermal stratification and environmental changes."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Live Dashboard",
      description: "Instant data visualization via WiFi/Bluetooth, allowing you to track trends as the drone explores."
    },
    {
      icon: <Cpu className="w-8 h-8 text-accent" />,
      title: "ESP32 Processing",
      description: "Efficient data collection and transmission using the powerful dual-core ESP32 microcontroller."
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary" />,
      title: "Instant Alerts",
      description: "Configurable threshold alerts that notify you immediately when water parameters go out of range."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Core Capabilities</h2>
          <p className="text-4xl md:text-5xl font-display font-bold text-white">Advanced Underwater Tech</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-all group"
            >
              <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Technology = () => {
  return (
    <section id="tech" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Integrated <span className="text-primary">Real-Time</span> Dashboard
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Our ESP32-based system doesn't just collect data—it visualizes it. 
              The drone transmits sensor readings every 100ms, providing a 
              seamless monitoring experience for environmental research.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 glass rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Activity size={16} className="text-primary" />
                  <span className="text-xs font-bold text-slate-400 uppercase">pH Level</span>
                </div>
                <div className="text-2xl font-bold text-white">7.24</div>
                <div className="text-[10px] text-green-500 font-medium mt-1">Neutral / Stable</div>
              </div>
              <div className="p-4 glass rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets size={16} className="text-accent" />
                  <span className="text-xs font-bold text-slate-400 uppercase">Turbidity</span>
                </div>
                <div className="text-2xl font-bold text-white">14.2 <span className="text-sm font-normal text-slate-500">NTU</span></div>
                <div className="text-[10px] text-yellow-500 font-medium mt-1">Moderate Clarity</div>
              </div>
              <div className="p-4 glass rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer size={16} className="text-secondary" />
                  <span className="text-xs font-bold text-slate-400 uppercase">Temp</span>
                </div>
                <div className="text-2xl font-bold text-white">24.8°C</div>
                <div className="text-[10px] text-blue-500 font-medium mt-1">Optimal Range</div>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                "Real-time sensor fusion via ESP32",
                "WebSocket-based low latency data streaming",
                "Historical data logging and CSV export",
                "Customizable alert thresholds",
                "Multi-device dashboard access"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <ChevronRight className="text-primary w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-6 rounded-[2.5rem] relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Gauge className="text-primary" />
                  <span className="font-bold text-white">Live Telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Recording</span>
                </div>
              </div>
              
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sensorData}>
                    <defs>
                      <linearGradient id="colorPh" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis dataKey="time" stroke="#ffffff40" fontSize={10} />
                    <YAxis stroke="#ffffff40" fontSize={10} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff20', borderRadius: '12px' }}
                      itemStyle={{ fontSize: '12px' }}
                    />
                    <Area type="monotone" dataKey="ph" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorPh)" />
                    <Area type="monotone" dataKey="turbidity" stroke="#22d3ee" fillOpacity={0} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Radio size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold">Connection</div>
                      <div className="text-sm font-bold text-white">ESP32_DRONE_01</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Latency</div>
                    <div className="text-sm font-bold text-green-500">12ms</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Gallery</h2>
          <p className="text-4xl font-display font-bold text-white">Captured by AquaESP</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-3xl overflow-hidden border border-white/10"
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-12 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-6">Ready to Dive In?</h2>
              <p className="text-lg text-slate-400 mb-8">
                Whether you're a researcher, hobbyist, or professional, we have 
                the right underwater drone solution for you. Contact us for 
                custom builds and pricing.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                    <Zap className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email us at</div>
                    <div className="font-bold">habibi.muhammad.fauzi@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                    <Waves className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Call us</div>
                    <div className="font-bold">+62 812 3456 7890</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-primary/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Waves className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold text-white">Aqua<span className="text-primary">ESP</span></span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
          </div>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/fauzihabibi_" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-all">
              <Instagram size={18} className="text-slate-400" />
            </a>
            <a href="https://github.com/muhammadfauzihabibi" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-all">
              <Github size={18} className="text-slate-400" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} AquaESP. All rights reserved. Built with ESP32.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Technology />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
