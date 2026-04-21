import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-pink-200 blur-3xl opacity-40 mix-blend-multiply"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-purple-200 blur-3xl opacity-40 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left pt-10 md:pt-0"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-pink-600 font-medium tracking-wider uppercase text-sm mb-4"
          >
            Bienestar & Equilibrio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-6"
          >
            Armoniza tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Mente y Espíritu</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0"
          >
            Descubre un espacio holístico dedicado a tu crecimiento personal, sanación energética y bienestar integral.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Comienza tu viaje <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-purple-200 text-purple-800 px-8 py-4 rounded-full font-medium hover:bg-purple-50 transition-all duration-300">
              Saber más
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 relative w-full max-w-md mx-auto"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop" 
              alt="Meditación holística" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
          </div>
          
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-pink-100 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xl">
              ✦
            </div>
            <div>
              <p className="text-sm text-gray-500">Transformación</p>
              <p className="font-bold text-gray-900">Personal</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
