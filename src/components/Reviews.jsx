import { Star, Heart, Shield } from 'lucide-react';

const reviews = [
  {
    name: 'Rahul Sharma',
    text: '"The best coaching in Patna for competitive exams. The teachers are very supportive and clarify every doubt patiently."',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByI8TZMkIRIIZFPaUVBGapP6AFDuprCnjCbn723yPCWyqvEaJZvFGOWaCVSVtQpV8y1NGre5rp9xpBmaTAuNmhrLBzrbxnneVBzsI9O1Sp312RugCGnob8SDgvOz0MxmZWylNaGK0SuZq1TG7WyxS7si9SZwlWA4bWIofcNEP9wC_Srzi_285x1O3LlL-ShFJE-1De5y35ir9QtPQ4dccELhulEhXjTg02ne2qwAiC2ZkCvJQNrNFdJhEw1BD5Yit0kVsSLWQFNzKn',
  },
  {
    name: 'Priya Verma',
    text: '"Incentive has transformed my way of learning. The foundation course is excellent for clearing basic concepts of Science."',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYjPswwnuWIyuzIFs_CftgMhv51ZHLZ4X_Nlyl6944xWEhL5X1_OxsfuJd2KqOsWgreDIjwasoXlkEwYBHGnXh6KoR8WKOd3tLJFeUuw554usq_89lsSP36MZTrarfkH6XOVU2IUApSstPKEsiTljDrsI4m0_ZXlmixfRIzgUQ_-rpDCtiPydHt24H6Anm42t3HLOJmykU86SrhO8Tv1xJG4IFVZqEXpFKVNYOPgE7n5FqWjMTRoKUIm6tYkzHw5oa9ECBPLXuQhdW',
  },
  {
    name: 'Amit Kumar',
    text: '"Great environment for studies. The personalized attention helped me score 95% in my board exams. Highly recommended!"',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB816RMxd2EezuY_hfBFcQCMKGuKMTA--tDHosIeCtQyWvvQX6YoVeHEotc89TO7KmEcCeaHvbNkAtWMKOku1X3KsgxLkWr4BbYl8MbQFmzlrJm6LQ_SXx_47I9KLlhKNK7Uksr6J__8l4f5A4PNq_Fj3ukZUXLBBCHu7P7Z1PqGgQDSUC3jvLtDRuZFEvKW6ISkFvfTtYKLIa3R14gdrni_Q1DzpBc9d_ImYDYgiZMRTXu4L-W1ewPKCqIv3hTQI-DxOSWcOJW50rO',
  },
];

function StarRating() {
  return (
    <div className="flex text-star">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-surface transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-txt">Student Testimonials</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Star className="w-7 h-7 text-star fill-current" />
                <span className="text-2xl font-black ml-2 text-txt">4.9</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <p className="text-txt-secondary font-medium">Google Rating (172 reviews)</p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex gap-3 flex-wrap">
            <div className="inline-flex items-center gap-2 bg-surface-alt px-4 py-2 rounded-full text-xs font-bold text-txt-secondary border border-border">
              <Heart className="w-4 h-4 text-accent" />
              Inclusive Environment
            </div>
            <div className="inline-flex items-center gap-2 bg-surface-alt px-4 py-2 rounded-full text-xs font-bold text-txt-secondary border border-border">
              <Shield className="w-4 h-4 text-primary" />
              Student Support
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          {reviews.map(({ name, text, img }) => (
            <div
              key={name}
              className="w-80 h-80 p-8 bg-surface-alt rounded-2xl border border-border space-y-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={img}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-txt">{name}</h4>
                  <StarRating />
                </div>
              </div>
              <p className="text-txt-secondary italic leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
