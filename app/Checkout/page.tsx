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

type PaymentMethod = "easypaisa" | "card";


export default function CheckoutPage() {
  const router = useRouter();

  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("easypaisa");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
  });

  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Cart parse error:", error);
        setCart([]);
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const total = subtotal;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      router.push("/Deals");
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.city.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setIsPlacingOrder(true);

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          items: cart,
          subtotal,
          total,
          paymentMethod,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to place order");
        setIsPlacingOrder(false);
        return;
      }

      const orderId = data.order.id;

      const whatsappNumber = "923086484348";

      const paymentName =
        paymentMethod === "easypaisa" ? "Easypaisa" : "Visa / Mastercard";

    
      const productsMessage = cart
        .map(
          (item) =>
            `Product: ${item.title}\nSubtitle: ${item.subtitle || "N/A"}\nQuantity: ${item.quantity}\nPrice: Rs. ${item.price}\nDeal ID: ${item.id}\nLink: https://nain-collection.vercel.app/Deals/${item.id}`,
        )
        .join("\n\n");

      const whatsappMessage = `Hello Nain Collection,

I have placed a new order.

Order ID: ${orderId}

CUSTOMER DETAILS
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
City: ${formData.city}
Address: ${formData.address}

ORDER DETAILS
${productsMessage}

Subtotal: Rs. ${subtotal.toLocaleString()}
Total Amount: Rs. ${total.toLocaleString()}

PAYMENT
Payment Method: ${paymentName}
Payment Status: Pending

I will attach my payment screenshot with this message.

Thank you.`;

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage,
      )}`;

      localStorage.removeItem("cart");

      window.open(whatsappURL, "_blank");

      router.push(`/OrderSuccess?id=${orderId}`);
    } catch (error) {
      console.error("Place order error:", error);

      alert("Something went wrong. Please try again.");

      setIsPlacingOrder(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f5ed] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a227]">
              Complete Your Order
            </p>

            <h1 className="font-serif text-4xl text-[#16302a] sm:text-5xl">
              Checkout
            </h1>

            <div className="mx-auto mt-5 h-px w-16 bg-[#c9a227]" />
          </div>

          {cart.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-3xl border border-[#e5dfd0] bg-white px-6 py-20 text-center shadow-[0_20px_60px_rgba(22,48,42,0.06)]">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f8f5ed] text-3xl">
                🛍
              </div>

              <h2 className="font-serif text-3xl text-[#16302a]">
                Your Cart is Empty
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#777263]">
                Please add a deal before proceeding to checkout.
              </p>

              <button
                onClick={() => router.push("/Deals")}
                className="mt-8 rounded-xl bg-[#16302a] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#c9a227] hover:text-[#16302a]"
              >
                Explore Deals
              </button>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder}>
              <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
                {/* LEFT */}
                <div className="space-y-8">
                  {/* Customer Information */}
                  <section className="rounded-3xl border border-[#e5dfd0] bg-white p-6 shadow-[0_20px_60px_rgba(22,48,42,0.05)] sm:p-8">
                    <div className="mb-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a227]">
                        Delivery Details
                      </p>

                      <h2 className="mt-2 font-serif text-3xl text-[#16302a]">
                        Customer Information
                      </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777263]">
                          Full Name *
                        </label>

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="w-full rounded-xl border border-[#e5dfd0] bg-[#fdfcf8] px-4 py-4 text-sm text-[#16302a] outline-none transition focus:border-[#c9a227]"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777263]">
                          Phone Number *
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="03XX XXXXXXX"
                          required
                          className="w-full rounded-xl border border-[#e5dfd0] bg-[#fdfcf8] px-4 py-4 text-sm text-[#16302a] outline-none transition focus:border-[#c9a227]"
                        />
                      </div>

                      {/* Email */}
                      <div className="sm:col-span-2">
                        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777263]">
                          Email Address
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full rounded-xl border border-[#e5dfd0] bg-[#fdfcf8] px-4 py-4 text-sm text-[#16302a] outline-none transition focus:border-[#c9a227]"
                        />
                      </div>

                      {/* Address */}
                      <div className="sm:col-span-2">
                        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777263]">
                          Complete Address *
                        </label>

                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="House number, street, area..."
                          rows={4}
                          required
                          className="w-full resize-none rounded-xl border border-[#e5dfd0] bg-[#fdfcf8] px-4 py-4 text-sm text-[#16302a] outline-none transition focus:border-[#c9a227]"
                        />
                      </div>

                      {/* City */}
                      <div>
                        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777263]">
                          City *
                        </label>

                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Lahore"
                          required
                          className="w-full rounded-xl border border-[#e5dfd0] bg-[#fdfcf8] px-4 py-4 text-sm text-[#16302a] outline-none transition focus:border-[#c9a227]"
                        />
                      </div>
                    </div>
                  </section>

                  {/* Payment Methods */}
                  <section className="rounded-3xl border border-[#e5dfd0] bg-white p-6 shadow-[0_20px_60px_rgba(22,48,42,0.05)] sm:p-8">
                    <div className="mb-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a227]">
                        Secure Payment
                      </p>

                      <h2 className="mt-2 font-serif text-3xl text-[#16302a]">
                        Payment Method
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-[#777263]">
                        Choose your preferred payment method to complete your
                        order.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Easypaisa */}
                      <label
                        className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-5 transition-all ${
                          paymentMethod === "easypaisa"
                            ? "border-[#c9a227] bg-[#f8f5ed]"
                            : "border-[#e5dfd0] hover:border-[#c9a227]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "easypaisa"}
                          onChange={() => setPaymentMethod("easypaisa")}
                          className="h-4 w-4 accent-[#16302a]"
                        />

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#e5dfd0] bg-white">
                          <Image
                            src="/images/easypaisa.png"
                            alt="Easypaisa"
                            width={48}
                            height={48}
                            className="h-10 w-10 object-contain"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-serif text-xl text-[#16302a]">
                            Easypaisa
                          </h3>

                          <p className="mt-1 text-xs text-[#777263]">
                            Pay securely with Easypaisa
                          </p>

                          {paymentMethod === "easypaisa" && (
                            <div className="mt-3 rounded-xl border border-[#e5dfd0] bg-white px-3 py-2">
                              <p className="text-[10px] uppercase tracking-[0.15em] text-[#777263]">
                                Easypaisa Account
                              </p>

                              <p className="mt-1 text-sm font-semibold text-[#16302a]">
                                03086484348
                              </p>

                              <p className="mt-1 text-[11px] text-[#777263]">
                                Account Name: Nain Collection
                              </p>
                            </div>
                          )}
                        </div>
                      </label>

                      {/* Visa / Mastercard */}
                      {/* <label
                        className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-5 transition-all ${
                          paymentMethod === "card"
                            ? "border-[#c9a227] bg-[#f8f5ed]"
                            : "border-[#e5dfd0] hover:border-[#c9a227]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "card"}
                          onChange={() => setPaymentMethod("card")}
                          className="h-4 w-4 accent-[#16302a]"
                        />

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#e5dfd0] bg-white">
                          <Image
                            src="/images/visa.png"
                            alt="Visa"
                            width={48}
                            height={48}
                            className="h-8 w-10 object-contain"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-serif text-xl text-[#16302a]">
                            Visa / Mastercard
                          </h3>

                          <p className="mt-1 text-xs text-[#777263]">
                            Pay securely with your card
                          </p>
                        </div>

                        <div className="flex items-center gap-1">
                          <Image
                            src="/images/master.png"
                            alt="Mastercard"
                            width={42}
                            height={30}
                            className="h-7 w-9 object-contain"
                          />
                        </div>
                      </label> */}
                      {/* Visa / Mastercard */}
                      <label
                        className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-5 transition-all ${
                          paymentMethod === "card"
                            ? "border-[#c9a227] bg-[#f8f5ed]"
                            : "border-[#e5dfd0] hover:border-[#c9a227]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "card"}
                          onChange={() => setPaymentMethod("card")}
                          className="h-4 w-4 accent-[#16302a]"
                        />

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#e5dfd0] bg-white">
                          <Image
                            src="/images/visa.png"
                            alt="Visa"
                            width={48}
                            height={48}
                            className="h-8 w-10 object-contain"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-serif text-xl text-[#16302a]">
                            Visa / Mastercard
                          </h3>

                          <p className="mt-1 text-xs text-[#777263]">
                            Pay securely with Visa / Mastercard
                          </p>

                          {/* Meezan Bank Payment Details */}
                          {paymentMethod === "card" && (
                            <div className="mt-3 rounded-xl border border-[#e5dfd0] bg-white px-4 py-3">
                              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#777263]">
                                Bank Payment Details
                              </p>

                              <div className="mt-2 space-y-1">
                                <p className="text-sm font-semibold text-[#16302a]">
                                  Account No: 02560113392386
                                </p>

                                <p className="text-[11px] text-[#777263]">
                                  Account Name: Muhammad Hasnain
                                </p>

                                <p className="text-[11px] text-[#777263]">
                                  IBAN: PK77 MEZN 0002560113392386
                                </p>

                                <p className="text-[11px] font-semibold text-[#16302a]">
                                  Bank: Meezan Bank
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-1">
                          <Image
                            src="/images/master.png"
                            alt="Mastercard"
                            width={42}
                            height={30}
                            className="h-7 w-9 object-contain"
                          />
                        </div>
                      </label>
                    </div>

                    {/* WhatsApp Payment Instruction */}
                    <div className="mt-6 rounded-2xl border border-[#e5dfd0] bg-[#f8f5ed] p-5">
                      <div className="flex gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#16302a] text-sm text-white">
                          ✓
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-[#16302a]">
                            Payment Screenshot Required
                          </p>

                          <p className="mt-2 text-xs leading-6 text-[#777263]">
                            After completing your payment, please take a
                            screenshot of your payment receipt and send it to us
                            on WhatsApp for order confirmation.
                          </p>

                          <p className="mt-2 text-xs font-medium leading-6 text-[#16302a]">
                            Your order will be confirmed after payment
                            verification.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                {/* RIGHT SIDE */}
                <div className="h-fit lg:sticky lg:top-24">
                  <section className="rounded-3xl border border-[#e5dfd0] bg-white p-7 shadow-[0_20px_60px_rgba(22,48,42,0.07)]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a227]">
                      Your Selection
                    </p>

                    <h2 className="mt-3 font-serif text-3xl text-[#16302a]">
                      Order Summary
                    </h2>

                    <div className="my-7 h-px bg-[#e5dfd0]" />

                    {/* Products */}
                    <div className="space-y-5">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4">
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
                            <h3 className="font-serif text-lg leading-6 text-[#16302a]">
                              {item.title}
                            </h3>

                            <p className="mt-1 text-xs text-[#777263]">
                              Qty: {item.quantity}
                            </p>

                            <p className="mt-1 text-sm font-medium text-[#c9a227]">
                              Rs.{" "}
                              {(item.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="my-7 h-px bg-[#e5dfd0]" />

                    {/* Pricing */}
                    <div className="space-y-5">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#777263]">Subtotal</span>

                        <span className="font-medium text-[#16302a]">
                          Rs. {subtotal.toLocaleString()}
                        </span>
                      </div>

                      <div className="h-px bg-[#e5dfd0]" />

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#16302a]">
                          Total
                        </span>

                        <span className="font-serif text-2xl text-[#c9a227]">
                          Rs. {total.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Pay Full Amount */}
                    <div className="mt-6 rounded-2xl bg-[#f8f5ed] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#16302a]">
                          Amount To Pay
                        </span>

                        <span className="font-serif text-2xl text-[#c9a227]">
                          Rs. {total.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      disabled={isPlacingOrder}
                      className={`group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-[10px] font-semibold uppercase tracking-[0.25em] shadow-[0_15px_35px_rgba(22,48,42,0.12)] transition-all duration-500 ${
                        isPlacingOrder
                          ? "cursor-not-allowed bg-[#777263] text-white"
                          : "bg-[#16302a] text-white hover:-translate-y-1 hover:bg-[#c9a227] hover:text-[#16302a] hover:shadow-[0_18px_40px_rgba(201,162,39,0.20)]"
                      }`}
                    >
                      {isPlacingOrder ? "Placing Order..." : "Place Order"}

                      {!isPlacingOrder && (
                        <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      )}
                    </button>

                    <div className="mt-6 flex items-center justify-center gap-2 text-center">
                      <span className="h-px w-8 bg-[#c9a227]" />

                      <p className="text-[8px] uppercase tracking-[0.2em] text-[#777263]">
                        Secure Payment
                      </p>

                      <span className="h-px w-8 bg-[#c9a227]" />
                    </div>
                  </section>
                </div>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}