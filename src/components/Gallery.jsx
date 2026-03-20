import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9ZwMMT14WXLDa49jLiJASldK6HTj3-ukSH6qLfpH25rIUMoqGAsm5GO3iisu-o78-a3rGxvHwclmMoKNkQ_3SlAcwWieeE1pq6yRXTwRAo8qC2_MkOydJuQNyr3L3GYG0ENUS15CNbGt-OZEg9D96MBTdWuis2EpYkKtLOkqjqFxmVuFe3jzlMCXoWyVaaefqmrxPcci17AL_kH6q5CgwkP6VbsajLzJkMIT3kjMDWO1XnwHZKfL_NGX1XLt8jNA497yf6tITZCKV",
    alt: "Students interacting",
    h: "h-40",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFwuZdA4RqjkeJuMGBY2wSxMQwQgmB_9NxsyUVhrHdy-x--SLWsoyK0S_VMjEb8lbYCFNlHybvRRMyKA6OoL2-jI8HDW0V0QicbtmrLG_okujjpILAKgXOXvKcD4hSZnn5FgSn9V13yyKGrBlQ0eNMgJzBERCxPK6ccQNEHf4zt8H9KhHFYEkv0D1FejzMwR2PHYltIMW99AZGUiPl5IA9Ua3-k6PVKBbVvokRnU5T-Lq81LKF6yxbV4EfO0inkdPxH3Ky8EHFQsRx",
    alt: "Library study session",
    h: "h-64",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuChSud18vjTDBxGeE1I5y9N0DQEpk5KFuMbUJzoGz4hH1zXLPkP45CjeVESHC8L_jsRErdm2CgTLxWxRWKeXsh8Gmnc5tZHt4cDuv5BSlnHdpkyq1kpHdDbZx64YczVXud_RpLT6qWzRdQAs-PPMOd-w7vPgSTYeHC3j9OkQkIcN3hNWGNphh8rgDYdWhJ63RXFRzdUhU8uErQjl9YrnHJMNzkzjoYogiSD4hG-YnDBmTPaAFasf65ADQhmiw-dTqOQWEZ1OZBbyqCt",
    alt: "Group learning",
    h: "h-64",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP-M7ftwUpBwqgQT_JkU9CUu_E24XA7uFCcIEdhmVW-KDYqhvXHJHmKmsfSCahFeTXSF2XKLd0feI_RBQpIuBCpBanSINshMDGMhSDATKgBllTK9F8ffIiPRETLm3gaKMRWjJd6-mmUfjlVDE49GUWiWauc0lHGhYQQkyh-uj_BWJo75FptnJICOTSwUSsLIIXxVg74edTneVnpFpHBWDFHL1AF3xGHTecQmys0iIgQH-a74Q-qk_18aQhssd4IZUGrJ89thP5Pj3-",
    alt: "Teaching at whiteboard",
    h: "h-40",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUd9nOKz3XxmNiEeXIr6HyljvjOaUb2PYCyvNjYH4Xm96sAgZxVWi5QV3VURgPUls9eqiWthKZxXCAEiPZBfLTcXIz3RZ3Qy31sB2B5D8ltdaH95XPpo-7HP_HJJUFUK57AEcuF8om6NhiYxZlz9PdhiVrzAJhPCgFKHVnKfH9RkEsbQAN6L00t03t-0Kg0c4SgQpE06Um9cVey5vr62AEX2EoXWHiR4YgGYwkbWEu3a16jrosYP87BVZsuPuT3jQAjZwNaZGxTxza",
    alt: "Students in lecture",
    h: "h-40",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZlugMQhH-WlbcD9_5Gyh9hwQipRCc4inT_XVXwJc8H56CciMA2DtRodKxEkxFcFksvGSRJwIVBRXetJDM4d8oa823WC9Yiu-xe5QAdV6kuIy5d8KxkHNFAOwS6dAYVnUMqRoEwy9RRPLA-GYjnG5i7M5QB9JQ7RAN5H5kzdO9Fa-TvLqeb_tokff03dZMdrTkFAj6WoG2aNUBclEb5jTPgog53nxV4Q9XyPJBRm0UKsPc8plyiVuDFCBYt6M06NAW2ozCS62l7SHh",
    alt: "Digital classroom",
    h: "h-64",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgcf2GVKVEQm5QVis2Tzx1ArtGzPgtLSCsbFt4kWK8-q2d1iNqCMAcYab62ONKUoDvhaIOez7tu47gRns5fZzrH7W9E9yiumUSwlxn1ZkO0I8j9pWV0itRwZyxZvYBeJc_daA8tLNA1AU-Day4mu01pXY_NcfSN9HoZmGcDIynKo4gbU6etUZPDeTNBKhlce_NQs4uh7Lq2wrrscdpBXeGPvHEx8zDWLrlkptbRbVLlk-XJeigN0g-0TH1tg7xE8-uLrUbdGH0eUVP",
    alt: "Happy students",
    h: "h-64",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmdQBGz30P_yFkpijKvEHZOiz5nIWnB9V119ZBCgEGvK43_zPqsXuFS52vUTmdQfMdZiDZAngxCRkUNjihMXwF4tZfjsQrqT3YMRecfu60gvGFo98OvQVexvmA82zlN7UbdDrmDlQ47vj12C8PXJddw58viPYBEZOyXG_AlltrA9HbOoautHjWSqt8u1O55WubzU-Fq0HW7ScWJ1Fct8o5bQHG7i1wFg-kqtQ8I0ttKqRFeRNxSDJCBswq6tvVVIf7HutFG4eajA9O",
    alt: "Academic books",
    h: "h-40",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Split into 4 columns and keep track of original index
  const cols = [[], [], [], []];
  images.forEach((img, i) => cols[i % 4].push({ ...img, globalIndex: i }));

  const nextImage = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-24 bg-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-center mb-16 text-txt">
          Our Learning Environment
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cols.map((col, ci) => (
            <div key={ci} className={`space-y-4 ${ci % 2 === 1 ? "pt-8" : ""}`}>
              {col.map(({ src, alt, h, globalIndex }) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-xl group cursor-pointer"
                  onClick={() => setSelectedIndex(globalIndex)}
                >
                  <img
                    src={src}
                    alt={alt}
                    className={`rounded-xl w-full h-full object-cover shadow-md group-hover:scale-105 transition-transform duration-500`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Overlay */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-surface-alt/80 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-txt hover:text-primary transition-colors z-[110]"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 text-txt hover:text-primary transition-colors z-[110] bg-surface/50 p-2 rounded-full backdrop-blur-sm"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <div
            className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative group w-full flex items-center justify-center">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300"
              />
            </div>

            <div className="text-center space-y-4">
              {/* image alt text */}
              {/* <p className="text-txt text-lg font-bold bg-surface/50 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm inline-block">
                {images[selectedIndex].alt}
              </p> */}

              {/* Indicator Dots */}
              <div className="flex justify-center items-center gap-2.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === selectedIndex
                        ? "bg-primary w-8"
                        : "bg-txt/20 hover:bg-txt/40 w-2.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 text-txt hover:text-primary transition-colors z-[110] bg-surface/50 p-2 rounded-full backdrop-blur-sm"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </div>
      )}
    </section>
  );
}
