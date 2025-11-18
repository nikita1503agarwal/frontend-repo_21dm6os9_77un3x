import React from 'react'
import { motion } from 'framer-motion'

const team = [
  { name: 'Alex', role: 'Performance Lead', desc: 'Meta & Google Ads, Tracking, Skalierung' },
  { name: 'Maja', role: 'Creative Director', desc: 'Konzept, Produktion, UGC' },
  { name: 'Jonas', role: 'Web & Tech', desc: 'Landingpages, Automations, AI' },
]

export default function About(){
  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <h1 className='text-4xl font-extrabold'>Unsere Story</h1>
      <p className='text-white/70 mt-2 max-w-3xl'>ROOAS Media GmbH ist aus der Begeisterung für messbares Wachstum entstanden. Wir kombinieren Performance-Marketing, starke Creatives und Technik zu klaren, skalierbaren Systemen.</p>

      <section className='mt-12'>
        <h2 className='text-2xl font-semibold'>Team</h2>
        <div className='mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {team.map((m, i) => (
            <motion.div key={i} whileHover={{y:-4, scale:1.01}} className='rounded-2xl bg-white/5 border border-white/10 p-6 text-center'>
              <div className='w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-500/30 to-indigo-600/30 border border-white/10'/>
              <div className='mt-4 font-semibold'>{m.name}</div>
              <div className='text-sm text-emerald-300'>{m.role}</div>
              <p className='text-white/70 text-sm mt-2'>{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className='mt-12'>
        <h2 className='text-2xl font-semibold'>Werte</h2>
        <ul className='mt-4 grid md:grid-cols-2 gap-3 text-white/70'>
          <li className='rounded-xl bg-white/5 border border-white/10 p-4'>Performance – Ergebnisse > Worte</li>
          <li className='rounded-xl bg-white/5 border border-white/10 p-4'>Transparenz – Ehrliche Kommunikation</li>
          <li className='rounded-xl bg-white/5 border border-white/10 p-4'>Partnerschaft – Gemeinsame Ziele</li>
          <li className='rounded-xl bg-white/5 border border-white/10 p-4'>Langfristigkeit – Nachhaltiges Wachstum</li>
        </ul>
      </section>
    </div>
  )
}
