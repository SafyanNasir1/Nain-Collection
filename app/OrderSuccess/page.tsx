"use client";

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/app/Components/Navbar/navbar";
import Footer from "@/app/Components/Footer/Footer";

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type OrderData = {
  customer: {
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
  };

  items: CartItem[];

  paymentMethod: "easypaisa" | "jazzcash" | "card";

  subtotal: number;
  total: number;

  paymentStatus: string;
  orderStatus: string;

  orderDate: string;
  orderId: string;
};

function OrderSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [order, setOrder] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const orderId = searchParams.get("id");

    if (!orderId) {
      setLoading(false);
      return;
    }

    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orders/${orderId}`);
        const data = await response.json();

        if (!response.ok) {
          console.error(data.message);
          setOrder(null);
          return;
        }

        setOrder(data.order);
      } catch (error) {
        console.error("Fetch order error:", error);
        setOrder(null);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [searchParams]);

  const getPaymentName = () => {
    if (!order) return "";

    if (order.paymentMethod === "easypaisa") {
      return "Easypaisa";
    }

    if (order.paymentMethod === "jazzcash") {
      return "JazzCash";
    }

    return "Visa / Mastercard";
  };

  const sendToWhatsApp = () => {
    if (!order) return;

    const whatsappNumber = "923054489802";

    const message = `Hello Nain Collection,

I have placed an order.

Order ID: ${order.orderId}

Payment Method: ${getPaymentName()}
Total Amount: Rs. ${order.total.toLocaleString()}

I have completed the payment and I am sending my payment screenshot for verification.

