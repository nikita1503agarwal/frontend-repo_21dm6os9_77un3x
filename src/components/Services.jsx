import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { LineChart, PlaySquare, MonitorSmartphone, Cpu, Cuboid } from 'lucide-react'

const services = [
  { slug: 'performance-marketing', title: 'Meta & Google Ads', icon: <LineChart className='w-6 h-6 text-emerald-400'/>, desc: 'Skalierbares Performance Marketing mit Fokus auf ROAS.' },
  { slug: 'creatives', title: 'Creative / Video & Content', icon: <PlaySquare className='w-6 h-6 text-indigo-400'/>, desc: 'UGC, Ads, Motion – Content, der verkauft.' },
  { slug: 'webdesign', title: 'Webdesign & Landingpages', icon: <MonitorSmartphone className='w-6 h-6 text-emerald-400'/>, desc: 'Schnelle, konvertierende Seiten & Funnels.' },
  { slug: 'ai-automation', title: 'AI & Automatisierung', icon: <Cpu className='w-6 h-6 text-indigo-400'/>, desc: 'Chatbots, Workflows, Automations für Effizienz.' },
  { slug: 'virtual-experiences', title: '3D-/360°-Touren & Experiences', icon: <Cuboid className='w-6 h-6 text-emerald-400'/>, desc: 'Interaktive Marken-Erlebnisse.' },
]

export default function Services(){
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <h1 className='text-4xl font-extrabold'>Dienstleistungen</h1>
      <p className='text-white/70 mt-2 max-w-2xl'>Ein klarer Fokus: Mehr Umsatz, weniger Streuverluste. Wähle eine Leistung und erfahre, wie wir vorgehen.</p>

      <div className='mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((s) => (
          <motion.div key={s.slug} whileHover={{scale:1.02}} className='rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md'>
            <div className='w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center'>{s.icon}</div>
            <div className='mt-4 text-lg font-semibold'>{s.title}</div>
            <p className='text-white/60 text-sm mt-1 h-10'>{s.desc}</p>
            <Link to={`/dienstleistungen/${s.slug}`} className='mt-4 inline-flex items-center text-sm text-emerald-300 hover:text-emerald-200'>Mehr erfahren →</Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
