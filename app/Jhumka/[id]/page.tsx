"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { deals } from "@/JhumkaData/data";
import Navbar from "@/app/Components/Navbar/navbar";
import Footer from "@/app/Components/Footer/Footer";

export default function JhumkaDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState(0);

  const deal = deals.find((item) => item.id === Number(params.id));

  /* =========================
     ADD TO CART
  ========================= */

  const handleAddToCart = () => {
    if (!deal) return;

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItem = existingCart.find((item: any) => item.id === deal.id);

    let updatedCart;

    if (existingItem) {
      updatedCart = existingCart.map((item: any) =>
        item.id === deal.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          id: deal.id,
          title: deal.title,
          subtitle: deal.subtitle,
          price: deal.price,
          oldPrice: deal.oldPrice,
          image: deal.image,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("cartUpdated"));

    router.push("/Cart");
  };

  /* =========================
     DEAL NOT FOUND
  ========================= */

  if (!deal) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-screen items-center justify-center bg-[#f8f5ed] px-5">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a1811c]">
              Something went wrong
            </p>

            <h1 className="mt-3 font-serif text-4xl text-[#16302a]">
              Jhumka Box Not Found
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#777263]">
              The jhumka box you are looking for is not available right now.
            </p>

            <button
              onClick={() => router.push("/Jhumka")}
              className="mt-7 rounded-full bg-[#16302a] px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#c9a227] hover:text-[#16302a]"
            >
              Back To Jhumka Collection
            </button>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const images =
    deal.images && deal.images.length > 0 ? deal.images : [deal.image];

  const hasMultipleImages = images.length > 1;

  const saving = deal.oldPrice - deal.price;

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#f8f5ed] text-[#16302a]">
        {/* =========================
            BACKGROUND DECORATIONS
        ========================= */}

        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#c9a227]/5 blur-[110px]" />

          <div className="absolute -left-40 bottom-20 h-[450px] w-[450px] rounded-full bg-[#16302a]/5 blur-[120px]" />

          <div className="absolute right-[8%] top-[25%] h-40 w-40 rounded-full border border-[#c9a227]/10 animate-[spin_30s_linear_infinite]" />

          <div className="absolute bottom-[15%] left-[8%] h-24 w-24 rounded-full border border-dashed border-[#16302a]/10 animate-[spin_20s_linear_infinite]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
          {/* =========================
              BACK BUTTON
          ========================= */}

          <button
            onClick={() => router.push("/Jhumka")}
            className="group mb-10 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#777263] transition-colors duration-300 hover:text-[#16302a]"
          >
            <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back To Jhumka Collection
          </button>

          {/* =========================
              MAIN PRODUCT AREA
          ========================= */}

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
            {/* =========================
                IMAGE SECTION
            ========================= */}

            <div
              className={`grid items-start gap-4 sm:gap-5 ${
                hasMultipleImages
                  ? "grid-cols-[1fr_95px] sm:grid-cols-[1fr_120px]"
                  : "grid-cols-1"
              }`}
              style={{
                animation: "fadeUp 0.8s ease-out both",
              }}
            >
              {/* MAIN IMAGE */}

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[30px] border border-[#16302a]/8 bg-[#eeeade] shadow-[0_25px_70px_rgba(22,48,42,0.10)] sm:aspect-square lg:aspect-[4/5]">
                {/* DISCOUNT */}

                <div className="absolute left-5 top-5 z-20 rounded-full bg-[#16302a] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                  {deal.discount}
                </div>

                {/* JHUMKA LABEL */}

                <div className="absolute bottom-5 left-5 z-20">
                  <span className="rounded-full border border-white/40 bg-white/15 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    Jhumka Box
                  </span>
                </div>

                {/* IMAGE NUMBER */}

                {hasMultipleImages && (
                  <div className="absolute bottom-5 right-5 z-20 rounded-full border border-white/50 bg-white/75 px-3 py-2 text-[9px] font-semibold tracking-[0.15em] text-[#16302a] backdrop-blur-md">
                    {selectedImage + 1} / {images.length}
                  </div>
                )}

                {/* MAIN IMAGE */}

                <div
                  key={images[selectedImage]}
                  className="relative h-full w-full animate-[imageFade_0.45s_ease-out]"
                >
                  <Image
                    src={images[selectedImage]}
                    alt={deal.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 55vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* =========================
                  THUMBNAILS
              ========================= */}

              {hasMultipleImages && (
                <div className="flex flex-col gap-4">
                  {images.map((image, index) => (
                    <button
                      key={`${deal.id}-${image}-${index}`}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`View image ${index + 1}`}
                      className={`group relative aspect-square w-full overflow-hidden rounded-2xl bg-white transition-all duration-500 ${
                        selectedImage === index
                          ? "scale-[1.03] border-2 border-[#c9a227] shadow-[0_10px_30px_rgba(201,162,39,0.18)]"
                          : "border border-[#16302a]/10 opacity-70 hover:scale-[1.03] hover:border-[#16302a]/30 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${deal.title} image ${index + 1}`}
                        fill
                        sizes="120px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          selectedImage === index
                            ? "bg-[#16302a]/5"
                            : "bg-[#16302a]/10 group-hover:bg-transparent"
                        }`}
                      />

                      {selectedImage === index && (
                        <div className="absolute bottom-2 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-[#c9a227] text-[9px] font-bold text-[#16302a] shadow-md">
                          {index + 1}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* =========================
                DETAILS SECTION
            ========================= */}

            <div
              style={{
                animation: "fadeUp 0.8s ease-out 150ms both",
              }}
            >
              {/* COLLECTION LABEL */}

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c9a227]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#927d42]">
                  Jhumka Collection
                </p>

                <span className="h-px w-8 bg-[#c9a227]" />
              </div>

              {/* TITLE */}

              <h1 className="max-w-[650px] font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-[#16302a] sm:text-5xl lg:text-[54px]">
                {deal.title}
              </h1>

              {/* SUBTITLE */}

              {deal.subtitle && (
                <p className="mt-4 max-w-xl text-base font-medium leading-7 text-[#927d42] sm:text-lg">
                  {deal.subtitle}
                </p>
              )}

              {/* CATEGORY / GENDER */}

              {/* <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#16302a]/10 bg-white px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#16302a]">
                  {deal.category}
                </span>

                <span className="rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#927d42]">
                  {deal.gender}
                </span>

                <span className="rounded-full bg-[#16302a] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
                  Jhumka Box
                </span>
              </div> */}

              {/* DIVIDER */}

              <div className="my-7 h-px bg-[#16302a]/10" />

              {/* PRICE */}

              <div className="flex flex-wrap items-center gap-4">
                <span className="text-3xl font-bold text-[#16302a] sm:text-4xl">
                  Rs. {deal.price.toLocaleString()}
                </span>

                <span className="text-lg text-[#999] line-through">
                  Rs. {deal.oldPrice.toLocaleString()}
                </span>

                <span className="rounded-full bg-[#16302a] px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                  {deal.discount}
                </span>
              </div>

              {/* SAVING */}

              {saving > 0 && (
                <p className="mt-2 text-sm font-medium text-[#a1811c]">
                  Save Rs. {saving.toLocaleString()}
                </p>
              )}

              {/* DESCRIPTION */}

              <div className="mt-7 rounded-2xl border border-[#16302a]/5 bg-white/70 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c9a227]/15 text-lg text-[#a1811c]">
                    ✦
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#927d42]">
                      About This Jhumka Box
                    </p>

                    <p className="mt-2 text-sm leading-7 text-[#6d685b]">
                      A beautifully curated jhumka box designed to add a
                      traditional and elegant touch to your special moments.
                      Thoughtfully packed and perfect for gifting.
                    </p>
                  </div>
                </div>
              </div>

              {/* INFO CARDS */}

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="group rounded-2xl border border-[#16302a]/8 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(22,48,42,0.07)]">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#16302a]/5 text-[#16302a]">
                    ♡
                  </div>

                  <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#927d42]">
                    Collection
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#16302a]">
                    Jhumka Box
                  </p>
                </div>

                <div className="group rounded-2xl border border-[#16302a]/8 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(22,48,42,0.07)]">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#c9a227]/10 text-[#a1811c]">
                    ✦
                  </div>

                  <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#927d42]">
                    Style
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#16302a]">
                    Traditional & Elegant
                  </p>
                </div>
              </div>

              {/* ADD TO CART */}

              <button
                onClick={handleAddToCart}
                className="group mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#16302a] py-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-[0_15px_35px_rgba(22,48,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#c9a227] hover:text-[#16302a] hover:shadow-[0_18px_40px_rgba(201,162,39,0.20)]"
              >
                Add To Cart
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              {/* EXTRA FEATURES */}

              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-[#16302a]/5 bg-white px-2 py-4 text-center">
                  <div className="text-base text-[#c9a227]">✦</div>

                  <p className="mt-2 text-[7px] font-bold uppercase tracking-[0.15em] text-[#777263]">
                    Premium
                  </p>

                  <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#16302a]">
                    Packaging
                  </p>
                </div>

                <div className="rounded-xl border border-[#16302a]/5 bg-white px-2 py-4 text-center">
                  <div className="text-base text-[#c9a227]">♡</div>

                  <p className="mt-2 text-[7px] font-bold uppercase tracking-[0.15em] text-[#777263]">
                    Perfect
                  </p>

                  <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#16302a]">
                    Gift
                  </p>
                </div>

                <div className="rounded-xl border border-[#16302a]/5 bg-white px-2 py-4 text-center">
                  <div className="text-base text-[#c9a227]">✓</div>

                  <p className="mt-2 text-[7px] font-bold uppercase tracking-[0.15em] text-[#777263]">
                    Carefully
                  </p>

                  <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#16302a]">
                    Curated
                  </p>
                </div>
              </div>

              {/* FOOT NOTE */}

              <div className="mt-5 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[#777263]">
                <span className="text-[#c9a227]">✦</span>
                Premium Packaging
                <span className="text-[#c9a227]">•</span>
                Carefully Curated
                <span className="text-[#c9a227]">•</span>
                Jhumka Collection
              </div>
            </div>
          </div>

          {/* =========================
              BOTTOM DECORATIVE LINE
          ========================= */}

          <div className="mt-16 flex items-center justify-center gap-4 lg:mt-24">
            <span className="h-px w-16 bg-[#c9a227]/30" />

            <span className="text-xs text-[#c9a227]">✦</span>

            <span className="h-px w-16 bg-[#c9a227]/30" />
          </div>
        </div>

        {/* =========================
            BOTTOM CTA
        ========================= */}

        <section className="px-5 pb-16 pt-4 sm:px-8 lg:pb-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#16302a] px-6 py-14 text-center text-white sm:px-12 lg:py-16">
            {/* DECORATIONS */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10 animate-[spin_30s_linear_infinite]" />

            <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-[#c9a227]/15" />

            <div className="relative z-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#d7b438]">
                Timeless Elegance
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Find Your Perfect
                <br />
                <span className="italic text-[#d7b438]">Jhumka Box.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">
                Explore our beautiful collection of traditional jhumka boxes,
                thoughtfully packed for every special occasion.
              </p>

              <button
                onClick={() => router.push("/Jhumka")}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#16302a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d7b438]"
              >
                Explore Jhumka Collection
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* =========================
            ANIMATIONS
        ========================= */}

        <style jsx global>{`
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

          @keyframes imageFade {
            from {
              opacity: 0;
              transform: scale(1.03);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
