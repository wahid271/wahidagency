'use client'

import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone,
  Instagram,
  Youtube,
  Facebook,
  Heart
} from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6281234567890?text=Assalamualaikum%20Wahid%20Agency', '_blank')
  }

  return (
    <footer id="contact" className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Wahid Agency</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Digital agency yang fokus membantu pesantren, sekolah Islam, dan bisnis syariah 
              membangun presence online yang profesional dan modern.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Facebook, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300"
                  >
                    <Icon size={18} className="text-gray-400 hover:text-emerald-400 transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6">Menu Cepat</h4>
            <ul className="space-y-3">
              {['Home', 'Tentang', 'Project', 'Layanan', 'Kontak'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6">Layanan</h4>
            <ul className="space-y-3">
              {[
                'Website Pesantren',
                'Website Sekolah',
                'Landing Page',
                'Dashboard Admin',
                'Company Profile',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-6">Kontak</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center space-x-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm group"
                >
                  <MessageCircle size={18} className="group-hover:text-emerald-400 transition-colors" />
                  <span>+62 812-3456-7890</span>
                </button>
              </li>
              <li>
                <a
                  href="mailto:info@wahidagency.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm group"
                >
                  <Mail size={18} className="group-hover:text-emerald-400 transition-colors" />
                  <span>info@wahidagency.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Jl. Contoh Alamat No. 123, Kota, Indonesia</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} Wahid Agency. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center space-x-1">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 fill-red-500" />
              <span>by Wahid Agency Team</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
