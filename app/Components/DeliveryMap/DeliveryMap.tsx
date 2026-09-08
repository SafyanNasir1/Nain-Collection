"use client";

import Image from "next/image";
import { MapPin, Truck, Sparkles, ArrowRight } from "lucide-react";

const cities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Faisalabad",
  "Peshawar",
  "Multan",
  "Rawalpindi",
  "All Major Cities",
];

const cityPositions = [
  { name: "Islamabad", top: "25%", left: "58%" },
  { name: "Lahore", top: "38%", left: "65%" },
  { name: "Faisalabad", top: "43%", left: "57%" },
  { name: "Peshawar", top: "31%", left: "42%" },
  { name: "Karachi", top: "78%", left: "42%" },
];

export default function DeliveryMap() {
  return (
    <section className="relative w-full overflow-hidden bg-[#faf7f0] px-4 py-20 sm:px-6 md:px-10 lg:py-24">
      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#c9a227]/8 blur-[100px]" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#16302a]/6 blur-[100px]" />

        <div className="absolute right-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#c9a227]/10" />

        <div className="absolute left-[8%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#c9a227]/60" />

        <div className="absolute right-[12%] bottom-[18%] h-2 w-2 rounded-full bg-[#c9a227]/50" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADING ================= */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c9a227]" />

            <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#927d42] sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Nationwide Delivery
            </span>

            <span className="h-px w-10 bg-[#c9a227]" />
          </div>

          <h2 className="text-3xl font-medium tracking-[-0.03em] text-[#16302a] sm:text-4xl md:text-5xl">
            We Deliver{" "}
            <span className="font-serif italic text-[#16302a]">Happiness</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6d685b] sm:text-base">
            From Lahore to all Cities, we deliver cakes, flowers and beautiful
            gifts with care across Pakistan.
          </p>
        </div>

        {/* ================= MAIN CARD ================= */}
        <div className="relative overflow-hidden rounded-[28px] border border-[#e7e1d3] bg-white/70 shadow-[0_20px_60px_rgba(22,48,42,0.07)] backdrop-blur-sm">
          {/* Card glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-[#c9a227]/10 blur-[90px]" />

          <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[0.85fr_1.25fr_0.75fr]">
            {/* ================= LEFT CONTENT ================= */}
            <div className="relative z-10 flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c9a227]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#927d42]">
                  All Over Pakistan
                </span>
              </div>

              <h3 className="text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-[#16302a] sm:text-4xl">
                Your Love,
                <br />
                <span className="font-serif italic">Delivered Anywhere.</span>
              </h3>

              <p className="mt-5 max-w-[360px] text-sm leading-7 text-[#6d685b]">
                Send something beautiful to the people you love. We carefully
                deliver cakes, flowers, teddy bears and thoughtful gifts
                nationwide.
              </p>

              <a
                // href=""
                className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#16302a] px-6 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(22,48,42,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c9a227] hover:text-[#16302a]"
              >
                <Truck className="h-4 w-4" />
                Track Your Order
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>

            {/* ================= MAP ================= */}
            <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden">
              {/* Map glow */}
              <div className="absolute h-[330px] w-[330px] rounded-full bg-[#c9a227]/10 blur-[80px]" />

              {/* Decorative circles */}
              <div className="absolute h-[370px] w-[370px] rounded-full border border-[#c9a227]/10" />

              <div className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-[#16302a]/10 animate-[spin_35s_linear_infinite]" />

              {/* Pakistan map */}
              <div className="relative z-10 h-[390px] w-[320px] sm:h-[450px] sm:w-[370px]">
                {/* <Image
                  src="/images/pakistan-map.svg"
                  alt="Pakistan map"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 370px"
                  className="object-contain opacity-[0.18] brightness-75 sepia-[0.15] saturate-[0.8]"
                /> */}

                {/* City dots */}
                {cityPositions.map((city) => (
                  <div
                    key={city.name}
                    className="absolute"
                    style={{
                      top: city.top,
                      left: city.left,
                    }}
                  >
                    {/* pulse */}
                    <span className="absolute -inset-2 animate-ping rounded-full bg-[#c9a227]/30" />

                    {/* dot */}
                    <span className="relative block h-3 w-3 rounded-full border-2 border-[#faf7f0] bg-[#c9a227] shadow-[0_3px_12px_rgba(201,162,39,0.4)]" />

                    {/* label */}
                    <span className="absolute left-4 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[#e7e1d3] bg-white/80 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#16302a] shadow-sm backdrop-blur-md sm:block">
                      {city.name}
                    </span>
                  </div>
                ))}

                {/* Delivery route */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 370 450"
                  fill="none"
                >
                  <path
                    d="M210 110 C250 150 175 200 215 245 C260 290 190 340 160 380"
                    stroke="#c9a227"
                    strokeWidth="2"
                    strokeDasharray="6 7"
                    opacity="0.55"
                  />
                </svg>
              </div>

              {/* Floating truck */}
              <div className="absolute bottom-8 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#16302a] text-[#c9a227] shadow-[0_12px_30px_rgba(22,48,42,0.18)] sm:right-10">
                <Truck className="h-5 w-5" />
              </div>
            </div>

            {/* ================= CITIES ================= */}
            <div className="relative z-10 flex flex-col justify-center border-t border-[#16302a]/5 bg-[#f8f5ed]/60 p-7 sm:p-10 lg:border-l lg:border-t-0">
              <div className="mb-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#927d42]">
                  Delivery Network
                </p>

                <h4 className="mt-2 font-serif text-2xl italic text-[#16302a]">
                  Cities We Serve
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-y-4 lg:grid-cols-1">
                {cities.map((city, index) => (
                  <div
                    key={city}
                    className="group flex items-center gap-2.5 text-sm text-[#55544c] transition-colors duration-300 hover:text-[#16302a]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16302a]/5 text-[8px] font-semibold text-[#927d42] transition-all duration-300 group-hover:bg-[#c9a227] group-hover:text-[#16302a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{city}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-2 border-t border-[#16302a]/8 pt-5 text-[9px] font-medium uppercase tracking-[0.2em] text-[#aaa69b]">
                <MapPin className="h-3.5 w-3.5 text-[#c9a227]" />
                Nationwide Coverage
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM TEXT ================= */}
        <div className="mt-10 flex items-center justify-center gap-3 text-[9px] font-medium uppercase tracking-[0.25em] text-[#aaa69b] sm:mt-12">
          <span className="h-px w-8 bg-[#c9a227]/40" />
          Fast Delivery • Premium Packaging • Nationwide Service
          <span className="h-px w-8 bg-[#c9a227]/40" />
        </div>
      </div>
    </section>
  );
}
