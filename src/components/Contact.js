import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({name:"", email:"", message:""});
  const [sent, setSent] = useState(false);

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    // Placeholder: integrate email service or backend endpoint here.
    console.log("Contact form:", form);
    setSent(true);
    setTimeout(()=> setSent(false), 3000);
    setForm({name:"", email:"", message:""});
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact</h2>
          <div className="small">Let's build something together</div>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"1fr 360px", gap:18}}>
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div style={{display:"grid", gap:8}}>
                <label className="small">Name</label>
                <input name="name" required value={form.name} onChange={handleChange} style={{padding:10, borderRadius:8, border:"1px solid rgba(0,0,0,0.06)"}} />

                <label className="small">Email</label>
                <input name="email" required value={form.email} onChange={handleChange} type="email" style={{padding:10, borderRadius:8, border:"1px solid rgba(0,0,0,0.06)"}} />

                <label className="small">Message</label>
                <textarea name="message" required value={form.message} onChange={handleChange} rows="6" style={{padding:10, borderRadius:8, border:"1px solid rgba(0,0,0,0.06)"}} />

                <div style={{display:"flex", gap:8}}>
                  <button className="btn btn-primary" type="submit">Send message</button>
                  {sent && <div style={{alignSelf:"center", color:"var(--accent)"}}>Message sent (demo)</div>}
                </div>
              </div>
            </form>
          </div>

          <aside className="card">
            <h3>Contact Info</h3>
            <div className="small">Email</div>
            <div style={{fontWeight:700}}><a href="mailto:kshitijhupare07@gmail.com">kshitijhupare07@gmail.com</a></div>

            <div style={{marginTop:12}} className="small">Social</div>
            <div style={{display:"flex", gap:8, marginTop:8}}>
              <a href="#" aria-label="GitHub">GitHub</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>

            <div style={{marginTop:18}}>
              <h4>Download CV</h4>
              <a className="btn btn-ghost" href="/resume.pdf" download>Download</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
