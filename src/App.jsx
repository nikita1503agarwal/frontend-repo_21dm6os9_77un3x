import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-indigo-600 shadow-[0_0_30px_rgba(16,185,129,0.5)]" />
            <div className="leading-tight">
              <div className="text-white font-semibold tracking-tight">ROOAS Media GmbH</div>
              <div className="text-xs text-emerald-300/80">Return on online Ad Spend</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dienstleistungen">Dienstleistungen</NavLink>
            <NavLink to="/case-studies">Case Studies</NavLink>
            <NavLink to="/ueber-uns">Über uns</NavLink>
            <CTA to="/kontakt">Kostenloses Erstgespräch</CTA>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menü">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
            className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl">
            <div className="px-4 py-4 flex flex-col gap-2">
              <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
              <MobileLink to="/dienstleistungen" onClick={() => setOpen(false)}>Dienstleistungen</MobileLink>
              <MobileLink to="/case-studies" onClick={() => setOpen(false)}>Case Studies</MobileLink>
              <MobileLink to="/ueber-uns" onClick={() => setOpen(false)}>Über uns</MobileLink>
              <Link to="/kontakt" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 px-4 py-3 font-medium text-white shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:scale-[1.02] transition">
                Kostenloses Erstgespräch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({to, children}){
  return (
    <Link to={to} className="text-sm text-white/80 hover:text-white transition">
      {children}
    </Link>
  )
}

function CTA({to, children}){
  return (
    <Link to={to} className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:scale-[1.03] transition">
      {children}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}

function MobileLink({to, children, onClick}){
  return (
    <Link to={to} onClick={onClick} className="block rounded-lg px-3 py-3 text-white/90 hover:bg-white/5">
      {children}
    </Link>
  )
}

function Footer(){
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-indigo-600" />
              <div className="text-white font-semibold">ROOAS Media GmbH</div>
            </div>
            <p className="text-white/60 text-sm">Performance-Marketing & Creatives für KMU in Deutschland. Fokus auf messbaren ROI.</p>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Unternehmen</div>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link to="/ueber-uns" className="hover:text-white">Über uns</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/dienstleistungen" className="hover:text-white">Dienstleistungen</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Rechtliches</div>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link to="/impressum" className="hover:text-white">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white">Datenschutz</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Kontakt</div>
            <div className="space-y-2 text-white/70 text-sm">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> hallo@rooas.media</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> +49 30 000 000</div>
              <div className="flex items-center gap-3 pt-2 text-white/70">
                <a href="#" className="hover:text-white"><Instagram className="w-5 h-5"/></a>
                <a href="#" className="hover:text-white"><Linkedin className="w-5 h-5"/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 text-xs text-white/50">© {new Date().getFullYear()} ROOAS Media GmbH – Alle Rechte vorbehalten.</div>
      </div>
    </footer>
  )
}

function AppLayout(){
  const location = useLocation()
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white selection:bg-emerald-500/30">
      <BackgroundGlow />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-8}} transition={{duration:0.25}}>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

function BackgroundGlow(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-emerald-500/10 blur-[140px]"/>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-indigo-600/10 blur-[120px]"/>
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_-100px,rgba(99,102,241,0.15),transparent)]"/>
    </div>
  )
}

export default AppLayout
