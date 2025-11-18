import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './App'
import Home from './components/Home'
import Services from './components/Services'
import ServiceDetail from './components/ServiceDetail'
import { CasesIndex, CaseDetail } from './components/Cases'
import About from './components/About'
import Contact from './components/Contact'
import { Impressum, Datenschutz } from './components/Legal'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="dienstleistungen" element={<Services />} />
          <Route path="dienstleistungen/:slug" element={<ServiceDetail />} />
          <Route path="case-studies" element={<CasesIndex />} />
          <Route path="case-studies/:id" element={<CaseDetail />} />
          <Route path="ueber-uns" element={<About />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutz" element={<Datenschutz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
