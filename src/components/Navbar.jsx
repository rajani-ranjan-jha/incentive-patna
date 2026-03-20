import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { GraduationCap, Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-glass backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="bg-primary p-2 rounded-lg transition-transform duration-300 group-hover:scale-110">
              <GraduationCap className="w-6 h-6 text-txt-inverse" />
              {/* <img src="src\assets\incentiveImage.png" alt="incentive" className="h-6"/> */}
            </div>
            <span className="text-2xl font-black tracking-tighter text-primary uppercase">
              INCENTIVE
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-txt-secondary hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-surface-alt hover:bg-primary hover:text-txt-inverse transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href="#contact"
              className="bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Join Now
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-surface-alt transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pb-6 space-y-1 bg-surface border-t border-border">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 text-sm font-semibold text-txt-secondary hover:text-primary hover:bg-surface-alt rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-primary text-txt-inverse py-3 px-4 rounded-xl font-bold mt-3 hover:bg-primary-light transition-colors"
          >
            Join Now
          </a>
        </nav>
      </div>
    </header>
  );
}
