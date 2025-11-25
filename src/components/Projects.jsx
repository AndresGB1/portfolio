import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Cloud, Server, Globe } from 'lucide-react'

const projects = [
  {
    title: 'Infraestructura AWS con Terraform',
    description: 'Gestión de infraestructura cloud en AWS utilizando Terraform. Automatización de despliegue de EC2, S3, Lambda y configuración de políticas IAM.',
    image: '☁️',
    technologies: ['AWS', 'Terraform', 'EC2', 'S3', 'Lambda', 'IAM'],
    category: 'DevOps & Cloud',
    icon: Cloud,
    highlights: [
      'Infrastructure as Code',
      'Funciones serverless con Lambda',
      'Scripts automatizados para gestión de recursos',
    ],
  },
  {
    title: 'Sistema Microservicios Spring Boot',
    description: 'Arquitectura de microservicios desarrollada con Java y Spring Boot. Implementación de APIs RESTful con documentación y pruebas automatizadas.',
    image: '⚙️',
    technologies: ['Java', 'Spring Boot', 'Docker', 'REST API', 'MySQL'],
    category: 'Backend',
    icon: Server,
    highlights: [
      'Diseño de microservicios',
      'Containerización con Docker',
      'CI/CD con GitHub Actions',
    ],
  },
  {
    title: 'IEEE Web Branch',
    description: 'Aplicación web completa para la rama IEEE de la universidad. Los miembros pueden gestionar eventos y contenido de su capítulo.',
    image: '🌐',
    technologies: ['React', 'Node.js', 'MySQL', 'Heroku', 'Swagger'],
    category: 'Full Stack',
    icon: Globe,
    links: {
      demo: 'https://branch-ieee-ueb.netlify.app/',
      github: 'https://github.com/falfonsoPrg/FrontEndIEEE',
    },
    highlights: [
      'API RESTful documentada con Swagger',
      'Sistema de autenticación',
      'Panel de administración',
    ],
  },
  {
    title: 'Veterinary Web App',
    description: 'Sistema web para gestión de veterinarias y clientes. Permite crear facturas y ofrecer diferentes servicios para mascotas.',
    image: '🐾',
    technologies: ['Python', 'Flask', 'MySQL', 'HTML/CSS', 'Heroku'],
    category: 'Full Stack',
    icon: Globe,
    links: {
      github: 'https://github.com/AndresGB1/vetmysql',
    },
    highlights: [
      'Backend con Flask',
      'Base de datos relacional',
      'Despliegue en Heroku',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Proyectos Destacados</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en desarrollo backend, 
            ingeniería de datos y soluciones cloud.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="card-gradient rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full flex flex-col">
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{project.image}</span>
                      <div>
                        <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                    <project.icon className="text-slate-600 group-hover:text-blue-400 transition-colors" size={24} />
                  </div>
                  
                  <p className="text-slate-400 mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="mt-auto p-6 pt-4 border-t border-slate-700/50">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {project.links && (
                    <div className="flex gap-4">
                      {project.links.demo && (
                        <motion.a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <ExternalLink size={16} />
                          Demo
                        </motion.a>
                      )}
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <Github size={16} />
                          Código
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/AndresGB1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 text-slate-300 hover:border-blue-400 hover:text-white transition-all duration-300"
          >
            <Github size={20} />
            Ver más proyectos en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
