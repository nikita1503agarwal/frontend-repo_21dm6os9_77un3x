import React from 'react'

const BUDGETS = ['<2.000 €','2.000–5.000 €','5.000–10.000 €','>10.000 €']

export default function Contact(){
  const [state, setState] = React.useState({
    name: '', company: '', email: '', phone: '', budget: '', message: ''
  })
  const [status, setStatus] = React.useState(null)

  const handleChange = (e) => {
    setState(s => ({...s, [e.target.name]: e.target.value}))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try{
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
      })
      if(!res.ok) throw new Error('Fehler beim Absenden')
      setStatus('success')
      setState({name:'', company:'', email:'', phone:'', budget:'', message:''})
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <h1 className='text-4xl font-extrabold'>Kostenloses Erstgespräch</h1>
      <p className='text-white/70 mt-2'>Wir antworten in der Regel innerhalb von 24 Stunden.</p>

      <div className='mt-8 grid md:grid-cols-3 gap-6'>
        <form onSubmit={submit} className='md:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4'>
          <div className='grid sm:grid-cols-2 gap-4'>
            <Field label='Name' name='name' value={state.name} onChange={handleChange} required />
            <Field label='Firma' name='company' value={state.company} onChange={handleChange} />
          </div>
          <div className='grid sm:grid-cols-2 gap-4'>
            <Field label='E-Mail' name='email' type='email' value={state.email} onChange={handleChange} required />
            <Field label='Telefonnummer' name='phone' value={state.phone} onChange={handleChange} />
          </div>
          <div className='grid sm:grid-cols-2 gap-4'>
            <div>
              <label className='text-sm text-white/70'>Werbebudget (monatlich)</label>
              <select name='budget' value={state.budget} onChange={handleChange} className='mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2'>
                <option value=''>Bitte wählen…</option>
                {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className='text-sm text-white/70'>Nachricht</label>
            <textarea name='message' value={state.message} onChange={handleChange} rows={5} className='mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2' placeholder='Worum geht es?'/>
          </div>
          <button className='rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 px-5 py-3 font-semibold disabled:opacity-60' disabled={status==='loading'}>
            {status==='loading' ? 'Senden…' : 'Absenden'}
          </button>
          {status==='success' && <div className='text-emerald-300 text-sm'>Danke! Wir melden uns zeitnah.</div>}
          {status==='error' && <div className='text-red-300 text-sm'>Etwas ist schiefgelaufen. Bitte später erneut.</div>}
        </form>
        <aside className='rounded-2xl bg-white/5 border border-white/10 p-6'>
          <div className='font-semibold'>Kontakt</div>
          <div className='text-white/70 text-sm mt-2'>ROOAS Media GmbH<br/>Musterstraße 1<br/>10115 Berlin</div>
          <div className='text-white/70 text-sm mt-2'>E-Mail: hallo@rooas.media<br/>Tel.: +49 30 000 000</div>
          <div className='mt-6 rounded-xl bg-white/5 border border-white/10 p-4 text-sm text-white/70'>Hier später Calendly einbinden</div>
        </aside>
      </div>
    </div>
  )
}

function Field({label, ...props}){
  return (
    <div>
      <label className='text-sm text-white/70'>{label}</label>
      <input {...props} className='mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2' />
    </div>
  )
}
