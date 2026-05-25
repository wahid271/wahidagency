'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  School, 
  Rocket, 
  LayoutDashboard, 
  Building2, 
  Wrench,
  CheckCircle
} from 'lucide-react'

const services = [
  {
    icon: GraduationCap,
    title: 'Website Pesantren',
    description: 'Platform digital lengkap untuk manajemen pesantren modern dengan fitur Islamic.',
    features: ['Profil Pesantren', 'Pendaftaran Santri', 'Jadwal Pengajian', 'Galeri Kegiatan'],
  },
  {
    icon: School,
    title: 'Website Sekolah',
    description: 'Website sekolah Islam profesional dengan sistem informasi terintegrasi.',
    features: ['Sistem Akademik', 'PPDB Online', 'E-Learning', 'Info Sekolah'],
  },
  {
    icon: Rocket,
    title: 'Landing Page',
    description: 'Landing page konversi tinggi untuk produk atau layanan bisnis Islam Anda.',
    features: ['Desain Premium', 'SEO Optimized', 'Fast Loading', 'Mobile Friendly'],
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Admin',
    description: 'Dashboard admin modern untuk mengelola konten website dengan mudah.',
    features: ['User Management', 'Analytics', 'Content CMS', 'Role Based Access'],
  },
  {
    icon: Building2,
    title: 'Company Profile',
    description: 'Website profil perusahaan profesional untuk branding bisnis Islam.',
    features: ['About Company', 'Portfolio', 'Team Section', 'Contact Form'],
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Layanan maintenance dan update website agar selalu optimal dan aman.',
    features: ['Security Update', 'Backup Data', 'Bug Fixing', '24/7 Support'],
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const Services = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

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
            Layanan <span className="gradient-text">Kami</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Solusi digital lengkap untuk kebutuhan website pesantren, sekolah, dan bisnis Islam
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-500 hover:bg-white/[0.07]">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-emerald-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-3xl p-12 backdrop-blur-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Butuh Layanan Kustom?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Kami juga menyediakan layanan pengembangan website sesuai kebutuhan spesifik Anda
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
            >
              <span>Diskusikan Kebutuhan Anda</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
