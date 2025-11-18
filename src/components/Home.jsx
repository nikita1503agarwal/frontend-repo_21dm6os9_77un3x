import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle, LineChart, PlayCircle, Cpu, MonitorSmartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

function Stat({label, value}){
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-md">
      <div className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">{value}</div>
      <div className="text-white/60 text-sm mt-1">{label}</div>
    </div>
  )
}

export default function Home(){
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-70" >
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400"/> ROOAS = Return on online Ad Spend
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Premium Performance-Marketing & Creatives, die wirklich skalieren
            </h1>
            <p className="mt-5 text-white/70 max-w-2xl">
              Wir helfen KMU in Deutschland mit Meta & Google Ads, performanten Creatives, modernen Landingpages und smarten AI-Automationen zu mehr Umsatz – messbar, transparent und mit Fokus auf ROI.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/kontakt" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-indigo-600 px-6 py-3 font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,0.35)] hover:scale-[1.02] transition">
                Kostenloses Erstgespräch sichern
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5"/>
              </Link>
              <Link to="/dienstleistungen" className="text-white/70 hover:text-white">Mehr erfahren</Link>
            </div>
            <div className="mt-10 grid grid-cols-3 max-w-lg gap-3">
              <Stat label="Ø ROAS" value="5.2x"/>
              <Stat label="Monatliche Leads" value="250+"/>
              <Stat label="Verwaltetes Ad Spend" value="2,5 Mio. €"/>
            </div>
          </div>
        </div>
      </section>

      {/* Was wir machen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold">Was wir machen</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {icon: <LineChart className='w-6 h-6 text-emerald-400'/>, title: 'Performance Ads', desc: 'Meta & Google Ads mit Fokus auf ROI.'},
            {icon: <PlayCircle className='w-6 h-6 text-indigo-400'/>, title: 'Creatives', desc: 'Video, UGC & Content, die konvertieren.'},
            {icon: <MonitorSmartphone className='w-6 h-6 text-emerald-400'/>, title: 'Webdesign & Landingpages', desc: 'Schnell, modern, mobil-optimiert.'},
            {icon: <Cpu className='w-6 h-6 text-indigo-400'/>, title: 'AI & Automatisierung', desc: 'Chatbots, Workflows & Automations.'},
          ].map((c, i) => (
            <motion.div key={i} whileHover={{scale:1.02}} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">{c.icon}</div>
              </div>
              <div className="mt-4 text-lg font-semibold">{c.title}</div>
              <p className="text-white/60 text-sm mt-1">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* So arbeiten wir */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold">So arbeiten wir</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {['Erstgespräch','Analyse','Strategie & Setup','Laufende Optimierung'].map((s, i) => (
            <motion.div key={i} whileHover={{scale:1.02}} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md">
              <div className="text-sm text-white/60">Schritt {i+1}</div>
              <div className="text-lg font-semibold mt-1">{s}</div>
              <ul className="mt-3 space-y-1 text-white/60 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400"/> Transparente Kommunikation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400"/> Datengetriebene Entscheidungen</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400"/> Klarer ROI-Fokus</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold">Case Studies (Auszug)</h2>
          <Link to="/case-studies" className="text-sm text-white/70 hover:text-white">Alle ansehen</Link>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.div key={i} whileHover={{scale:1.02}} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md">
              <div className="text-white/70 text-sm">Branche • E-Commerce</div>
              <div className="mt-2 text-lg font-semibold">Skalierung auf 150k€/Monat</div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                <Stat label="ROAS" value="6.3x"/>
                <Stat label="CTR" value="3.2%"/>
                <Stat label="Leads" value="120"/>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Warum ROOAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold">Warum ROOAS?</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start gap-3"><CheckCircle className="mt-1 w-5 h-5 text-emerald-400"/> Performance-Fokus: Jedes Setup ist auf ROI optimiert.</li>
            <li className="flex items-start gap-3"><CheckCircle className="mt-1 w-5 h-5 text-emerald-400"/> Transparenz: Klare Dashboards & Learnings.</li>
            <li className="flex items-start gap-3"><CheckCircle className="mt-1 w-5 h-5 text-emerald-400"/> Direkte Ansprechpartner: Kein Agentur-Blabla.</li>
            <li className="flex items-start gap-3"><CheckCircle className="mt-1 w-5 h-5 text-emerald-400"/> Datengetrieben: Hypothesen, Tests, Skalierung.</li>
          </ul>
          <div className="rounded-2xl bg-gradient-to-br from-emerald-400/10 to-indigo-500/10 border border-white/10 p-8">
            <div className="text-lg font-semibold">Bereit, die nächsten Wachstumsstufen zu erreichen?</div>
            <p className="text-white/70 mt-1">Lass uns in 15 Minuten herausfinden, ob und wie wir helfen können.</p>
            <Link to="/kontakt" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 text-sm">Kostenloses Erstgespräch</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-gradient-to-r from-emerald-500/20 to-indigo-600/20 border border-white/10 p-10 text-center">
          <div className="text-2xl font-semibold">Lass uns über Performance sprechen.</div>
          <p className="text-white/70 mt-2">Buche dir jetzt ein kostenloses Erstgespräch und erhalte eine klare Strategie-Roadmap.</p>
          <Link to="/kontakt" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-indigo-600 px-6 py-3 font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,0.35)] hover:scale-[1.02] transition">
            Termin sichern
            <ArrowRight className="w-5 h-5"/>
          </Link>
        </div>
      </section>
    </div>
  )
}
