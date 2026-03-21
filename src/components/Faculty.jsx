import { UserCircle2 } from "lucide-react";

const faculty = [
  {
    name: 'Chandan Sir',
    role: 'Chemistry (Director)',
    bio: 'M.Sc in Chemistry, 20+ years exp.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2K0pU9T-L9980i3q5t9K615eX2u012i5k9p65T_X6V9W9X-mX9W1iX-M_X9L1iX-M_W9X-W1iX-M_X9L1iX-M_W9X-W1iX-M_X9L1iX-M_W9X-W1iX-M_X9L1iX-M_W9X-W1iX-M_X9L1iX-M_W9X-W1iX-M_X9L1iX-M_W9X-W1iX-M_',
  },
  {
    name: 'Kundan Sir',
    role: 'Physics',
    bio: 'M.Sc from IIT Kanpur, NEET/JEE mentor.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYjPswwnuWIyuzIFs_CftgMhv51ZHLZ4X_Nlyl6944xWEhL5X1_OxsfuJd2KqOsWgreDIjwasoXlkEwYBHGnXh6KoR8WKOd3tLJFeUuw554usq_89lsSP36MZTrarfkH6XOVU2IUApSstPKEsiTljDrsI4m0_ZXlmixfRIzgUQ_-rpDCtiPydHt24H6Anm42t3HLOJmykU86SrhO8Tv1xJG4IFVZqEXpFKVNYOPgE7n5FqWjMTRoKUIm6tYkzHw5oa9ECBPLXuQhdW',
  },
  {
    name: 'Raj Sir',
    role: 'Mathematics',
    bio: 'M.Sc in Mathematics, 20+ years exp.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByI8TZMkIRIIZFPaUVBGapP6AFDuprCnjCbn723yPCWyqvEaJZvFGOWaCVSVtQpV8y1NGre5rp9xpBmaTAuNmhrLBzrbxnneVBzsI9O1Sp312RugCGnob8SDgvOz0MxmZWylNaGK0SuZq1TG7WyxS7si9SZwlWA4bWIofcNEP9wC_Srzi_285x1O3LlL-ShFJE-1De5y35ir9QtPQ4dccELhulEhXjTg02ne2qwAiC2ZkCvJQNrNFdJhEw1BD5Yit0kVsSLWQFNzKn',
  },
  // {
  //   name: 'Ms. Sneha Kapoor',
  //   role: 'Biology HOD',
  //   bio: 'M.Sc in Zoology, specialized in Genetics.',
  //   img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB816RMxd2EezuY_hfBFcQCMKGuKMTA--tDHosIeCtQyWvvQX6YoVeHEotc89TO7KmEcCeaHvbNkAtWMKOku1X3KsgxLkWr4BbYl8MbQFmzlrJm6LQ_SXx_47I9KLlhKNK7Uksr6J__8l4f5A4PNq_Fj3ukZUXLBBCHu7P7Z1PqGgQDSUC3jvLtDRuZFEvKW6ISkFvfTtYKLIa3R14gdrni_Q1DzpBc9d_ImYDYgiZMRTXu4L-W1ewPKCqIv3hTQI-DxOSWcOJW50rO',
  // },
];

export default function Faculty() {
  return (
    <section id="faculty" className="py-24 bg-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black text-txt">Meet Our Expert Faculty</h2>
          <p className="text-txt-secondary max-w-2xl mx-auto text-lg">
            Learn from the best minds in the industry with years of teaching experience.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {faculty.map(({ name, role, bio, img }) => (
            <div key={name} className="text-center space-y-4 group">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary transition-colors duration-300 shadow-lg">
                {/* <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                /> */}
                <UserCircle2 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" strokeWidth={0.5}/>
              </div>
              <div>
                <h4 className="text-xl font-bold text-txt">{name}</h4>
                <p className="text-primary font-semibold">{role}</p>
                {/* <p className="text-sm text-txt-secondary mt-1">{bio}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
