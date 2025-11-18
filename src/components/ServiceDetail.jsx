import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CONFIG = {
  'performance-marketing': {
    title: 'Meta & Google Ads, die skalieren',
    for: 'E-Commerce, Lead-Gen & B2B, die planbar mehr Umsatz wollen.',
    steps: ['Analyse', 'Strategie', 'Umsetzung', 'Testing', 'Skalierung'],
    cases: [
      { problem: 'Hohe CPA, stagnierendes Wachstum', ansatz: 'Account-Struktur vereinfacht, Creatives getestet', ergebnis: 'CPA -35%, ROAS 4.8x' },
      { problem: 'Zu wenig qualifizierte Leads', ansatz: 'Lead-Form Ads + LP-Optimierung', ergebnis: '+120% Leads, -28% CPL' },
    ],
  },
  'creatives': {
    title: 'Performance Creatives, die überzeugen',
    for: 'Brands mit Bedarf an laufend frischen, testbaren Creatives.',
    steps: ['Research', 'Konzept', 'Produktion', 'Iterationen', 'Scale'],
    cases: [
      { problem: 'Ad Fatigue & sinkende CTR', ansatz: 'UGC & Hook-Testing', ergebnis: '+65% CTR, +28% CVR' },
    ],
  },
  'webdesign': {
    title: 'Webdesign & Landingpages, die konvertieren',
    for: 'Unternehmen, die Performance-First-Webseiten brauchen.',
    steps: ['Audit', 'Wireframes', 'Design', 'Build', 'Experiment'],
    cases: [
      { problem: 'Niedrige Conversion-Rate', ansatz: 'Social Proof, Speed, Above-the-fold neu', ergebnis: '+42% CR' },
    ],
  },
  'ai-automation': {
    title: 'AI & Automatisierung für Effizienz',
    for: 'Teams, die wiederkehrende Tasks automatisieren wollen.',
    steps: ['Use-Cases', 'Tools', 'Implementation', 'Training', 'Optimierung'],
    cases: [
      { problem: 'Manuelle Leadqualifizierung', ansatz: 'Chatbot + CRM-Automation', ergebnis: '-60% Zeitaufwand' },
    ],
  },
  'virtual-experiences': {
    title: '3D-/360°-Touren & virtuelle Experiences',
    for: 'Immobilien, Showrooms, Events & Education.',
    steps: ['Scoping', 'Produktion', 'Integration', 'Launch'],
    cases: [
      { problem: 'Geringe Verweildauer', ansatz: 'Interaktive Experience', ergebnis: '+85% Engagement' },
    ],
  },
}

export default function ServiceDetail(){
  const { slug } = useParams()
  const data = CONFIG[slug]
  if(!data){
    return <div className='max-w-5xl mx-auto px-4 py-24'><div className='text-white/70'>Service nicht gefunden.</div></div>
  }
  return (
    <div>
      <section className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10'>
        <h1 className='text-4xl font-extrabold'>{data.title}</h1>
        <p className='text-white/70 mt-2'>{data.for}</p>
      </section>

      <section className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <div className='rounded-2xl bg-white/5 border border-white/10 p-6'>
          <div className='font-semibold'>Unser Vorgehen</div>
          <div className='mt-4 grid sm:grid-cols-2 md:grid-cols-5 gap-3'>
            {data.steps.map((s, i) => (
              <motion.div key={i} whileHover={{scale:1.02}} className='rounded-xl bg-white/5 border border-white/10 p-4 text-sm'>{i+1}. {s}</motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <div className='grid md:grid-cols-2 gap-6'>
          {data.cases.map((c, i) => (
            <div key={i} className='rounded-2xl bg-white/5 border border-white/10 p-6'>
              <div className='text-sm text-white/60'>Beispiel {i+1}</div>
              <div className='mt-2 font-semibold'>Problem</div>
              <p className='text-white/70 text-sm'>{c.problem}</p>
              <div className='mt-3 font-semibold'>Ansatz</div>
              <p className='text-white/70 text-sm'>{c.ansatz}</p>
              <div className='mt-3 font-semibold'>Ergebnis</div>
              <p className='text-white/70 text-sm'>{c.ergebnis}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='rounded-2xl bg-gradient-to-r from-emerald-500/20 to-indigo-600/20 border border-white/10 p-8 text-center'>
          <div className='text-xl font-semibold'>Lass uns über deinen Case sprechen</div>
          <p className='text-white/70 mt-1'>Kostenloses Erstgespräch: Wir prüfen Potenziale und geben klare Empfehlungen.</p>
          <Link to='/kontakt' className='mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 px-5 py-3 font-semibold'>Jetzt Termin sichern</Link>
        </div>
      </section>
    </div>
  )
}
