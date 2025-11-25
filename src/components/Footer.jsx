import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/AndresGB1', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/andresgalvisbolivar/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:andresfgalvisb@gmail.com', label: 'Email' },
]

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text">
              AG
            </a>
            <p className="text-slate-400 mt-4 text-sm">
              Backend Developer apasionado por crear soluciones 
              escalables y eficientes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Conecta conmigo</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-blue-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Andrés Felipe Galvis Bolívar. Hecho con 
            <Heart size={14} className="text-red-500" fill="currentColor" />
            usando React & Tailwind
          </p>
          <p className="text-slate-500 text-sm">
            Disponible para trabajo remoto 🌍
          </p>
        </div>
      </div>
    </footer>
  )
}
