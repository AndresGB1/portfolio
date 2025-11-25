import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Lenguajes de Programación',
    icon: '💻',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    title: 'Backend & APIs',
    icon: '⚙️',
    skills: ['Spring Boot', 'Flask', 'FastAPI', 'RESTful APIs', 'GraphQL', 'Microservicios']
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS (EC2, S3, Lambda)', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD']
  },
  {
    title: 'Bases de Datos',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server']
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Herramientas & Metodologías',
    icon: '🛠️',
    skills: ['Git/GitHub', 'Linux', 'Scrum/Agile', 'Jira', 'Testing']
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Habilidades Técnicas</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Conjunto de habilidades enfocadas en desarrollo backend, ingeniería de datos 
            y soluciones cloud para proyectos escalables.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-gradient rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className={`skill-badge bg-gradient-to-r ${category.color} bg-opacity-10 hover:bg-opacity-20`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            🎯 Backend Developer
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">4+</div>
              <div className="text-slate-400">Años de experiencia</div>
            </div>  
            <div>
              <div className="text-4xl mb-2">🌍</div>
              <div className="text-slate-400">100% Remoto</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🇬🇧</div>
              <div className="text-slate-400">Inglés B2</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
