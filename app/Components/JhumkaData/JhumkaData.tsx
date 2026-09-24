"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deals } from "@/JhumkaData/data";

export default function JhumkaData() {
  const router = useRouter();

  const [liked, setLiked] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const filteredDeals = deals;

  /* =========================
     JHUMKA BOX CARD
  ========================= */

  const DealCard = ({
    deal,
    index,
  }: {
    deal: (typeof deals)[number];
    index: number;
  }) => (
    <article
      onClick={() => router.push(`/Jhumka/${deal.id}`)}
      className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-[#16302a]/10 bg-white shadow-[0_10px_40px_rgba(22,48,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(22,48,42,0.14)]"
      style={{
        animation: `fadeUp 0.7s ease-out ${index * 90}ms both`,
      }}
    >
      {/* ================= IMAGE ================= */}

      <div className="relative aspect-[4/4.5] overflow-hidden bg-[#eeeade]">
        <Image
          src={deal.image}
          alt={deal.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* IMAGE OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#16302a]/70 via-transparent to-[#16302a]/10 opacity-70" />

        {/* TOP SHINE */}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />

        {/* ================= DISCOUNT ================= */}

        <div className="absolute left-4 top-4">
          <div className="rounded-full bg-[#c9a227] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#16302a] shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
            {deal.discount}
          </div>
        </div>

        {/* ================= WISHLIST ================= */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleLike(deal.id);
          }}
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/85 text-xl shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white"
          aria-label="Add to wishlist"
        >
          <span
            className={`transition-all duration-300 ${
              liked.includes(deal.id)
                ? "scale-110 text-red-500"
                : "text-[#16302a]"
            }`}
          >
            {liked.includes(deal.id) ? "♥" : "♡"}
          </span>
        </button>

        {/* ================= JHUMKA LABEL ================= */}

        <div className="absolute bottom-4 left-4">
          <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            Jhumka Box
          </span>
        </div>

        {/* ================= QUICK VIEW ================= */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/Deals/${deal.id}`);
          }}
          className="absolute bottom-4 right-4 translate-y-3 rounded-full bg-white px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#16302a] opacity-0 shadow-xl transition-all duration-500 hover:bg-[#c9a227] group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick View →
        </button>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-5 pb-6">
        {/* COLLECTION LABEL */}

        <div className="mb-2 flex items-center gap-2">
          <span className="h-px w-5 bg-[#c9a227]" />

          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#a1811c]">
            Jhumka Collection
          </p>
        </div>

        {/* TITLE */}

        <h3 className="min-h-[52px] font-serif text-[20px] leading-6 text-[#16302a] transition-colors duration-300 group-hover:text-[#a1811c]">
          {deal.title}
        </h3>

        {/* PRICE AREA */}

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="mb-1 text-[8px] font-medium uppercase tracking-[0.18em] text-[#999]">
              Special Price
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xl font-bold text-[#16302a]">
                Rs. {deal.price.toLocaleString()}
              </span>

              <span className="text-xs text-[#aaa] line-through">
                Rs. {deal.oldPrice.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* ================= VIEW JHUMKA BUTTON ================= */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/Deals/${deal.id}`);
          }}
          className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-[#16302a] py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9a227] hover:text-[#16302a] hover:shadow-[0_12px_30px_rgba(201,162,39,0.22)]"
        >
          View Jhumka Box
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </article>
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ed] text-[#16302a]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#16302a]/5">
        {/* DECORATIONS */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#c9a227]/8 blur-[100px]" />

          <div className="absolute -bottom-48 -left-40 h-[450px] w-[450px] rounded-full bg-[#16302a]/6 blur-[110px]" />

          <div className="absolute right-[-100px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[#c9a227]/10 animate-[spin_35s_linear_infinite]" />

          <div className="absolute right-[5%] top-[20%] h-20 w-20 rounded-full border border-dashed border-[#16302a]/10 animate-[spin_20s_linear_infinite]" />

          <span className="absolute left-[9%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#c9a227] animate-pulse" />

          <span className="absolute right-[13%] bottom-[25%] h-2 w-2 rounded-full bg-[#c9a227]/50 animate-pulse" />
        </div>

        {/* HERO CONTENT */}

        <div className="relative mx-auto flex min-h-[430px] max-w-7xl items-center justify-center px-6 py-20 text-center sm:px-8">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-6 flex items-center justify-center gap-4 animate-[fadeIn_1s_ease-out]">
              <span className="h-px w-10 bg-[#c9a227]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#927d42]">
                Jhumka Collection
              </span>

              <span className="h-px w-10 bg-[#c9a227]" />
            </div>

            <h1 className="text-[52px] font-medium leading-[0.95] tracking-[-0.04em] sm:text-[68px] md:text-[78px]">
              Elegant
              <span className="ml-3 font-serif italic text-[#c9a227]">
                Jhumka Boxes
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#6d685b] sm:text-base">
              Beautifully curated jhumka boxes, thoughtfully packed to make
              every moment a little more special.
            </p>

            <div className="mt-8 flex justify-center">
              <div className="rounded-full bg-[#16302a] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(22,48,42,0.12)]">
                Elegant • Traditional • Beautiful
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          JHUMKA COLLECTION
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        {/* SECTION HEADER */}

        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c9a227]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#927d42]">
                Handpicked For You
              </p>
            </div>

            <h2 className="text-3xl font-medium tracking-tight text-[#16302a] sm:text-4xl md:text-5xl">
              Our
              <span className="ml-2 font-serif italic text-[#c9a227]">
                Jhumka Collection
              </span>
            </h2>
          </div>

          <p className="text-xs text-[#777263]">
            {filteredDeals.length} beautiful jhumka boxes
          </p>
        </div>

        {/* PRODUCTS */}

        {filteredDeals.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDeals.map((deal, index) => (
              <DealCard key={deal.id} deal={deal} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#16302a]/5 bg-white/60 py-16 text-center">
            <p className="font-serif text-2xl text-[#16302a]">
              No Jhumka Boxes Found
            </p>

            <p className="mt-2 text-sm text-[#777263]">
              No jhumka boxes are available right now.
            </p>
          </div>
        )}
      </section>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />
      </div>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="relative px-5 pb-16 pt-16 sm:px-8 lg:pb-24 lg:pt-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#16302a] px-6 py-14 text-center text-white sm:px-12 lg:py-20">
          {/* DECORATIONS */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10 animate-[spin_30s_linear_infinite]" />

          <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-[#c9a227]/15" />

          <div className="relative z-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#d7b438]">
              Timeless Elegance
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              A Little Box
              <br />
              <span className="italic text-[#d7b438]">Full Of Elegance.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">
              Discover beautiful jhumka boxes made to add a traditional touch to
              every special occasion.
            </p>

            <button
              onClick={() => router.push("/Deals")}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#16302a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d7b438]"
            >
              Explore Jhumka Boxes
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
