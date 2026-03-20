import { UserCheck, Users, TrendingUp, Lightbulb, Award } from 'lucide-react';

const features = [
  { icon: UserCheck, title: 'Experienced Teachers', desc: 'Mentorship from industry veterans.' },
  { icon: Users, title: 'Personalized Attention', desc: 'Small batch sizes for better focus.' },
  { icon: TrendingUp, title: 'High Success Rate', desc: 'Proven track record of excellence.' },
  { icon: Lightbulb, title: 'Modern Methods', desc: 'Interactive and digital learning.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 pb-32 bg-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative group mb-10">
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCThYm4BUATGZ6npFMXo7OO0rD0JIrK6HABKn0UvvB0kdzM-pwryMEoWEHF6fzChQLfnUEVB9d2BquUVkuJHxxj1t1J2DMVrs4I_Dq1UqoBq7fms8DtFAny4yi-_wLeefBgPSxxPYexRFePapuHzUhXm1aERS2f2lSEjAmizaV94PxL_4k7LO71N4SpT6ziu6UTPDjKEt19eOMBLvg1WddYjyq3Zv2stBug9mRWsAVE_h0WmLqBvK0aYgt6LlUFrO5ianrpaIoY8Ons"
              alt="Teacher in classroom"
              className="relative rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
            />
            {/* Floating badge — contained within the image area */}
            <div className="hidden absolute bottom-4 right-4 bg-surface p-5 rounded-2xl shadow-xl md:flex items-center gap-3 border border-border transition-colors duration-300">
              <div className="bg-primary/10 p-2.5 rounded-xl">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-black text-primary leading-tight">15+ Years</p>
                <p className="text-txt-secondary">Excellence in Education</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-txt leading-tight">
              For quality and quantity based education in <span className="text-primary">Patna</span>
            </h2>
            <p className="text-base sm:text-lg text-txt-secondary leading-relaxed">
              We provide a professional learning environment dedicated to student success. Our approach combines traditional values with modern educational technology to ensure every student reaches their full potential.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-4 rounded-xl hover:bg-surface-alt transition-colors duration-200 cursor-default"
                >
                  <div className="bg-accent-light p-2 rounded-lg flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-txt text-sm">{title}</h4>
                    <p className="text-xs text-txt-secondary mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
