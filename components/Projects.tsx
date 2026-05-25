'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Website Pesantren',
    description: 'Platform modern untuk manajemen pesantren dengan fitur pendaftaran santri, jadwal pengajian, dan galeri kegiatan.',
    image: 'https://images.unsplash.com/photo-1585036154771-5b6e5e05e1b2?w=600&h=400&fit=crop',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    demoUrl: '#',
    category: 'Pendidikan Islam',
  },
  {
    title: 'PPDB Online',
    description: 'Sistem Penerimaan Peserta Didik Baru online yang memudahkan proses pendaftaran siswa baru secara digital.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'MySQL'],
    demoUrl: '#',
    category: 'Sistem Informasi',
  },
  {
    title: 'Company Profile',
    description: 'Website company profile profesional untuk bisnis Islam dengan desain modern dan responsif.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    tags: ['Next.js', 'Tailwind', 'Prisma'],
    demoUrl: '#',
    category: 'Bisnis Islam',
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
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project <span className="gradient-text">Terbaru</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Beberapa project terbaik yang telah kami kerjakan untuk klien
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500/20 backdrop-blur-xl text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.a
                    href={project.demoUrl}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 hover:from-emerald-500/30 hover:to-blue-500/30 text-white py-3 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <Eye size={18} />
                    <span>Lihat Demo</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
