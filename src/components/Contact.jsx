import { Send, Phone, MapPin, Navigation } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  


  return (
    <section id="contact" className="py-24 bg-surface-alt transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-surface p-10 rounded-3xl shadow-xl space-y-8 border border-border">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-txt">Get in Touch</h2>
              <p className="text-txt-secondary">Fill out the form and our counselor will call you back.</p>
            </div>

            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-txt-secondary">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-surface-alt border border-border rounded-xl p-4 focus:ring-2 focus:ring-primary focus:outline-none text-txt placeholder-txt-secondary/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-txt-secondary">
                  Phone Number
                </label>
                <input
                  type="tel"
                  // onWheel={(e) => e.currentTarget.blur()}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="95042 65816"
                  className="w-full bg-surface-alt border border-border rounded-xl p-4 focus:ring-2 focus:ring-primary focus:outline-none text-txt placeholder-txt-secondary/60 transition-colors overflow-hidden"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-txt-secondary">
                  Message
                </label>
                <textarea
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us which course you're interested in..."
                  className="w-full bg-surface-alt border border-border rounded-xl p-4 focus:ring-2 focus:ring-primary focus:outline-none text-txt placeholder-txt-secondary/60 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                onClick={() => {
                  setName("");
                  setPhone("");
                  setMessage("");
                }}
                className="w-full bg-primary text-txt-inverse font-black py-4 rounded-xl shadow-lg hover:bg-primary-light hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-5 h-5" />
                Submit Application
              </button>
            </form>

            {/* Phone */}
            <div className="pt-6 border-t border-border">
              <a href="tel:09504265816" className="flex items-center gap-4 text-primary font-black text-xl hover:text-primary-light transition-colors">
                <div className="bg-primary/10 p-2.5 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                95042 65816
              </a>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="bg-primary/5 p-8 rounded-3xl space-y-6 border border-primary/10">
              <h3 className="text-2xl font-black text-primary">Visit Our Campus</h3>
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-primary shrink-0 mt-1" />
                <p className="text-lg font-medium leading-relaxed text-txt">
                  Incentive 4th Floor, Apartment of Dr. Sonal, IOC Main Rd, Hind Nagar, Dasratha, Sipara, Patna, Bihar 800020
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/mT55aCwF6REbgTWR9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface text-primary border-2 border-primary font-bold px-8 py-3 rounded-xl hover:bg-primary hover:text-txt-inverse transition-all duration-300"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmWK-lEbcKmDT5NPhjXHdh1aj0eSLiSynHjdtkRvZZ3nMUsSLviAtxqmEaTOopiui2OIcyGSjSIUxjS6PSMhEl27qEt7ISjUufINadhMn6pD27Aa3N_Kk_xNCL5_pzF00fTtGTjkfG_qB39Aw5_XM_pNaE_UnXaLQBJVdN8rPQ4tiWUWboniOcfQ6vN2PRKeAZ96FbLf2qovwDIz-vQ8Iwl1xZjmyIIhakmLi-J_tEBJoL-Kot05kNpsIMh4g6segRo9UXfhzMY9Ur"
                alt="Map of Patna"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-glass backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 border border-glass-border">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-black text-primary">Patna, Bihar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
