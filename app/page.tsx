// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Star,
  Zap,
  Smartphone,
  Search,
  Users,
  Briefcase,
  Monitor,
  Settings,
  Wrench,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Custom Cursor Effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent"
            >
              Wahid Web
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: "Home", id: "home" },
                { name: "Tentang", id: "tentang" },
                { name: "Project", id: "project" },
                { name: "Layanan", id: "layanan" },
                { name: "Kontak", id: "kontak" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <motion.a
                href="https://wa.me/6281234567890"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {[
                  { name: "Home", id: "home" },
                  { name: "Tentang", id: "tentang" },
                  { name: "Project", id: "project" },
                  { name: "Layanan", id: "layanan" },
                  { name: "Kontak", id: "kontak" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-300 hover:text-white py-2 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <motion.a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full text-white font-medium"
                >
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-gray-300">
                Web Developer Spesialis Pesantren & Sekolah
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Website Modern untuk{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Pesantren & Sekolah Islam
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Membantu pesantren, sekolah, dan bisnis tampil lebih profesional
              di era digital dengan website modern yang elegan dan fungsional.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("project")}
                className="group px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
              >
                Lihat Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("kontak")}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Hubungi Saya
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Tentang Section */}
      <section id="tentang" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Tentang <span className="text-emerald-400">Saya</span>
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                Saya adalah web developer yang fokus membantu pesantren, sekolah
                Islam, dan UMKM untuk memiliki website profesional dengan desain
                modern dan performa optimal.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Smartphone,
                  title: "Responsive Design",
                  desc: "Tampilan sempurna di semua perangkat",
                },
                {
                  icon: Zap,
                  title: "Fast Performance",
                  desc: "Loading cepat dengan optimasi maksimal",
                },
                {
                  icon: Monitor,
                  title: "Modern UI",
                  desc: "Desain premium dan elegan",
                },
                {
                  icon: Search,
                  title: "SEO Friendly",
                  desc: "Optimasi search engine terbaik",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Project <span className="text-emerald-400">Terbaru</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Hasil karya terbaik untuk klien
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image:
                    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
                  title: "Website Pondok Pesantren",
                  desc: "Website modern dengan sistem informasi santri dan kegiatan pesantren",
                  tag: "Pesantren",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
                  title: "Website PPDB Online",
                  desc: "Sistem pendaftaran online lengkap dengan dashboard admin",
                  tag: "Sekolah",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
                  title: "Website Company Profile",
                  desc: "Profil perusahaan profesional dengan desain premium",
                  tag: "Bisnis",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-emerald-500/20 backdrop-blur-sm rounded-full text-sm text-emerald-400 border border-emerald-500/30">
                      {project.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{project.desc}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Lihat Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Layanan <span className="text-emerald-400">Kami</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Solusi digital lengkap untuk kebutuhan Anda
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Briefcase,
                  title: "Website Pesantren",
                  desc: "Website lengkap dengan profil, kegiatan, dan informasi santri",
                },
                {
                  icon: Users,
                  title: "Website Sekolah",
                  desc: "Platform sekolah modern dengan sistem akademik",
                },
                {
                  icon: Monitor,
                  title: "Landing Page",
                  desc: "Halaman landing yang konversi tinggi untuk promosi",
                },
                {
                  icon: Briefcase,
                  title: "Company Profile",
                  desc: "Profil perusahaan profesional dan elegan",
                },
                {
                  icon: Settings,
                  title: "Admin Dashboard",
                  desc: "Dashboard administrasi yang powerful dan mudah digunakan",
                },
                {
                  icon: Wrench,
                  title: "Maintenance Website",
                  desc: "Perawatan dan update berkala untuk performa optimal",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.desc}</p>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Apa Kata <span className="text-emerald-400">Mereka</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Testimoni dari klien yang puas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "KH. Ahmad Fauzi",
                  role: "Pimpinan Pondok Pesantren",
                  text: "Website pondok kami sekarang terlihat sangat profesional. Alhamdulillah, banyak wali santri yang tertarik mendaftarkan putra-putrinya.",
                  rating: 5,
                },
                {
                  name: "Hj. Siti Maryam",
                  role: "Kepala Sekolah Islam",
                  text: "Sistem PPDB online sangat membantu proses pendaftaran. Tim support juga sangat responsif dan membantu.",
                  rating: 5,
                },
                {
                  name: "Bpk. Rahman",
                  role: "Pemilik UMKM",
                  text: "Website company profile bisnis saya sekarang terlihat sangat elegan. Banyak client baru yang datang melalui website.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-emerald-400 text-emerald-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontak" className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Siap Membuat Website{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Profesional?
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-400 mb-10"
            >
              Mari diskusikan project Anda dan wujudkan website impian bersama
              kami.
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href="https://wa.me/6281234567890"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              Hubungi via WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-4">
                Wahid Web
              </h3>
              <p className="text-gray-400">
                Spesialis pembuatan website modern untuk pesantren, sekolah
                Islam, dan UMKM.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-3">
                <a
                  href="mailto:info@wahidweb.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@wahidweb.com
                </a>
                <a
                  href="tel:+6281234567890"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +62 812-3456-7890
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  Jakarta, Indonesia
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Sosial Media</h4>
              <div className="flex gap-4">
                {["Instagram", "LinkedIn", "GitHub"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Wahid Web. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
