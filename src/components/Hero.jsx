import { ChevronRight, Star, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-hero-overlay-from)] to-[var(--color-hero-overlay-to)] z-10" />
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuARDLUcksTjt1il3_hK_WBdVYD57Ef2bn9vqNVoxLEb94Quol_XU9_Hpqt7KUj_4MvubfF-edilDjjSBojZjypINV56hGfOiCTysi1o8nro3Nrc6OnqjoZupJP4JXPJ6ucMeMd0IGwbCU0A3FbfjOHTy6AnlQC189atKrFEh5jGW3ZUpWjCJhtvetP_8b5DmaFdzcUjIWO93Riuu0kltluOLXDGqPgi7L07JhRdzRSD5EJEd3C-FYkXImA9fTMGx0dThEIwQN1tj9uq"
          alt="Modern Classroom"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 text-center sm:text-left w-full">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-5 py-2 rounded-full text-sm font-bold">
            <Star className="w-4 h-4 fill-current" />
            Top Rated Institute in Patna
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight">
            INCENTIVE <br />
            <span className="text-accent">Coaching</span> Institute
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-slate-200 max-w-xl leading-relaxed">
            Helping students achieve academic excellence through personalized mentorship and modern teaching methodologies.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start pt-2">
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 flex items-center gap-2"
            >
              Join Now
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#courses"
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[var(--color-primary-dark)] transition-all duration-300"
            >
              View Courses
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-5 pt-6">
            <div className="flex -space-x-3">
              {[
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDGpJHN5RubWhN4MyDvKm22895g9m2Fzh3m0i-xpWXIKTQ7fT7_5iwI7fxHgrSB0oJcXUROgzLqCdMQfUQ4R54LB_a8hn7gWjlc3LwiLcEoETV-ispzX8BlAgQha8DWlu72hU8ws8W-XNIaFwfd8h9FEkhIqgTVDh2ko9UOUE66-CC5F0v2mXfnPVgnXAEGAn0JfbQPex1sf16SXS0LoUhFdklZfYd7JSbsroEXDQ8ijUw1tJ76oPNxFiaSJsC99QYo7nFVStamfOkz',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCnn62hB5Mq31-CGh3JzmVjnMlCLko2c9bCnjHy5iOJtS36cbFRMTSUoKAAew9eGabmiucuH6PrNTJLbjCkpM-dova-DbtbwxPgUXRLYQHvWb_O9scCsUk4CL3jAEFgTTb5PwD8QUMoKLmEIqiF3Cf3I8mhZH_3Ewa27FRkkOuqsZTPeLcR5P4yRDFRHXpxJc1vv4HuXihQdXk0uWfrOJUF3ld1L6iae5A8j0kuZVSytbONUvuLtzX0kvdRth_9lguMkzEJsIBMRkqq',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCsXy0uyKbHJH0xa9nWyVC_qQsO0Anr2Y77SLL45VNZ3FLKelErHs3er9pv7l3Ffdnc33WsaQ5V8_zFgiE1WFrrZKZ4WU3TeZjKMxfSltlg0V3EaSCb6B5k5wCqNh0Fcu53qlzp4xdAE1qyI5llncOkPWrugFJCr9ImM8RAO87iab46e8e9MzDGyPdHa0iixNY4KgCanBi6iUZ8-JsJwqq0JYjqJWMFoLLeA-XGFsMY02qUUnmVcI6VXBAUFCFcvsUk7uqIxGNNjAUe',
              ].map((src, i) => (
                <img
                  key={i}
                  className="w-11 h-11 rounded-full border-2 border-white object-cover"
                  src={src}
                  alt="Student"
                />
              ))}
            </div>
            <div className="text-white">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-star fill-current" />
                <span className="font-bold text-base">4.9/5</span>
              </div>
              <p className="text-sm opacity-80 flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                Join 500+ successful students
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
