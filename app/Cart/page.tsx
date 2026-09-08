"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/Components/Navbar/navbar";
import Footer from "@/app/Components/Footer/Footer";

type CartItem = {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadCart = () => {
      const savedCart = localStorage.getItem("cart");

      if (savedCart) {
        setCart(JSON.parse(savedCart));
      } else {
        setCart([]);
      }
    };

    loadCart();

    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, []);

  const updateQuantity = (id: number, change: number) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + change,
            }
          : item,
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // const delivery = cart.length > 0 ? 200 : 0;

  // const total = subtotal + delivery;
const total = subtotal;
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f5ed] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a227]">
              Your Selection
            </p>

            <h1 className="font-serif text-4xl text-[#16302a] sm:text-5xl">
              Shopping Cart
            </h1>

            <div className="mx-auto mt-5 h-px w-16 bg-[#c9a227]" />
          </div>

          {/* Empty Cart */}
          {cart.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-3xl border border-[#e5dfd0] bg-white px-6 py-20 text-center shadow-[0_20px_60px_rgba(22,48,42,0.06)]">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f8f5ed] text-3xl">
                🛍
              </div>

              <h2 className="font-serif text-3xl text-[#16302a]">
                Your Cart is Empty
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#777263]">
                Looks like you haven't added anything to your cart yet.
              </p>

              <button
                onClick={() => router.push("/Deals")}
                className="mt-8 rounded-xl bg-[#16302a] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#c9a227] hover:text-[#16302a]"
              >
                Explore Deals
              </button>
            </div>
          ) : (
            /* Cart */
            <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
              {/* Cart Items */}
              <div className="space-y-5">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-3xl border border-[#e5dfd0] bg-white p-4 shadow-[0_15px_40px_rgba(22,48,42,0.05)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(22,48,42,0.09)] sm:p-5"
                  >
                    <div className="flex gap-5">
                      {/* Image */}
                      <div className="relative h-32 w-28 shrink-0 overflow-hidden rounded-2xl bg-[#f8f5ed] sm:h-36 sm:w-32">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                        <div>
                          <h2 className="font-serif text-xl text-[#16302a] sm:text-2xl">
                            {item.title}
                          </h2>
                          <p className="mt-2 text-sm leading-6 text-[#777263]">
                            {item.subtitle || "N/A"}
                          </p>
                          <p className="mt-2 text-sm font-medium text-[#c9a227]">
                            Rs. {item.price.toLocaleString()}
                          </p>
                        </div>

                        {/* Quantity */}
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="flex items-center overflow-hidden rounded-xl border border-[#e5dfd0]">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="flex h-9 w-9 items-center justify-center text-lg text-[#16302a] transition hover:bg-[#f8f5ed]"
                            >
                              −
                            </button>

                            <span className="flex h-9 min-w-10 items-center justify-center border-x border-[#e5dfd0] text-sm font-semibold text-[#16302a]">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="flex h-9 w-9 items-center justify-center text-lg text-[#16302a] transition hover:bg-[#f8f5ed]"
                            >
                              +
                            </button>
                          </div>

                          {/* Remove */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#927d42] transition hover:text-red-600"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="hidden text-right sm:block">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#777263]">
                          Total
                        </p>

                        <p className="mt-2 font-serif text-xl text-[#16302a]">
                          Rs. {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Continue Shopping */}
                <button
                  onClick={() => router.push("/Deals")}
                  className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#927d42] transition hover:text-[#16302a]"
                >
                  ← Continue Shopping
                </button>
              </div>

              {/* Order Summary */}
              <div className="h-fit rounded-3xl border border-[#e5dfd0] bg-white p-7 shadow-[0_20px_60px_rgba(22,48,42,0.07)] lg:sticky lg:top-24">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a227]">
                  Order Summary
                </p>

                <h2 className="mt-3 font-serif text-3xl text-[#16302a]">
                  Your Order
                </h2>

                <div className="my-7 h-px bg-[#e5dfd0]" />

                <div className="space-y-5">
                  {/* Subtotal */}
                  <div className="flex justify-between text-sm">
                    <span className="text-[#777263]">Subtotal</span>

                    <span className="font-medium text-[#16302a]">
                      Rs. {subtotal.toLocaleString()}
                    </span>
                  </div>

                  {/* Delivery */}
                  {/* <div className="flex justify-between text-sm">
                    <span className="text-[#777263]">Delivery</span>

                    <span className="font-medium text-[#16302a]">
                      Rs. {delivery.toLocaleString()}
                    </span>
                  </div> */}

                  <div className="h-px bg-[#e5dfd0]" />

                  {/* Total */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#16302a]">
                      Total
                    </span>

                    <span className="font-serif text-2xl text-[#c9a227]">
                      Rs. {total.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Checkout */}
                <button
                  onClick={() => router.push("/Checkout")}
                  className="group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#16302a] py-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-[0_15px_35px_rgba(22,48,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#c9a227] hover:text-[#16302a] hover:shadow-[0_18px_40px_rgba(201,162,39,0.20)]"
                >
                  Proceed To Checkout
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {/* Bottom Decoration */}
                <div className="mt-6 flex items-center justify-center gap-2 text-center">
                  <span className="h-px w-8 bg-[#c9a227]" />

                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#777263]">
                    Premium Packaging
                  </p>

                  <span className="h-px w-8 bg-[#c9a227]" />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}