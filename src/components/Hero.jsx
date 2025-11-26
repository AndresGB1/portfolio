import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, Server, Cloud, Code2 } from 'lucide-react'

const highlights = [
  { icon: Code2, text: 'Backend Developer' },
  { icon: Cloud, text: 'Cloud (AWS/Azure)' },
  { icon: Server, text: 'Microservicios' },
]

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 font-medium mb-4"
            >
              ¡Hola! 👋 Soy
            </motion.p>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Andrés Felipe</span>
              <br />
              <span className="gradient-text">Galvis Bolívar</span>
            </h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-slate-300 mb-6"
            >
              Backend Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-slate-400 text-lg mb-8 max-w-lg"
            >
              Ingeniero de Sistemas con experiencia en Python, Java, microservicios y cloud (AWS/Azure).
              Apasionado por el desarrollo backend y la arquitectura de software.
              Disponible para trabajo 100% remoto.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700"
                >
                  <item.icon size={18} className="text-blue-400" />
                  <span className="text-slate-300 text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary">
                Contáctame
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg border border-slate-600 text-slate-300 hover:border-blue-400 hover:text-white transition-all duration-300"
              >
                Ver Proyectos
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4 mt-8"
            >
              {[
                { icon: Github, href: 'https://github.com/AndresGB1' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/andres-galvis-bolivar/' },
                { icon: Mail, href: 'mailto:afgalvisb@gmail.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-blue-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border-2 border-purple-500/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-8 rounded-full border-2 border-blue-500/20 animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Profile image */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                <img 
                  src="/portfolio/assets/profile/andres.png" 
                  alt="Andrés Felipe Galvis Bolívar"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <div className="text-6xl hidden items-center justify-center w-full h-full">👨‍💻</div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 right-8 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🐍 Python
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                ☁️ AWS
              </motion.div>
              <motion.div
                className="absolute -bottom-4 left-8 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                ⚙️ Microservicios
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#skills"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
