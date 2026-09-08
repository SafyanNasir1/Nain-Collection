"use client";

import { Gift, Truck, KeyRound, PackageOpen, Sparkles } from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "Premium Quality",
    description: "We use the freshest ingredients",
  },
  {
    icon: Truck,
    title: "Same Day Delivery",
    description: "Fast & reliable delivery across Pakistan",
  },
  {
    icon: KeyRound,
    title: "Easy Payments",
    description: "100% secure online payment methods",
  },
  {
    icon: PackageOpen,
    title: "Custom Orders",
    description: "Make your own unique surprises",
  },
];

export default function FeatureStrip() {
  return (
    <section className="relative w-full overflow-hidden bg-[#faf7f0] px-4 py-12 sm:px-6 md:px-10 lg:py-16">
      {/* ==================== BACKGROUND DECORATION ==================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#16302a]/5 blur-[90px]" />

        <div className="absolute -right-32 top-0 h-[350px] w-[350px] rounded-full bg-[#c9a227]/7 blur-[90px]" />

        <div className="absolute left-[8%] top-[25%] h-1.5 w-1.5 rounded-full bg-[#c9a227]/50" />

        <div className="absolute right-[10%] bottom-[20%] h-2 w-2 rounded-full bg-[#c9a227]/40" />
      </div>

      {/* ==================== CONTENT ==================== */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#e7e1d3] bg-white/75 shadow-[0_15px_50px_rgba(22,48,42,0.06)] backdrop-blur-xl">
          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c9a227]/8 blur-[80px]" />

          <div className="relative grid grid-cols-1 divide-y divide-[#16302a]/8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="group relative flex items-center gap-4 px-6 py-7 transition-all duration-500 hover:bg-white/80 sm:px-7 lg:px-6 xl:px-8"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c9a227]/0 via-transparent to-[#c9a227]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <span className="absolute right-5 top-4 font-serif text-[10px] italic text-[#c9a227]/35">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#c9a227]/30 bg-[#16302a] shadow-[0_8px_22px_rgba(22,48,42,0.12)] transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-2 group-hover:bg-[#c9a227]">
                  <Icon
                    className="h-5 w-5 text-[#f2c879] transition-colors duration-500 group-hover:text-[#16302a]"
                    strokeWidth={1.6}
                  />

                  <span className="absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-all duration-500 group-hover:ring-[#c9a227]/30" />
                </div>

                {/* Text */}
                <div className="relative min-w-0">
                  <h3 className="text-sm font-semibold tracking-[-0.01em] text-[#16302a]">
                    {title}
                  </h3>

                  <p className="mt-1 max-w-[190px] text-xs leading-5 text-[#777263]">
                    {description}
                  </p>
                </div>

                {/* Bottom Gold Line */}
                <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#c9a227] transition-all duration-500 group-hover:w-16" />
              </div>
            ))}
          </div>

          {/* Bottom Label */}
          <div className="flex items-center justify-center gap-3 border-t border-[#16302a]/8 bg-[#f8f5ed]/60 px-4 py-3">
            <span className="h-px w-6 bg-[#c9a227]/40" />

            <span className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.25em] text-[#aaa69b]">
              <Sparkles className="h-3 w-3 text-[#c9a227]" />
              Made With Love
            </span>

            <span className="h-px w-6 bg-[#c9a227]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
