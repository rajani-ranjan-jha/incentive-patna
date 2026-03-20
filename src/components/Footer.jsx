import { GraduationCap, Phone, MapPin, Mail, Youtube, Facebook, Instagram, Twitter } from 'lucide-react';
import IncentiveIcon from './IncentiveIcon';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Courses', href: '#courses' },
  { label: 'Success Stories', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Youtube, label: 'YouTube', href: 'http://www.youtube.com/@incentivepatna', colour: 'red-500' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/p/Incentive-100064379634181/', colour: 'blue-500' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/incentive_patna/', colour: 'pink-500' },
  // { icon: Twitter, label: 'Twitter', href: 'https://x.com/' },
];

const contactUs = [
  { icon: Phone, label: '95042 65816', href: 'tel:9504265816' },
  { icon: MapPin, label: 'IOC Main Rd, Sipara, Patna, Bihar 800020', href: 'https://maps.app.goo.gl/mT55aCwF6REbgTWR9' },
  { icon: Mail, label: 'kkincentive@gmail.com', href: 'mailto:kkincentive@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-[#e8792b]" />
              {/* <IncentiveIcon size={24}/>
               */}
              {/* <img src="src\assets\incentiveImage.png" alt="incentive" className="h-8"/> */}
              <span className="text-2xl font-bold uppercase">INCENTIVE</span>
            </div>
            <p className="max-w-md text-white/70 text-sm leading-relaxed">
              Empowering students of Patna with high-quality educational resources, expert mentorship, and a competitive environment to excel in their academic journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl">Social Links</h4>
            <ul className="space-y-4 text-white/70">
              {socialLinks.map(({ icon: Icon, label, href, colour }) => (
                <li key={label}>
                  <a href={href} target='_blank' className="flex items-center gap-3 hover:text-white transition-colors duration-200" >
                    <Icon className={`w-5 h-5 text-${colour}`} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl">Contact Us</h4>
            <div className="space-y-4 text-white/70">
            { contactUs.map(({ icon: Icon, label, href }) => (
              <div className="flex items-start gap-3">
                <a href={href} target='_blank' className="flex items-center gap-3 hover:text-white transition-colors duration-200 line-clamp-2">
                  <Icon className="w-5 h-5 text-[#e8792b] shrink-0 mt-0.5" />
                  {label}
                </a>
              </div>
            ))}
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} INCENTIVE Coaching Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
