import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Construct WhatsApp message
    const text = `Hi Kshitij, I am ${form.name}. 
This is my contact email: ${form.email}. 
I am contacting you regarding: ${form.message}`;

    // Encode message for URL
    const encodedMsg = encodeURIComponent(text);

    // Redirect to WhatsApp with the message
    window.open(`https://wa.me/919922008673?text=${encodedMsg}`, "_blank");

    // Show "sent" feedback
    setSent(true);

    // Reset the form
    setForm({ name: "", email: "", message: "" });

    // Hide the sent message after 3 seconds
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Via WhatsApp</h2>
          <div className="small">Let's build something together</div>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 18 }}
        >
          {/* Contact Form */}
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gap: 8 }}>
                <label className="small">Name</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  style={{
                    padding: 10,
                    borderRadius: 8,
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                />

                <label className="small">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  style={{
                    padding: 10,
                    borderRadius: 8,
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                />

                <label className="small">Message</label>
                <textarea
                  name="message"
                  rows="6"
                  required
                  value={form.message}
                  onChange={handleChange}
                  style={{
                    padding: 10,
                    borderRadius: 8,
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                />

                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn btn-primary" type="submit">
                    Send message
                  </button>
                  {sent && (
                    <div
                      style={{ alignSelf: "center", color: "var(--accent)" }}
                    >
                      Redirecting to WhatsApp...
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <aside className="card">
            <h3>Contact Info</h3>
            <div className="small">Email & Phone</div>
            <div style={{ fontWeight: 700 }}>
              <a href="mailto:kshitijhupare07@gmail.com">
                kshitijhupare07@gmail.com
              </a>
              <br />
              <a href="tel:9922008673">+91 99220 08673</a>
            </div>

            <div style={{ marginTop: 12 }} className="small">
              Social
            </div>
            <div
              style={{
                display: "flex",
                gap: 16,
                marginTop: 8,
                fontSize: 28, // size of icons
                color: "var(--text-light)",
              }}
            >
              <a
                href="https://github.com/Kshitijh"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kshitij-hupare-b11780221/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/kshitijhupare?igsh=Y3dieTl3b2k3Mmd6"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <FaInstagram />
              </a>
            </div>

            <div style={{ marginTop: 18 }}>
              <h4>Download CV</h4>
              <a className="btn btn-ghost" href="/resume.pdf" download>
                Download
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
