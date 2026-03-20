import {
  Calculator,
  FlaskConical,
  Atom,
  Dna,
  ChevronRight,
} from "lucide-react";

const courses = [
  {
    icon: Atom,
    title: "Physics",
    desc: "Explore the laws of nature, from classical mechanics to modern quantum physics.",
    img: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1000&auto=format&fit=crop",
  },
  {
    icon: FlaskConical,
    title: "Chemistry",
    desc: "Master the science of matter, chemical reactions, and molecular structures.",
    // img: 'https://images.unsplash.com/photo-1532187863486-abf9d3a446ec?q=80&w=1000&auto=format&fit=crop',
    img: "https://plus.unsplash.com/premium_photo-1681426678542-613c306013e1?w=500&auto=format&fit=crop",
  },
  {
    icon: Calculator,
    title: "Mathematics",
    desc: "Build strong analytical skills with advanced calculus, algebra, and geometry.",
    img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000&auto=format&fit=crop",
  },
  {
    icon: Dna,
    title: "Biology",
    desc: "Delve into the study of life, from genetics to complex ecosystem dynamics.",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="py-24 bg-surface-alt transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black text-txt">
            Our Academic Programs
          </h2>
          <p className="text-txt-secondary max-w-2xl mx-auto text-lg">
            Comprehensive curriculum designed to build foundations and master
            advanced concepts.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map(({ icon: Icon, title, desc, img }) => (
            <div
              key={title}
              className="flex flex-col justify-between pb-5 bg-surface rounded-2xl overflow-hidden shadow-lg border border-border hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Icon className="w-5 h-5" />
                  {title}
                </div>
                <p className="text-txt-secondary text-sm">{desc}</p>
              </div>
              <button className="w-full py-3 px-4 border-2 border-primary/20 text-primary font-bold rounded-xl hover:bg-primary hover:text-txt-inverse transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                Learn More
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
