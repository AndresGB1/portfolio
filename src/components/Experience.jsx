import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin, GraduationCap, Award } from 'lucide-react'

const experiences = [
  {
    title: 'FullStack Engineer',
    company: 'Bioagrícola del Llano',
    location: 'Remoto',
    period: 'Ene 2023 - Presente',
    description: [
      'Desarrollo de interfaces de usuario e implementación de lógica de negocio usando React',
      'Diseño e implementación de microservicios con Java y Spring Boot',
      'Integración con APIs RESTful y GraphQL para consumo de servicios',
      'Trabajo con bases de datos relacionales y consultas SQL complejas',
    ],
    technologies: ['React', 'Java', 'Spring Boot', 'Microservicios', 'SQL', 'GraphQL'],
    current: true,
  },
  {
    title: 'DevOps Engineer',
    company: 'JalaSoft',
    location: 'Remoto',
    period: 'Sep 2022 - Feb 2023',
    description: [
      'Implementación de pipelines CI/CD usando GitHub y Docker para aplicaciones React, Spring Boot y Python',
      'Gestión de infraestructura en AWS: EC2, S3 y Lambda',
      'Despliegue y orquestación de contenedores con Docker y Kubernetes',
      'Desarrollo de scripts Terraform para automatización de infraestructura cloud',
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Python'],
    current: false,
  },
  {
    title: 'Backend Developer',
    company: 'Proyectos de Datos',
    location: 'Remoto',
    period: 'Mar 2022 - Ago 2022',
    description: [
      'Desarrollo de APIs RESTful con Python (Flask/FastAPI)',
      'Procesamiento y transformación de datos con Python y SQL',
      'Integración con servicios cloud de AWS y Azure',
      'Automatización de procesos y scripts para manejo de datos',
    ],
    technologies: ['Python', 'Flask', 'SQL', 'AWS', 'Azure', 'APIs REST'],
    current: false,
  },
  {
    title: 'FullStack Developer',
    company: 'SkillNet IT EXPERTS',
    location: 'Remoto',
    period: 'Ago 2022 - Oct 2022',
    description: [
      'Desarrollo y mantenimiento de soluciones de software con Java y Python',
      'Alineación con las últimas tecnologías y estándares de código',
      'Control de versiones con GitHub y estrategias de branching',
    ],
    technologies: ['Java', 'Python', 'GitHub', 'Agile'],
    current: false,
  },
]

const education = [
  {
    title: 'Ingeniería de Sistemas',
    institution: 'Universidad El Bosque',
    period: '2020 - 2025',
    description: 'Ingeniero de Sistemas graduado',
    type: 'education',
  },
  {
    title: 'Alkemy Acceleration',
    institution: 'Alkemy',
    period: 'Feb 2022 - Sep 2022',
    description: 'Programa de aceleración en desarrollo de software',
    type: 'bootcamp',
  },
]

const certifications = [
  { name: 'Professional Backend Programming', platform: 'Platzi', date: 'Mar 2022' },
  { name: 'EF SET English Certificate 64/100 (C1 Advanced)', platform: 'EF SET', date: 'Mar 2022' },
  { name: 'Setting up Development Environment in Linux', platform: 'Platzi', date: 'Ene 2021' },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experiencia Laboral</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Mi trayectoria profesional en desarrollo de software y DevOps.
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                exp.current ? 'bg-blue-500 animate-pulse' : 'bg-purple-500'
              } border-4 border-slate-900`} />

              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className="card-gradient rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  {/* Header */}
                  <div className={`flex flex-wrap items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={18} className="text-blue-400" />
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      </div>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                        Actual
                      </span>
                    )}
                  </div>

                  {/* Meta info */}
                  <div className={`flex flex-wrap gap-4 text-sm text-slate-400 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="text-blue-400" />
              Educación
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="card-gradient rounded-xl p-5 border border-slate-700/50"
                >
                  <h4 className="text-lg font-semibold text-white">{edu.title}</h4>
                  <p className="text-blue-400 font-medium">{edu.institution}</p>
                  <p className="text-slate-400 text-sm mt-1">{edu.period}</p>
                  <p className="text-slate-300 text-sm mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="text-purple-400" />
              Certificaciones
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="card-gradient rounded-xl p-4 border border-slate-700/50 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Award size={20} className="text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-white">{cert.name}</h4>
                    <p className="text-slate-400 text-xs">{cert.platform} • {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
