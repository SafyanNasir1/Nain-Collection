// "use client";
// import Image from "next/image";
// import { useState, useEffect, useRef, useCallback } from "react";
// const slides = [
//   {
//     id: 1,
//     eyebrow: "ALL OVER PAKISTAN",
//     heading: "Make Every",
//     highlight: "Birthday Special",
//     tagline: "with Love & Surprises",
//     description:
//       "Cakes, flowers, luxury bouquets, teddy bears & beautiful gifts delivered with care.",
//     image: "/images/deal.jfif",
//     primaryCta: { label: "Shop Now", href: "/Deals" },
//     secondaryCta: { label: "Custom Deal", href: "/Deals" },
//   },
//   {
//     id: 2,
//     eyebrow: "DELIVERED WITH CARE",
//     heading: "Celebrate Every",
//     highlight: "Anniversary",
//     tagline: "with Roses & Layer Cakes",
//     description:
//       "Fresh bouquets, premium cakes and personalised notes made for unforgettable moments.",
//     image: "/images/deal2.jfif",
//     primaryCta: { label: "Shop Now", href: "/Deals" },
//     secondaryCta: { label: "Track Order", href: "/Cart" },
//   },
//   {
//     id: 3,
//     eyebrow: "BUILD YOUR OWN",
//     heading: "Design Your",
//     highlight: "Custom Combo",
//     tagline: "for Every Occasion",
//     description:
//       "Mix cakes, flowers and thoughtful gifts together to create something truly personal.",
//     image: "/images/deal3.jfif",
//     primaryCta: { label: "Start Customising", href: "/Deals" },
//     secondaryCta: { label: "View Combos", href: "/Deals" },
//   },
// ];
// const AUTOPLAY_MS = 4000;
// export default function Hero() {
//   const [active, setActive] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const timerRef = useRef(null);
//   const goTo = useCallback((index) => {
//     setActive((index + slides.length) % slides.length);
//   }, []);
//   const next = useCallback(() => {
//     setActive((prev) => (prev + 1) % slides.length);
//   }, []);
//   const prev = useCallback(() => {
//     setActive((prev) => (prev - 1 + slides.length) % slides.length);
//   }, []);
//   useEffect(() => {
//     if (isPaused) return;
//     timerRef.current = setInterval(() => {
//       setActive((prev) => (prev + 1) % slides.length);
//     }, AUTOPLAY_MS);
//     return () => clearInterval(timerRef.current);
//   }, [isPaused]);
//   return (
//     <section
//       className="relative w-full overflow-hidden bg-[#f8f5ed]"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//       aria-roledescription="carousel"
//       aria-label="Featured occasions"
//     >

//       {/* ===================================================== BACKGROUND ====================================================== */}{" "}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">