Thank you.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-[#f8f5ed] px-5 py-20">
          <div className="mx-auto flex min-h-[60vh] max-w-xl items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-[#e5dfd0] border-t-[#c9a227]" />

              <p className="mt-6 text-sm text-[#777263]">
                Loading your order...
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  if (!order) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-[#f8f5ed] px-5 py-20">
          <div className="mx-auto flex min-h-[60vh] max-w-xl items-center justify-center">
            <div className="w-full rounded-3xl border border-[#e5dfd0] bg-white p-10 text-center shadow-[0_20px_60px_rgba(22,48,42,0.06)]">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f8f5ed] text-3xl">
                🛍
              </div>

              <h1 className="mt-6 font-serif text-3xl text-[#16302a]">
                No Order Found
              </h1>

              <p className="mt-3 text-sm leading-7 text-[#777263]">
                We could not find your order. Please try again or continue
                shopping.
              </p>

              <button
                onClick={() => router.push("/Deals")}
                className="mt-8 rounded-xl bg-[#16302a] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#c9a227] hover:text-[#16302a]"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f5ed] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          {/* SUCCESS */}
          <div className="text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#c9a227] bg-white shadow-[0_15px_40px_rgba(22,48,42,0.08)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#16302a] text-2xl text-white">
                ✓
              </div>
            </div>

            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a227]">
              Thank You For Shopping With Us
            </p>

            <h1 className="mt-3 font-serif text-4xl text-[#16302a] sm:text-5xl">
              Order Placed Successfully
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#777263]">
              Your order has been received successfully. Please complete your
              payment and send the payment screenshot to us on WhatsApp.
            </p>
          </div>

          {/* ORDER ID */}
          <div className="mt-12 rounded-3xl border border-[#e5dfd0] bg-white p-7 text-center shadow-[0_20px_60px_rgba(22,48,42,0.06)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a227]">
              Your Order ID
            </p>

            <h2 className="mt-3 break-all font-serif text-2xl text-[#16302a] sm:text-3xl">
              {order.orderId}
            </h2>

            <p className="mt-3 text-xs text-[#777263]">
              Keep this Order ID for future reference.
            </p>
          </div>

          {/* PAYMENT SCREENSHOT */}
          <div className="mt-8 rounded-3xl border border-[#e5dfd0] bg-white p-7 shadow-[0_20px_60px_rgba(22,48,42,0.06)] sm:p-9">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f8f5ed] text-2xl">
                📱
              </div>

              <h2 className="mt-5 font-serif text-3xl text-[#16302a]">
                Complete Your Payment
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#777263]">
                Please complete your payment using your selected payment method.
                After payment, take a screenshot of the transaction and send it
                to us on WhatsApp for verification.
              </p>
            </div>

            {/* PAYMENT DETAILS */}
            <div className="mx-auto mt-8 max-w-lg rounded-2xl bg-[#f8f5ed] p-5">
              <div className="flex items-center justify-between border-b border-[#e5dfd0] pb-4">
                <span className="text-xs uppercase tracking-[0.15em] text-[#777263]">
                  Payment Method
                </span>

                <span className="text-sm font-semibold text-[#16302a]">
                  {getPaymentName()}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="text-xs uppercase tracking-[0.15em] text-[#777263]">
                  Amount To Pay
                </span>

                <span className="font-serif text-xl text-[#c9a227]">
                  Rs. {order.total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* PAYMENT STATUS */}
            <div className="mx-auto mt-6 max-w-lg rounded-2xl border border-[#e5dfd0] bg-white p-5 text-center">
              <div className="text-2xl">⏳</div>

              <p className="mt-2 text-sm font-semibold text-[#16302a]">
                Payment Verification Pending
              </p>

              <p className="mt-2 text-xs leading-6 text-[#777263]">
                Your order will be confirmed after our team verifies your
                payment screenshot.
              </p>
            </div>

            {/* WHATSAPP BUTTON */}
            <div className="mt-8 text-center">
              <button
                onClick={sendToWhatsApp}
                className="group inline-flex w-full max-w-lg items-center justify-center gap-3 rounded-2xl bg-[#16302a] px-8 py-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-[0_15px_35px_rgba(22,48,42,0.15)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#c9a227] hover:text-[#16302a]"
              >
                <span className="text-xl">💬</span>
                Send Payment Screenshot On WhatsApp
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="mx-auto mt-4 max-w-md text-[11px] leading-5 text-[#777263]">
                WhatsApp will open with your Order ID, payment method and amount
                already filled in. Please attach your payment screenshot and
                press Send.
              </p>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="mt-8 rounded-3xl border border-[#e5dfd0] bg-white p-7 shadow-[0_20px_60px_rgba(22,48,42,0.06)] sm:p-9">
            <div className="mb-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a227]">
                Your Selection
              </p>

              <h2 className="mt-2 font-serif text-3xl text-[#16302a]">
                Order Summary
              </h2>
            </div>

            <div className="space-y-5">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-[#e5dfd0] pb-5"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#f8f5ed]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-lg text-[#16302a]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-[#777263]">
                      Quantity: {item.quantity}
                    </p>

                    <p className="mt-1 text-sm text-[#c9a227]">
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[#777263]">Subtotal</span>

                <span className="text-[#16302a]">
                  Rs. {order.subtotal.toLocaleString()}
                </span>
              </div>

              <div className="h-px bg-[#e5dfd0]" />

              <div className="flex justify-between">
                <span className="font-semibold uppercase tracking-[0.15em] text-[#16302a]">
                  Total
                </span>

                <span className="font-serif text-2xl text-[#c9a227]">
                  Rs. {order.total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* CONTINUE SHOPPING */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => router.push("/Deals")}
              className="rounded-2xl border border-[#16302a] bg-transparent px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#16302a] transition-all duration-300 hover:bg-[#16302a] hover:text-white"
            >
              Continue Shopping
            </button>
          </div>

          {/* FOOTER TEXT */}
          <div className="mt-10 pb-5 text-center">
            <div className="mx-auto h-px w-16 bg-[#c9a227]" />

            <p className="mt-5 text-[9px] uppercase tracking-[0.2em] text-[#777263]">
              Nain Collection • Thank You For Your Order
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <>
          <Navbar />

          <main className="min-h-screen bg-[#f8f5ed] px-5 py-20">
            <div className="mx-auto flex min-h-[60vh] max-w-xl items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-[#e5dfd0] border-t-[#c9a227]" />

                <p className="mt-6 text-sm text-[#777263]">
                  Loading your order...
                </p>
              </div>
            </div>
          </main>

          <Footer />
        </>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}