"use client";

import Image from "next/image";
import { Cake, Flower2, Gift, ArrowRight, Sparkles } from "lucide-react";

const categories = [
  {
    icon: Cake,
    title: "Layer Cakes",
    description: "Delicious layers of happiness",
    href: "/Deals",
    number: "01",
    image: "/images/cake.jpeg",
  },
  {
    icon: Flower2,
    title: "Flower Bouquets",
    description: "Fresh & beautiful bouquets",
    href: "/Deals",
    number: "02",
    image: "/images/flower.jpg",
  },
  {
    icon: Gift,
    title: "Teddy Bears & Gifts",
    description: "Cute, soft & full of love",
    href: "/Deals",
    number: "03",
    image: "/images/teddy.jpg",
  },
];

export default function Product() {
  return (
    <section className="relative w-full overflow-hidden bg-[#faf7f0] px-4 py-20 sm:px-6 md:px-10 lg:py-24">
      {/* ==================== BACKGROUND DECORATION ==================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#c9a227]/8 blur-[100px]" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#16302a]/6 blur-[100px]" />

        <div className="absolute right-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#c9a227]/10" />

        <div className="absolute left-[8%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#c9a227]/60" />

        <div className="absolute bottom-[18%] right-[12%] h-2 w-2 rounded-full bg-[#c9a227]/50" />
      </div>

      {/* ==================== CONTENT ==================== */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ==================== SECTION HEADING ==================== */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c9a227]" />

            <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#927d42] sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Our Collection
            </span>

            <span className="h-px w-10 bg-[#c9a227]" />
          </div>

          <h2 className="text-3xl font-medium tracking-[-0.03em] text-[#16302a] sm:text-4xl md:text-5xl">
            Find Something{" "}
            <span className="ml-2 font-serif italic text-[#16302a]">
              Special
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6d685b] sm:text-base">
            Thoughtfully chosen gifts, fresh flowers and delicious cakes made to
            turn every occasion into a beautiful memory.
          </p>
        </div>

        {/* ==================== CATEGORY CARDS ==================== */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {categories.map(
            ({ icon: Icon, title, description, href, number, image }) => (
              <a
                key={title}
                href={href}
                className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-[#e7e1d3] bg-white/80 p-7 shadow-[0_10px_35px_rgba(22,48,42,0.04)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a227]/40 hover:bg-white hover:shadow-[0_25px_55px_rgba(22,48,42,0.10)] sm:p-8"
              >
                {/* ==================== IMAGE ==================== */}
                <div className="pointer-events-none absolute -right-4 top-1/2 h-[250px] w-[250px] -translate-y-1/2 opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="250px"
                    className="
                      object-contain
                      [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_100%)]
                      [-webkit-mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_82%)]
                    "
                  />
                </div>

                {/* ==================== IMAGE SOFT OVERLAY ==================== */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent" />

                {/* ==================== CARD GOLD GLOW ==================== */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#c9a227]/10 opacity-0 blur-[45px] transition-opacity duration-500 group-hover:opacity-100" />

                {/* ==================== CARD NUMBER ==================== */}
                <span className="absolute right-6 top-6 z-10 font-serif text-sm italic text-[#c9a227]/50">
                  {number}
                </span>

                {/* ==================== CONTENT ==================== */}
                <div className="relative z-10 max-w-[55%]">
                  {/* Icon */}
                  <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#16302a] shadow-[0_10px_25px_rgba(22,48,42,0.15)] transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:bg-[#c9a227]">
                    <Icon
                      className="h-7 w-7 text-[#f2c879] transition-colors duration-500 group-hover:text-[#16302a]"
                      strokeWidth={1.6}
                    />

                    <span className="absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-all duration-500 group-hover:ring-[#c9a227]/30" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#16302a]">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-[#777263]">
                    {description}
                  </p>

                  {/* Shop Now */}
                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#c99a4a]">
                    <span className="relative">
                      Shop Now
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c99a4a] transition-all duration-300 group-hover:w-full" />
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c9a227]/30 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#16302a] group-hover:text-white">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                {/* ==================== BOTTOM GOLD LINE ==================== */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c9a227] transition-all duration-500 group-hover:w-full" />
              </a>
            ),
          )}
        </div>

        {/* ==================== BOTTOM TEXT ==================== */}
        <div className="mt-10 flex items-center justify-center gap-3 text-[9px] font-medium uppercase tracking-[0.25em] text-[#aaa69b] sm:mt-12">
          <span className="h-px w-8 bg-[#c9a227]/40" />
          Premium Gifts • Fresh Flowers • Beautiful Moments
          <span className="h-px w-8 bg-[#c9a227]/40" />
        </div>
      </div>
    </section>
  );
}