//         {/* Main glow */}
//         <div className=" absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#d7b95d]/10 blur-[100px] " />{" "}
//         <div className=" absolute -bottom-48 -left-40 h-[600px] w-[600px] rounded-full bg-[#16302a]/10 blur-[110px] " />{" "}
//         {/* Huge outline circle */}
//         <div className=" absolute right-[-220px] top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full border border-[#c9a227]/10 animate-[spin_30s_linear_infinite] " />{" "}
//         <div className=" absolute right-[-120px] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full border border-[#c9a227]/10 " />{" "}
//         {/* Decorative dots */}{" "}
//         <div className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-[#c9a227]" />{" "}
//         <div className="absolute left-[12%] top-[25%] h-1 w-1 rounded-full bg-[#16302a]/40" />{" "}
//         <div className="absolute right-[10%] bottom-[20%] h-2 w-2 rounded-full bg-[#c9a227]/50" />{" "}
//         {/* Decorative plus */}{" "}
//         <div className="absolute left-[6%] bottom-[20%] text-2xl font-light text-[#c9a227]/40">
//           {" "}
//           +{" "}
//         </div>{" "}
//         <div className="absolute right-[17%] top-[18%] text-xl font-light text-[#c9a227]/40">
//           {" "}
//           +{" "}
//         </div>{" "}
//       </div>{" "}
//       {/* ===================================================== HERO ====================================================== */}{" "}
//       <div className="relative min-h-[680px] w-full overflow-hidden lg:min-h-[720px]">
//         {" "}
//         {/* Slider */}{" "}
//         <div
//           className=" flex h-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] "
//           style={{ transform: `translateX(-${active * 100}%)` }}
//         >
//           {" "}
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className=" relative min-w-full overflow-hidden "
//               aria-hidden={active !== index}
//             >
//               {" "}
//               {/* ================================================= CONTENT GRID ================================================== */}{" "}
//               <div className=" mx-auto grid min-h-[680px] max-w-[1700px] grid-cols-1 items-center gap-4 px-6 py-16 sm:px-10 md:min-h-[700px] md:px-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-20 xl:px-28 2xl:px-36 ">
//                 {" "}
//                 {/* ================================================= LEFT CONTENT ================================================== */}{" "}
//                 <div
//                   className={` relative z-20 max-w-[620px] transition-all duration-1000 ${active === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} `}
//                 >
//                   {" "}
//                   {/* Eyebrow */}{" "}
//                   <div className="mb-6 flex items-center gap-4">
//                     {" "}
//                     <span className="h-px w-12 bg-[#c9a227]" />{" "}
//                     <span className=" text-[10px] font-semibold tracking-[0.35em] text-[#927d42] sm:text-xs ">
//                       {" "}
//                       {slide.eyebrow}{" "}
//                     </span>{" "}
//                   </div>{" "}
//                   {/* Heading */}{" "}
//                   <h1 className=" text-[44px] font-medium leading-[0.98] tracking-[-0.04em] text-[#16302a] sm:text-[54px] md:text-[62px] lg:text-[70px] xl:text-[78px] ">
//                     {" "}
//                     {slide.heading}{" "}
//                     <span className="block">
//                       {" "}
//                       <span className=" font-serif text-[45px] font-normal italic text-[#16302a] sm:text-[55px] md:text-[63px] lg:text-[71px] xl:text-[79px] ">
//                         {" "}
//                         {slide.highlight}{" "}
//                       </span>{" "}
//                       <span className=" ml-2 inline-block text-3xl text-[#c9a227] sm:text-4xl animate-[pulse_2s_ease-in-out_infinite] ">
//                         {" "}
//                         ♥{" "}
//                       </span>{" "}
//                     </span>{" "}
//                   </h1>{" "}
//                   {/* Tagline */}{" "}
//                   <p className=" mt-6 text-xl font-light tracking-wide text-[#383932] sm:text-2xl md:text-[27px] ">
//                     {" "}
//                     {slide.tagline}{" "}
//                   </p>{" "}
//                   {/* Description */}{" "}
//                   <p className=" mt-5 max-w-[510px] text-sm leading-7 text-[#6d685b] sm:text-base ">
//                     {" "}
//                     {slide.description}{" "}
//                   </p>{" "}
//                   {/* CTA */}{" "}
//                   <div className="mt-8 flex flex-wrap gap-4">
//                     {" "}
//                     {/* Primary */}{" "}
//                     <a
//                       href={slide.primaryCta.href}
//                       className=" group inline-flex items-center gap-3 rounded-full bg-[#16302a] px-7 py-4 text-sm font-medium text-white shadow-[0_12px_35px_rgba(22,48,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c9a227] hover:text-[#16302a] hover:shadow-[0_18px_40px_rgba(201,162,39,0.22)] "
//                     >
//                       {" "}
//                       {slide.primaryCta.label}{" "}
//                       <span className=" flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 ">
//                         {" "}
//                         →{" "}
//                       </span>{" "}
//                     </a>{" "}
//                     {/* Secondary */}{" "}
//                     <a
//                       href={slide.secondaryCta.href}
//                       className=" group inline-flex items-center gap-3 rounded-full border border-[#16302a]/20 bg-white/30 px-7 py-4 text-sm font-medium text-[#16302a] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#16302a] hover:bg-white/70 "
//                     >
//                       {" "}
//                       {slide.secondaryCta.label}{" "}
//                       <span className=" transition-transform duration-300 group-hover:translate-x-1 ">
//                         {" "}
//                         →{" "}
//                       </span>{" "}
//                     </a>{" "}
//                   </div>{" "}
//                   {/* Trust */}{" "}
//                   <div className=" mt-9 flex flex-wrap items-center gap-6 text-xs text-[#777263] ">
//                     {" "}
//                     <div className="flex items-center gap-2">
//                       {" "}
//                       <span className=" flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#c9a227] shadow-sm ">
//                         {" "}
//                         ✓{" "}
//                       </span>{" "}
//                       Nationwide Delivery{" "}
//                     </div>{" "}
//                     <div className="flex items-center gap-2">
//                       {" "}
//                       <span className=" flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#c9a227] shadow-sm ">
//                         {" "}
//                         ♡{" "}
//                       </span>{" "}
//                       Premium Quality{" "}
//                     </div>{" "}
//                   </div>{" "}
//                 </div>{" "}
//                 {/* ================================================= RIGHT IMAGE ================================================== */}{" "}
//                 <div
//                   className={` relative flex h-[370px] items-center justify-center sm:h-[450px] md:h-[500px] lg:h-[590px] transition-all duration-[1200ms] ${active === index ? "translate-x-0 scale-100 opacity-100" : "translate-x-16 scale-95 opacity-0"} `}
//                 >
//                   {" "}
//                   {/* Golden glow */}{" "}
//                   <div className=" absolute h-[260px] w-[260px] rounded-full bg-[#c9a227]/15 blur-[70px] sm:h-[360px] sm:w-[360px] lg:h-[460px] lg:w-[460px] " />{" "}
//                   {/* Outer ring */}{" "}
//                   <div className=" absolute h-[290px] w-[290px] rounded-full border border-[#c9a227]/20 sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] " />{" "}
//                   {/* Dashed ring */}{" "}
//                   <div className=" absolute h-[250px] w-[250px] rounded-full border border-dashed border-[#16302a]/10 animate-[spin_35s_linear_infinite] sm:h-[350px] sm:w-[350px] lg:h-[440px] lg:w-[440px] " />{" "}
//                   {/* Inner circle */}{" "}
//                   <div className=" absolute h-[190px] w-[190px] rounded-full bg-white/30 shadow-[inset_0_0_60px_rgba(255,255,255,0.5)] backdrop-blur-[2px] sm:h-[280px] sm:w-[280px] lg:h-[360px] lg:w-[360px] " />{" "}
//                   {/* Product image */}{" "}
//                   <div className=" relative z-10 h-[350px] w-[350px] sm:h-[430px] sm:w-[430px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] animate-[float_5s_ease-in-out_infinite] ">
//                     {" "}
//                     <Image
//                       src={slide.image}
//                       alt={`${slide.highlight} ${slide.tagline}`}
//                       fill
//                       priority={index === 0}
//                       sizes="(max-width: 768px) 90vw, 600px"
//                       className=" object-contain drop-shadow-[0_30px_35px_rgba(22,48,42,0.20)] [mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_96%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_96%)] "
//                     />{" "}
//                   </div>{" "}
//                   {/* ================================================= FLOATING BADGE ================================================== */}{" "}
//                   <div className=" absolute bottom-3 right-0 z-20 rounded-2xl border border-white/70 bg-white/70 px-5 py-4 shadow-[0_15px_40px_rgba(22,48,42,0.10)] backdrop-blur-xl sm:bottom-7 sm:right-4 ">
//                     {" "}
//                     <div className="flex items-center gap-3">
//                       {" "}
//                       <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-[#16302a] text-[#c9a227] ">
//                         {" "}
//                         ♥{" "}
//                       </div>{" "}
//                       <div>
//                         {" "}
//                         <p className=" text-[9px] font-semibold uppercase tracking-[0.2em] text-[#927d42] ">
//                           {" "}
//                           Made For You{" "}
//                         </p>{" "}
//                         <p className=" mt-1 font-serif text-sm italic text-[#16302a] ">
//                           {" "}
//                           Every Moment Matters{" "}
//                         </p>{" "}
//                       </div>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </div>{" "}
//             </div>
//           ))}{" "}
//         </div>{" "}
//         {/* ===================================================== LEFT ARROW ====================================================== */}{" "}
//         <button
//           onClick={prev}
//           aria-label="Previous slide"
//           className=" group absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/50 text-[#16302a] shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#16302a] hover:text-white sm:left-6 sm:h-13 sm:w-13 lg:left-8 "
//         >
//           {" "}
//           <ChevronIcon direction="left" />{" "}
//         </button>{" "}
//         {/* ===================================================== RIGHT ARROW ====================================================== */}{" "}
//         <button
//           onClick={next}
//           aria-label="Next slide"
//           className=" group absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/50 text-[#16302a] shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#16302a] hover:text-white sm:right-6 sm:h-13 sm:w-13 lg:right-8 "
//         >
//           {" "}
//           <ChevronIcon direction="right" />{" "}
//         </button>{" "}
//         {/* ===================================================== BOTTOM SLIDER CONTROL ====================================================== */}{" "}
//         <div className=" absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/60 bg-white/45 px-4 py-3 shadow-lg backdrop-blur-xl ">
//           {" "}
//           {slides.map((slide, index) => (
//             <button
//               key={slide.id}
//               onClick={() => goTo(index)}
//               aria-label={`Go to slide ${index + 1}`}
//               aria-current={active === index}
//               className={` h-1.5 rounded-full transition-all duration-500 ${active === index ? "w-10 bg-[#c9a227]" : "w-2 bg-[#16302a]/25 hover:bg-[#16302a]/60"} `}
//             />
//           ))}{" "}
//         </div>{" "}
//         {/* ===================================================== SLIDE COUNTER ====================================================== */}{" "}
//         <div className=" absolute bottom-8 right-8 z-30 hidden items-center gap-3 text-xs tracking-[0.2em] text-[#16302a]/40 sm:flex ">
//           {" "}
//           <span className="font-semibold text-[#16302a]">
//             {" "}
//             0{active + 1}{" "}
//           </span>{" "}
//           <span className="h-px w-8 bg-[#16302a]/20" />{" "}
//           <span>0{slides.length}</span>{" "}
//         </div>{" "}
//         {/* ===================================================== SIDE LABEL ====================================================== */}{" "}
//         <div className=" absolute left-8 top-1/2 z-20 hidden -translate-y-1/2 -rotate-90 origin-left items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#16302a]/30 xl:flex ">
//           {" "}
//           THE NAIN COLLECTION{" "}
//         </div>{" "}
//       </div>{" "}
//       {/* ===================================================== BOTTOM FEATURE STRIP ====================================================== */}{" "}
//       <div className=" relative z-20 border-t border-[#16302a]/5 bg-white/40 backdrop-blur-md ">
//         {" "}
//         <div className=" mx-auto flex max-w-[1500px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#777263] sm:gap-x-14 ">
//           {" "}
//           <span>✦ Premium Gifts</span> <span>✦ Fresh Flowers</span>{" "}
//           <span>✦ Delicious Cakes</span> <span>✦ Nationwide Delivery</span>{" "}
//         </div>{" "}
//       </div>{" "}
//     </section>
//   );
// }
// function ChevronIcon({ direction }) {
//   const points = direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6";
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//       {" "}
//       <path
//         d={points}
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />{" "}
//     </svg>
//   );
// }
"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const slides = [
  {
    id: 1,
    eyebrow: "ALL OVER PAKISTAN",
    heading: "Make Every",
    highlight: "Birthday Special",
    tagline: "with Love & Surprises",
    description:
      "Cakes, flowers, luxury bouquets, teddy bears & beautiful gifts delivered with care.",
    image: "/images/deal.jfif",
    primaryCta: { label: "Shop Now", href: "/Deals" },
    secondaryCta: { label: "Custom Deal", href: "/Deals" },
  },
  {
    id: 2,
    eyebrow: "DELIVERED WITH CARE",
    heading: "Celebrate Every",
    highlight: "Anniversary",
    tagline: "with Roses & Layer Cakes",
    description:
      "Fresh bouquets, premium cakes and personalised notes made for unforgettable moments.",
    image: "/images/deal2.jfif",
    primaryCta: { label: "Shop Now", href: "/Deals" },
    secondaryCta: { label: "Track Order", href: "/Cart" },
  },
  {
    id: 3,
    eyebrow: "BUILD YOUR OWN",
    heading: "Design Your",
    highlight: "Custom Combo",
    tagline: "for Every Occasion",
    description:
      "Mix cakes, flowers and thoughtful gifts together to create something truly personal.",
    image: "/images/deal3.jfif",
    primaryCta: { label: "Start Customising", href: "/Deals" },
    secondaryCta: { label: "View Combos", href: "/Deals" },
  },
];

