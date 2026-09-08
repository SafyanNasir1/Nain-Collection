"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { deals } from "@/data/deals";
import Navbar from "@/app/Components/Navbar/navbar";
import Footer from "@/app/Components/Footer/Footer";

export default function DealDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const deal = deals.find((item) => item.id === Number(params.id));

  const [selectedImage, setSelectedImage] = useState(0);

  // const handleAddToCart = () => {
  //   if (!deal) return;

  //   const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

  //   const existingItem = existingCart.find((item: any) => item.id === deal.id);

  //   let updatedCart;

  //   if (existingItem) {
  //     updatedCart = existingCart.map((item: any) =>
  //       item.id === deal.id
  //         ? {
  //             ...item,
  //             quantity: item.quantity + 1,
  //           }
  //         : item,
  //     );
  //   } else {
  //     updatedCart = [
  //       ...existingCart,
  //       {
  //         id: deal.id,
  //         title: deal.title,
  //         price: deal.price,
  //         image: deal.image,
  //         quantity: 1,
  //       },
  //     ];
  //   }

  //   localStorage.setItem("cart", JSON.stringify(updatedCart));

  //   window.dispatchEvent(new Event("cartUpdated"));

  //   router.push("/Cart");
  // };
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
            subtitle: deal.subtitle,
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
        image: deal.image,
        quantity: 1,
      },
    ];
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  window.dispatchEvent(new Event("cartUpdated"));

  router.push("/Cart");
};
  if (!deal) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-screen items-center justify-center bg-[#f8f5ed]">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a1811c]">
              Something went wrong
            </p>

            <h1 className="mt-3 font-serif text-4xl text-[#16302a]">
              Deal Not Found
            </h1>

            <button
              onClick={() => router.push("/Deals")}
              className="mt-7 rounded-full bg-[#16302a] px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#c9a227] hover:text-[#16302a]"
            >
              Back To Deals
            </button>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const hasMultipleImages = deal.images.length > 1;

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#f8f5ed] text-[#16302a]">
        {/* BACKGROUND DECORATION */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#c9a227]/5 blur-[110px]" />

          <div className="absolute -left-40 bottom-20 h-[450px] w-[450px] rounded-full bg-[#16302a]/5 blur-[120px]" />

          <div className="absolute right-[8%] top-[25%] h-40 w-40 rounded-full border border-[#c9a227]/10 animate-[spin_30s_linear_infinite]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
          {/* BACK BUTTON */}
          <button
            onClick={() => router.push("/Deals")}
            className="group mb-10 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#777263] transition-colors duration-300 hover:text-[#16302a]"
          >
            <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back To Deals
          </button>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
            {/* ================================================= */}
            {/* IMAGE SECTION */}
            {/* ================================================= */}

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
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-[#16302a]/8 bg-[#eeeade] shadow-[0_25px_70px_rgba(22,48,42,0.10)] sm:aspect-square lg:aspect-[4/5]">
                {/* DISCOUNT */}
                <div className="absolute left-5 top-5 z-20 rounded-full bg-[#16302a] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                  {deal.discount}
                </div>

                {/* IMAGE NUMBER */}
                {hasMultipleImages && (
                  <div className="absolute bottom-5 right-5 z-20 rounded-full border border-white/50 bg-white/75 px-3 py-2 text-[9px] font-semibold tracking-[0.15em] text-[#16302a] backdrop-blur-md">
                    {selectedImage + 1} / {deal.images.length}
                  </div>
                )}

                {/* FULL IMAGE - NO CROP */}
                {/* <div
                  key={deal.images[selectedImage]}
                  className="relative h-full w-full animate-[imageFade_0.45s_ease-out]"
                >
                  <Image
                    src={deal.images[selectedImage]}
                    alt={deal.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 55vw"
                    className="object-contain p-3"
                  />
                </div> */}
                <div
                  key={deal.images[selectedImage]}
                  className="relative h-full w-full animate-[imageFade_0.45s_ease-out]"
                >
                  <Image
                    src={deal.images[selectedImage]}
                    alt={deal.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 55vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* ================================================= */}
              {/* RIGHT THUMBNAILS — only when more than 1 image */}
              {/* ================================================= */}

              {hasMultipleImages && (
                <div className="flex flex-col gap-4">
                  {deal.images.map((image, index) => (
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
                      {/* <Image
                        src={image}
                        alt={`${deal.title} image ${index + 1}`}
                        fill
                        sizes="120px"
                        className="object-contain p-1 transition-transform duration-700 group-hover:scale-110"
                      /> */}
                      <Image
                        src={image}
                        alt={`${deal.title} image ${index + 1}`}
                        fill
                        sizes="120px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* OVERLAY */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          selectedImage === index
                            ? "bg-[#16302a]/5"
                            : "bg-[#16302a]/10 group-hover:bg-transparent"
                        }`}
                      />

                      {/* ACTIVE NUMBER */}
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

            {/* ================================================= */}
            {/* DETAILS SECTION */}
            {/* ================================================= */}

            <div
              style={{
                animation: "fadeUp 0.8s ease-out 150ms both",
              }}
            >
              {/* CATEGORY */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c9a227]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#927d42]">
                  {deal.category}
                </p>
              </div>

              {/* TITLE */}
              <h1 className="max-w-[650px] font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-[#16302a] sm:text-5xl lg:text-[52px]">
                {deal.title}
              </h1>
              {deal.subtitle && (
                <p className="mt-2 text-lg font-medium text-[#927d42]">
                  {deal.subtitle}
                </p>
              )}
              {/* GENDER */}
              <div className="mt-5 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c9a227]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#777263]">
                  Curated For {deal.gender}
                </p>
              </div>

              {/* DIVIDER */}
              <div className="my-7 h-px bg-[#16302a]/10" />

              {/* PRICE */}
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-3xl font-bold text-[#16302a]">
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
              <p className="mt-2 text-sm font-medium text-[#a1811c]">
                Save Rs. {(deal.oldPrice - deal.price).toLocaleString()}
              </p>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-xl text-sm leading-7 text-[#6d685b] sm:text-base">
                Make someone&apos;s special day even more memorable with this
                thoughtfully curated surprise. A beautiful gift experience
                designed for unforgettable moments.
              </p>

              {/* INFO */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="group rounded-2xl border border-[#16302a]/8 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(22,48,42,0.07)]">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#927d42]">
                    Category
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#16302a]">
                    {deal.category}
                  </p>
                </div>

                <div className="group rounded-2xl border border-[#16302a]/8 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(22,48,42,0.07)]">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#927d42]">
                    Collection
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#16302a]">
                    {deal.gender}
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

              {/* FOOT NOTE */}
              <div className="mt-5 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[#777263]">
                <span className="text-[#c9a227]">✦</span>
                Premium Packaging
                <span className="text-[#c9a227]">•</span>
                Carefully Curated
              </div>
            </div>
          </div>

          {/* BOTTOM DECORATIVE LINE */}
          <div className="mt-16 flex items-center justify-center gap-4 lg:mt-24">
            <span className="h-px w-16 bg-[#c9a227]/30" />

            <span className="text-xs text-[#c9a227]">✦</span>

            <span className="h-px w-16 bg-[#c9a227]/30" />
          </div>
        </div>

        {/* ANIMATIONS */}
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