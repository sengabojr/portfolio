import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PageTransition from './PageTransition';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm('service_4qzhoyq', 'template_6pljpm2', form.current, '61f9Z3M9SLedKZTqx')
      .then(() => {
          setStatus("success");
          form.current.reset();
      }, () => {
          setStatus("error");
      });
  };

  return (
    <PageTransition>
      <section className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">/ Get In Touch</h2>
          <h1 className="text-5xl font-black text-white tracking-tighter">Let's build something <span className="text-slate-500">legendary.</span></h1>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="user_name" placeholder="Name" required 
              className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-white outline-none focus:border-cyan-500/50 transition" />
            <input type="email" name="user_email" placeholder="Email" required 
              className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-white outline-none focus:border-cyan-500/50 transition" />
          </div>
          <textarea name="message" rows="6" placeholder="Your Message" required
            className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-white outline-none focus:border-cyan-500/50 transition"></textarea>
          
          <button type="submit" disabled={status === "sending"}
            className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && <p className="text-green-400 text-center font-mono text-xs uppercase tracking-widest">Message Sent Successfully!</p>}
          {status === "error" && <p className="text-red-400 text-center font-mono text-xs uppercase tracking-widest">Something went wrong. Try again.</p>}
        </form>
      </section>
    </PageTransition>
  );
}