const AUTOPLAY_MS = 4000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // FIX 1: timerRef ka proper TypeScript type
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // FIX 2: index ka type
  const goTo = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => {
      // FIX 3: null check
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#f8f5ed]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured occasions"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#d7b95d]/10 blur-[100px]" />

        <div className="absolute -bottom-48 -left-40 h-[600px] w-[600px] rounded-full bg-[#16302a]/10 blur-[110px]" />

        <div className="absolute right-[-220px] top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full border border-[#c9a227]/10 animate-[spin_30s_linear_infinite]" />

        <div className="absolute right-[-120px] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full border border-[#c9a227]/10" />

        <div className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-[#c9a227]" />

        <div className="absolute left-[12%] top-[25%] h-1 w-1 rounded-full bg-[#16302a]/40" />

        <div className="absolute right-[10%] bottom-[20%] h-2 w-2 rounded-full bg-[#c9a227]/50" />

        <div className="absolute left-[6%] bottom-[20%] text-2xl font-light text-[#c9a227]/40">
          +
        </div>

        <div className="absolute right-[17%] top-[18%] text-xl font-light text-[#c9a227]/40">
          +
        </div>
      </div>

      {/* HERO */}
      <div className="relative min-h-[680px] w-full overflow-hidden lg:min-h-[720px]">
        {/* Slider */}
        <div
          className="flex h-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide, index: number) => (
            <div
              key={slide.id}
              className="relative min-w-full overflow-hidden"
              aria-hidden={active !== index}
            >
              {/* CONTENT GRID */}
              <div className="mx-auto grid min-h-[680px] max-w-[1700px] grid-cols-1 items-center gap-4 px-6 py-16 sm:px-10 md:min-h-[700px] md:px-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-20 xl:px-28 2xl:px-36">
                {/* LEFT CONTENT */}
                <div
                  className={`relative z-20 max-w-[620px] transition-all duration-1000 ${
                    active === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="h-px w-12 bg-[#c9a227]" />

                    <span className="text-[10px] font-semibold tracking-[0.35em] text-[#927d42] sm:text-xs">
                      {slide.eyebrow}
                    </span>
                  </div>

                  <h1 className="text-[44px] font-medium leading-[0.98] tracking-[-0.04em] text-[#16302a] sm:text-[54px] md:text-[62px] lg:text-[70px] xl:text-[78px]">
                    {slide.heading}

                    <span className="block">
                      <span className="font-serif text-[45px] font-normal italic text-[#16302a] sm:text-[55px] md:text-[63px] lg:text-[71px] xl:text-[79px]">
                        {slide.highlight}
                      </span>

                      <span className="ml-2 inline-block text-3xl text-[#c9a227] sm:text-4xl animate-[pulse_2s_ease-in-out_infinite]">
                        ♥
                      </span>
                    </span>
                  </h1>

                  <p className="mt-6 text-xl font-light tracking-wide text-[#383932] sm:text-2xl md:text-[27px]">
                    {slide.tagline}
                  </p>

                  <p className="mt-5 max-w-[510px] text-sm leading-7 text-[#6d685b] sm:text-base">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={slide.primaryCta.href}
                      className="group inline-flex items-center gap-3 rounded-full bg-[#16302a] px-7 py-4 text-sm font-medium text-white shadow-[0_12px_35px_rgba(22,48,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c9a227] hover:text-[#16302a] hover:shadow-[0_18px_40px_rgba(201,162,39,0.22)]"
                    >
                      {slide.primaryCta.label}

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>

                    <a
                      href={slide.secondaryCta.href}
                      className="group inline-flex items-center gap-3 rounded-full border border-[#16302a]/20 bg-white/30 px-7 py-4 text-sm font-medium text-[#16302a] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#16302a] hover:bg-white/70"
                    >
                      {slide.secondaryCta.label}

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>

                  <div className="mt-9 flex flex-wrap items-center gap-6 text-xs text-[#777263]">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#c9a227] shadow-sm">
                        ✓
                      </span>
                      Nationwide Delivery
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#c9a227] shadow-sm">
                        ♡
                      </span>
                      Premium Quality
                    </div>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div
                  className={`relative flex h-[370px] items-center justify-center sm:h-[450px] md:h-[500px] lg:h-[590px] transition-all duration-[1200ms] ${
                    active === index
                      ? "translate-x-0 scale-100 opacity-100"
                      : "translate-x-16 scale-95 opacity-0"
                  }`}
                >
                  <div className="absolute h-[260px] w-[260px] rounded-full bg-[#c9a227]/15 blur-[70px] sm:h-[360px] sm:w-[360px] lg:h-[460px] lg:w-[460px]" />

                  <div className="absolute h-[290px] w-[290px] rounded-full border border-[#c9a227]/20 sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />

                  <div className="absolute h-[250px] w-[250px] rounded-full border border-dashed border-[#16302a]/10 animate-[spin_35s_linear_infinite] sm:h-[350px] sm:w-[350px] lg:h-[440px] lg:w-[440px]" />

                  <div className="absolute h-[190px] w-[190px] rounded-full bg-white/30 shadow-[inset_0_0_60px_rgba(255,255,255,0.5)] backdrop-blur-[2px] sm:h-[280px] sm:w-[280px] lg:h-[360px] lg:w-[360px]" />

                  <div className="relative z-10 h-[350px] w-[350px] sm:h-[430px] sm:w-[430px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] animate-[float_5s_ease-in-out_infinite]">
                    <Image
                      src={slide.image}
                      alt={`${slide.highlight} ${slide.tagline}`}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 90vw, 600px"
                      className="object-contain drop-shadow-[0_30px_35px_rgba(22,48,42,0.20)] [mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_96%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_96%)]"
                    />
                  </div>

                  {/* FLOATING BADGE */}
                  <div className="absolute bottom-3 right-0 z-20 rounded-2xl border border-white/70 bg-white/70 px-5 py-4 shadow-[0_15px_40px_rgba(22,48,42,0.10)] backdrop-blur-xl sm:bottom-7 sm:right-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16302a] text-[#c9a227]">
                        ♥
                      </div>

                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#927d42]">
                          Made For You
                        </p>

                        <p className="mt-1 font-serif text-sm italic text-[#16302a]">
                          Every Moment Matters
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="group absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/50 text-[#16302a] shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#16302a] hover:text-white sm:left-6 sm:h-13 sm:w-13 lg:left-8"
        >
          <ChevronIcon direction="left" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="group absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/50 text-[#16302a] shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#16302a] hover:text-white sm:right-6 sm:h-13 sm:w-13 lg:right-8"
        >
          <ChevronIcon direction="right" />
        </button>

        {/* BOTTOM SLIDER CONTROL */}
        <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/60 bg-white/45 px-4 py-3 shadow-lg backdrop-blur-xl">
          {slides.map((slide, index: number) => (
            <button
              key={slide.id}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={active === index}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                active === index
                  ? "w-10 bg-[#c9a227]"
                  : "w-2 bg-[#16302a]/25 hover:bg-[#16302a]/60"
              }`}
            />
          ))}
        </div>

        {/* SLIDE COUNTER */}
        <div className="absolute bottom-8 right-8 z-30 hidden items-center gap-3 text-xs tracking-[0.2em] text-[#16302a]/40 sm:flex">
          <span className="font-semibold text-[#16302a]">0{active + 1}</span>

          <span className="h-px w-8 bg-[#16302a]/20" />

          <span>0{slides.length}</span>
        </div>

        {/* SIDE LABEL */}
        <div className="absolute left-8 top-1/2 z-20 hidden -translate-y-1/2 -rotate-90 origin-left items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#16302a]/30 xl:flex">
          THE NAIN COLLECTION
        </div>
      </div>

      {/* BOTTOM FEATURE STRIP */}
      <div className="relative z-20 border-t border-[#16302a]/5 bg-white/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#777263] sm:gap-x-14">
          <span>✦ Premium Gifts</span>
          <span>✦ Fresh Flowers</span>
          <span>✦ Delicious Cakes</span>
          <span>✦ Nationwide Delivery</span>
        </div>
      </div>
    </section>
  );
}

// FIX: direction ka type
function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  const points = direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6";

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d={points}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}