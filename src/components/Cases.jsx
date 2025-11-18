import React from 'react'
import { motion } from 'framer-motion'

const mockCases = [
  { id: 'case-1', title: 'Skalierung DTC-Brand', branch: 'E-Commerce', roas: '6.1x', leads: 320, cpa: '18,40 €' },
  { id: 'case-2', title: 'B2B Leadmaschine', branch: 'B2B', roas: '—', leads: 210, cpa: '23,10 €' },
  { id: 'case-3', title: 'Lokales Dienstleistungsskalieren', branch: 'Local', roas: '4.2x', leads: 140, cpa: '12,80 €' },
]

export function CasesIndex(){
  const [filter, setFilter] = React.useState('Alle')
  const filtered = mockCases.filter(c => filter === 'Alle' || c.branch === filter)
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <h1 className='text-4xl font-extrabold'>Case Studies</h1>
      <div className='mt-6 flex gap-2'>
        {['Alle','E-Commerce','B2B','Local'].map(f => (
          <button key={f} onClick={()=>setFilter(f)} className={`px-3 py-1 rounded-full text-sm border ${filter===f?'bg-white/10 border-white/30':'border-white/10 hover:bg-white/5'}`}>{f}</button>
        ))}
      </div>
      <div className='mt-8 grid md:grid-cols-3 gap-6'>
        {filtered.map(c => (
          <motion.a key={c.id} href={`/case-studies/${c.id}`} whileHover={{scale:1.02}} className='rounded-2xl bg-white/5 border border-white/10 p-6 block'>
            <div className='text-sm text-white/60'>{c.branch}</div>
            <div className='mt-2 font-semibold'>{c.title}</div>
            <div className='mt-4 grid grid-cols-3 gap-2 text-sm'>
              <div className='rounded-xl bg-white/5 p-3'>ROAS <div className='font-semibold'>{c.roas}</div></div>
              <div className='rounded-xl bg-white/5 p-3'>Leads <div className='font-semibold'>{c.leads}</div></div>
              <div className='rounded-xl bg-white/5 p-3'>CPA <div className='font-semibold'>{c.cpa}</div></div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export function CaseDetail(){
  // In real app, fetch by id; here we reuse first
  const c = mockCases[0]
  return (
    <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='text-sm text-white/60'>Ausgangssituation</div>
      <h1 className='text-4xl font-extrabold mt-1'>{c.title}</h1>
      <p className='text-white/70 mt-2'>Umsatz stagnierte, CPA zu hoch. Ziel: Profitabel skalieren.</p>

      <section className='mt-8 grid md:grid-cols-2 gap-6'>
        <div className='rounded-2xl bg-white/5 border border-white/10 p-6'>
          <div className='font-semibold'>Strategie</div>
          <p className='text-white/70 text-sm mt-1'>Klarer Kampagnenaufbau, Creative-Testing, Landingpage-A/B-Tests.</p>
        </div>
        <div className='rounded-2xl bg-white/5 border border-white/10 p-6'>
          <div className='font-semibold'>Umsetzung</div>
          <p className='text-white/70 text-sm mt-1'>Simplified Structure, Broad + Advantage, Server-Side-Tracking.</p>
        </div>
      </section>

      <section className='mt-8 rounded-2xl bg-white/5 border border-white/10 p-6'>
        <div className='font-semibold'>Ergebnisse</div>
        <div className='mt-4 grid grid-cols-3 gap-3 text-sm'>
          <div className='rounded-xl bg-white/5 p-3'>ROAS <div className='font-semibold'>{c.roas}</div></div>
          <div className='rounded-xl bg-white/5 p-3'>Leads <div className='font-semibold'>{c.leads}</div></div>
          <div className='rounded-xl bg-white/5 p-3'>CPA <div className='font-semibold'>{c.cpa}</div></div>
        </div>
      </section>

      <section className='mt-8 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-indigo-600/20 border border-white/10 p-8'>
        <div className='text-lg font-semibold'>Zitat (Platzhalter)</div>
        <p className='text-white/80 mt-2'>„Das Team von ROOAS hat unsere Ads auf ein neues Level gehoben.“</p>
      </section>
    </div>
  )
}
