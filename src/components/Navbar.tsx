import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#services' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  const shopCategories = [
    { name: 'Todos los productos', href: '#tienda' },
    { name: 'Cristales y Minerales', href: '#tienda' },
    { name: 'Ropa Vegana', href: '#tienda' },
    { name: 'Péndulos y Herramientas', href: '#tienda' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className={`w-6 h-6 ${scrolled ? 'text-purple-600' : 'text-purple-800'}`} />
            <span className={`font-serif text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${scrolled ? 'from-purple-700 to-pink-600' : 'from-purple-900 to-pink-700'}`}>
              Idatri Aolystic
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`text-sm tracking-wide hover:text-pink-500 transition-colors ${scrolled ? 'text-gray-700' : 'text-gray-900 font-medium'}`}>Inicio</a>
            
            {/* Elegant Dropdown for Shop */}
            <div 
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm tracking-wide hover:text-pink-500 transition-colors py-2 ${scrolled ? 'text-gray-700' : 'text-gray-900 font-medium'}`}
              >
                Tienda Online <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${shopOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {shopOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-0 w-64 bg-white rounded-2xl shadow-xl border border-pink-50 overflow-hidden py-2"
                  >
                    {shopCategories.map((cat, idx) => (
                      <a
                        key={idx}
                        href={cat.href}
                        className="block px-6 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-purple-700 transition-colors"
                      >
                        {cat.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#services" className={`text-sm tracking-wide hover:text-pink-500 transition-colors ${scrolled ? 'text-gray-700' : 'text-gray-900 font-medium'}`}>Servicios</a>
            <a href="#about" className={`text-sm tracking-wide hover:text-pink-500 transition-colors ${scrolled ? 'text-gray-700' : 'text-gray-900 font-medium'}`}>Sobre Mí</a>
            <a href="#contact" className={`text-sm tracking-wide hover:text-pink-500 transition-colors ${scrolled ? 'text-gray-700' : 'text-gray-900 font-medium'}`}>Contacto</a>
            
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              Mi Cuenta
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-900' : 'text-gray-900'} focus:outline-none`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-purple-50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              <a href="#" className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-colors">Inicio</a>
              
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Tienda Online</p>
                <div className="space-y-1 pl-2 border-l-2 border-pink-100">
                  {shopCategories.map((cat, idx) => (
                    <a key={idx} href={cat.href} className="block px-4 py-2 text-sm text-gray-600 hover:text-pink-600 transition-colors">
                      {cat.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <a href="#services" className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-colors">Servicios</a>
              <a href="#about" className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-colors">Sobre Mí</a>
              <a href="#contact" className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-colors">Contacto</a>
              
              <div className="px-4 pt-4 mt-2 border-t border-gray-50">
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3.5 rounded-xl font-medium shadow-md">
                  Mi Cuenta
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
