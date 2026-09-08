// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const closeMenu = () => setIsMenuOpen(false);
//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);

//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isMenuOpen]);

//   const navLinks = [
//     { label: "Home", href: "/" },
//     { label: "Deals", href: "/Deals" },
//     { label: "Occasions", href: "/occasions" },
//     { label: "Combos", href: "/combos" },
//     { label: "Custom Deals", href: "/custom-deals" },
//     { label: "Track Order", href: "/track-order" },
//     { label: "About Us", href: "/about" },
//     { label: "Contact", href: "/contact" },
//   ];

//   return (
//     <>
//       {/* ================= TOP BAR ================= */}
//       <div className="relative z-[70] bg-[#16302a] text-[#e9e2d0]">
//         <div className="mx-auto flex min-h-[38px] max-w-[1700px] items-center justify-between px-4 sm:px-8 lg:px-14 xl:px-20">
//           {/* Phone */}
//           <a
//             href="tel:03054489802"
//             className="group flex items-center gap-2 text-[10px] font-medium tracking-[0.06em] text-white/80 transition-colors duration-300 hover:text-[#d7b95d] sm:text-xs"
//           >
//             <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#d7b95d]/20">
//               <Image
//                 src="/images/telephone.png"
//                 alt="Phone"
//                 width={14}
//                 height={14}
//                 className="h-3.5 w-3.5 object-contain"
//               />
//             </span>

//             <span className="sm:hidden">0308 64843482</span>
//             <span className="hidden sm:inline">0308 6484348</span>
//           </a>

//           {/* Delivery */}
//           <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/65 md:flex">
//             <span className="text-[#d7b95d]">✦</span>

//             <Image
//               src="/images/fast-delivery (1).png"
//               alt="Delivery"
//               width={18}
//               height={18}
//               className="h-[18px] w-[18px] object-contain opacity-80"
//             />

//             <span>Delivery All Over Pakistan</span>

//             <span className="text-[#d7b95d]">✦</span>
//           </div>

//           {/* Social */}
//           <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
//             <span className="mr-1 hidden text-[10px] uppercase tracking-[0.15em] text-white/45 lg:inline">
//               Follow Us
//             </span>

//             <SocialIcon
//               href="https://www.facebook.com/sycoshafi"
//               image="/images/facebook-app-symbol.png"
//               label="Facebook"
//             />

//             <SocialIcon
//               href="https://www.instagram.com/the_nain_collection/"
//               image="/images/instagram.png"
//               label="Instagram"
//             />

//             <SocialIcon
//               href="https://www.tiktok.com/@the_nain_collection"
//               image="/images/tik-tok.png"
//               label="TikTok"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ================= MAIN NAVBAR ================= */}
//       <header className="sticky top-0 z-[60] w-full border-b border-[#16302a]/5 bg-[#fdfcf8]/95 shadow-[0_4px_25px_rgba(22,48,42,0.04)] backdrop-blur-xl">
//         {/* Gold line */}
//         <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />

//         <div className="mx-auto flex h-[72px] max-w-[1700px] items-center justify-between px-4 sm:h-[78px] sm:px-8 lg:h-[82px] lg:px-12 xl:px-20">
//           {/* Logo */}
//           <Link
//             href="/"
//             onClick={closeMenu}
//             className="group relative flex shrink-0 items-center"
//           >
//             <div className="absolute -inset-3 rounded-full bg-[#c9a227]/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

//             <Image
//               src="/images/logo.png"
//               alt="The Nain Collection"
//               width={180}
//               height={180}
//               priority
//               className="relative h-[58px] w-[58px] object-contain transition-transform duration-500 group-hover:scale-105 sm:h-[68px] sm:w-[68px] md:h-[76px] md:w-[76px] lg:h-[82px] lg:w-[82px]"
//             />
//           </Link>

//           {/* ================= DESKTOP NAVIGATION ================= */}
//           <nav className="hidden lg:flex">
//             <ul className="flex items-center gap-1 xl:gap-2">
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;

//                 return (
//                   <li key={link.href}>
//                     <Link
//                       href={link.href}
//                       onClick={closeMenu}
//                       className={`group relative flex items-center px-3 py-3 text-[12px] font-medium tracking-[0.03em] transition-colors duration-300 xl:px-4 xl:text-[13px] ${
//                         isActive
//                           ? "text-[#16302a]"
//                           : "text-[#4d4b43] hover:text-[#16302a]"
//                       }`}
//                     >
//                       {link.label}

//                       <span
//                         className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#c9a227] transition-all duration-300 ${
//                           isActive ? "w-5" : "w-0 group-hover:w-5"
//                         }`}
//                       />
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>

//           {/* ================= DESKTOP ACTIONS ================= */}
//           <div className="hidden items-center gap-2 lg:flex">
//             <IconButton label="Search">
//               <SearchIcon />
//             </IconButton>

//             <IconButton label="Account">
//               <UserIcon />
//             </IconButton>

//             <div className="mx-1 h-6 w-px bg-[#16302a]/10" />

//             <CartButton />
//           </div>

//           {/* ================= MOBILE ACTIONS ================= */}
//           <div className="flex items-center gap-2 lg:hidden">
//             <CartButton mobile />

//             <button
//               type="button"
//               aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//               aria-expanded={isMenuOpen}
//               onClick={toggleMenu}
//               className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16302a] text-white shadow-[0_5px_18px_rgba(22,48,42,0.18)] transition-all duration-300 hover:bg-[#c9a227] hover:text-[#16302a] active:scale-95 sm:h-11 sm:w-11"
//             >
//               <HamburgerIcon isOpen={isMenuOpen} />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* ================= MOBILE MENU ================= */}
//       <div
//         className={`fixed inset-0 z-[100] lg:hidden ${
//           isMenuOpen
//             ? "pointer-events-auto visible"
//             : "pointer-events-none invisible"
//         }`}
//       >
//         {/* Overlay */}
//         <div
//           onClick={closeMenu}
//           className={`absolute inset-0 bg-[#10231f]/55 backdrop-blur-sm transition-opacity duration-500 ${
//             isMenuOpen ? "opacity-100" : "opacity-0"
//           }`}
//         />

//         {/* Drawer */}
//         <aside
//           className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[430px] flex-col bg-[#fdfcf8] shadow-[-20px_0_70px_rgba(22,48,42,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
//             isMenuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           {/* Drawer Header */}
//           <div className="flex items-center justify-between border-b border-[#16302a]/10 px-6 py-4">
//             <Link href="/" onClick={closeMenu}>
//               <Image
//                 src="/images/logo.png"
//                 alt="The Nain Collection"
//                 width={100}
//                 height={100}
//                 className="h-[62px] w-[62px] object-contain"
//               />
//             </Link>

//             <button
//               type="button"
//               onClick={closeMenu}
//               aria-label="Close Menu"
//               className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16302a] text-white transition-all duration-300 hover:rotate-90 hover:bg-[#c9a227] hover:text-[#16302a]"
//             >
//               <CloseIcon />
//             </button>
//           </div>

//           {/* Intro */}
//           <div className="px-6 pb-3 pt-7">
//             <div className="flex items-center gap-3">
//               <span className="h-px w-8 bg-[#c9a227]" />

//               <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#927d42]">
//                 The Nain Collection
//               </span>
//             </div>

//             <h2 className="mt-3 font-serif text-2xl italic text-[#16302a]">
//               Make every moment special.
//             </h2>
//           </div>

//           {/* Mobile Links */}
//           <nav className="flex-1 overflow-y-auto px-6 py-4">
//             <ul>
//               {navLinks.map((link, index) => {
//                 const isActive = pathname === link.href;

//                 return (
//                   <li key={link.href} className="border-b border-[#16302a]/8">
//                     <Link
//                       href={link.href}
//                       onClick={closeMenu}
//                       className={`group flex items-center justify-between py-[16px] text-[14px] transition-all duration-300 ${
//                         isActive
//                           ? "font-semibold text-[#16302a]"
//                           : "text-[#45443e] hover:pl-2 hover:text-[#16302a]"
//                       }`}
//                     >
//                       <div className="flex items-center gap-3">
//                         <span
//                           className={`text-[9px] tracking-widest ${
//                             isActive ? "text-[#c9a227]" : "text-[#aaa69b]"
//                           }`}
//                         >
//                           {String(index + 1).padStart(2, "0")}
//                         </span>

//                         {link.label}
//                       </div>

//                       <span
//                         className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${
//                           isActive
//                             ? "border-[#c9a227]/40 bg-[#c9a227]/10"
//                             : "border-[#16302a]/10 group-hover:border-[#c9a227]/40 group-hover:bg-[#c9a227]/10"
//                         }`}
//                       >
//                         <ChevronRightIcon />
//                       </span>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>

//           {/* Drawer Bottom */}
//           <div className="border-t border-[#16302a]/10 bg-[#f8f5ed] p-6">
//             <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#777263]">
//               <span className="h-px w-6 bg-[#c9a227]" />
//               Quick Access
//             </div>

//             <div className="flex gap-3">
//               <button
//                 type="button"
//                 className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#16302a]/15 bg-white py-3 text-xs font-medium text-[#16302a] transition-all duration-300 hover:bg-[#16302a] hover:text-white"
//               >
//                 <UserIcon />
//                 Account
//               </button>

//               <button
//                 type="button"
//                 className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#16302a] py-3 text-xs font-medium text-white transition-all duration-300 hover:bg-[#c9a227] hover:text-[#16302a]"
//               >
//                 <CartIcon />
//                 Cart
//               </button>
//             </div>

//             <p className="mt-5 text-center text-[9px] uppercase tracking-[0.2em] text-[#aaa69b]">
//               Premium Gifts • Fresh Flowers • Beautiful Moments
//             </p>
//           </div>
//         </aside>
//       </div>
//     </>
//   );
// }

// /* ================= SOCIAL ICON ================= */

// function SocialIcon({
//   href,
//   image,
//   label,
// }: {
//   href: string;
//   image: string;
//   label: string;
// }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label={label}
//       className="group flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9a227]"
//     >
//       <Image
//         src={image}
//         alt={label}
//         width={12}
//         height={12}
//         className="h-3 w-3 object-contain opacity-75 transition-opacity group-hover:opacity-100"
//       />
//     </a>
//   );
// }

// /* ================= ICON BUTTON ================= */

// function IconButton({
//   children,
//   label,
// }: {
//   children: React.ReactNode;
//   label: string;
// }) {
//   return (
//     <button
//       type="button"
//       aria-label={label}
//       className="flex h-11 w-11 items-center justify-center rounded-full border border-[#16302a]/10 bg-white/50 text-[#16302a] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a227]/40 hover:bg-[#16302a] hover:text-white hover:shadow-lg"
//     >
//       {children}
//     </button>
//   );
// }

// /* ================= CART ================= */
// function CartButton({ mobile = false }: { mobile?: boolean }) {
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     const updateCartCount = () => {
//       const cart = JSON.parse(localStorage.getItem("cart") || "[]");

//       // Total quantity
//       const totalItems = cart.reduce(
//         (total: number, item: CartItem) => total + item.quantity,
//         0,
//       );

//       setCartCount(totalItems);
//     };

//     updateCartCount();

//     window.addEventListener("cartUpdated", updateCartCount);

//     return () => {
//       window.removeEventListener("cartUpdated", updateCartCount);
//     };
//   }, []);

//   return (
//     <Link
//       href="/Cart"
//       aria-label="Cart"
//       className={`group relative flex items-center justify-center rounded-full border border-[#16302a]/10 bg-white/70 text-[#16302a] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a227]/40 hover:bg-[#16302a] hover:text-white hover:shadow-lg ${
//         mobile ? "h-10 w-10 sm:h-11 sm:w-11" : "h-11 w-11"
//       }`}
//     >
//       <CartIcon />

//       {cartCount > 0 && (
//         <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#fdfcf8] bg-[#c9a227] px-1 text-[9px] font-bold text-[#16302a]">
//           {cartCount}
//         </span>
//       )}
//     </Link>
//   );
// }
// /* ================= HAMBURGER ================= */

// function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
//   return (
//     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//       <line
//         x1="4"
//         y1="7"
//         x2="20"
//         y2="7"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         className="origin-center transition-all duration-300"
//         style={{
//           transform: isOpen ? "translateY(5px) rotate(45deg)" : "none",
//         }}
//       />

//       <line
//         x1="4"
//         y1="12"
//         x2="20"
//         y2="12"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         className="transition-opacity duration-200"
//         style={{
//           opacity: isOpen ? 0 : 1,
//         }}
//       />

//       <line
//         x1="4"
//         y1="17"
//         x2="20"
//         y2="17"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         className="origin-center transition-all duration-300"
//         style={{
//           transform: isOpen ? "translateY(-5px) rotate(-45deg)" : "none",
//         }}
//       />
//     </svg>
//   );
// }

// /* ================= CLOSE ================= */

// function CloseIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//       <path
//         d="M6 6L18 18M18 6L6 18"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// /* ================= SEARCH ================= */

// function SearchIcon() {
//   return (
//     <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
//       <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />

//       <line
//         x1="16"
//         y1="16"
//         x2="21"
//         y2="21"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// /* ================= USER ================= */

// function UserIcon() {
//   return (
//     <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
//       <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />

//       <path
//         d="M4.5 20c0-3.8 3.2-6 7.5-6s7.5 2.2 7.5 6"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// /* ================= CART ICON ================= */

// function CartIcon() {
//   return (
//     <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
//       <path
//         d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />

//       <circle cx="10" cy="21" r="1.2" fill="currentColor" />
//       <circle cx="17" cy="21" r="1.2" fill="currentColor" />
//     </svg>
//   );
// }

// /* ================= CHEVRON ================= */

// function ChevronRightIcon() {
//   return (
//     <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//       <path
//         d="M9 6l6 6-6 6"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

/* ================= CART ITEM TYPE ================= */

interface CartItem {
  quantity: number;
}

/* ================= NAVBAR ================= */

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Deals", href: "/Deals" },
    { label: "Occasions", href: "/occasions" },
    { label: "Combos", href: "/combos" },
    { label: "Custom Deals", href: "/custom-deals" },
    { label: "Track Order", href: "/track-order" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ================= TOP BAR ================= */}

      <div className="relative z-[70] bg-[#16302a] text-[#e9e2d0]">
        <div className="mx-auto flex min-h-[38px] max-w-[1700px] items-center justify-between px-4 sm:px-8 lg:px-14 xl:px-20">
          {/* Phone */}

          <a
            href="tel:03054489802"
            className="group flex items-center gap-2 text-[10px] font-medium tracking-[0.06em] text-white/80 transition-colors duration-300 hover:text-[#d7b95d] sm:text-xs"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#d7b95d]/20">
              <Image
                src="/images/telephone.png"
                alt="Phone"
                width={14}
                height={14}
                className="h-3.5 w-3.5 object-contain"
              />
            </span>

            <span className="sm:hidden">0308 64843482</span>
            <span className="hidden sm:inline">0308 6484348</span>
          </a>

          {/* Delivery */}

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/65 md:flex">
            <span className="text-[#d7b95d]">✦</span>

            <Image
              src="/images/fast-delivery (1).png"
              alt="Delivery"
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-contain opacity-80"
            />

            <span>Delivery All Over Pakistan</span>

            <span className="text-[#d7b95d]">✦</span>
          </div>

          {/* Social */}

          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            <span className="mr-1 hidden text-[10px] uppercase tracking-[0.15em] text-white/45 lg:inline">
              Follow Us
            </span>

            <SocialIcon
              href="https://www.facebook.com/sycoshafi"
              image="/images/facebook-app-symbol.png"
              label="Facebook"
            />

            <SocialIcon
              href="https://www.instagram.com/the_nain_collection/"
              image="/images/instagram.png"
              label="Instagram"
            />

            <SocialIcon
              href="https://www.tiktok.com/@the_nain_collection"
              image="/images/tik-tok.png"
              label="TikTok"
            />
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}

      <header className="sticky top-0 z-[60] w-full border-b border-[#16302a]/5 bg-[#fdfcf8]/95 shadow-[0_4px_25px_rgba(22,48,42,0.04)] backdrop-blur-xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />

        <div className="mx-auto flex h-[72px] max-w-[1700px] items-center justify-between px-4 sm:h-[78px] sm:px-8 lg:h-[82px] lg:px-12 xl:px-20">
          {/* Logo */}

          <Link
            href="/"
            onClick={closeMenu}
            className="group relative flex shrink-0 items-center"
          >
            <div className="absolute -inset-3 rounded-full bg-[#c9a227]/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            <Image
              src="/images/logo.png"
              alt="The Nain Collection"
              width={180}
              height={180}
              priority
              className="relative h-[58px] w-[58px] object-contain transition-transform duration-500 group-hover:scale-105 sm:h-[68px] sm:w-[68px] md:h-[76px] md:w-[76px] lg:h-[82px] lg:w-[82px]"
            />
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}

          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`group relative flex items-center px-3 py-3 text-[12px] font-medium tracking-[0.03em] transition-colors duration-300 xl:px-4 xl:text-[13px] ${
                        isActive
                          ? "text-[#16302a]"
                          : "text-[#4d4b43] hover:text-[#16302a]"
                      }`}
                    >
                      {link.label}

                      <span
                        className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#c9a227] transition-all duration-300 ${
                          isActive ? "w-5" : "w-0 group-hover:w-5"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ================= DESKTOP ACTIONS ================= */}

          <div className="hidden items-center gap-2 lg:flex">
            <IconButton label="Search">
              <SearchIcon />
            </IconButton>

            <IconButton label="Account">
              <UserIcon />
            </IconButton>

            <div className="mx-1 h-6 w-px bg-[#16302a]/10" />

            <CartButton />
          </div>

          {/* ================= MOBILE ACTIONS ================= */}

          <div className="flex items-center gap-2 lg:hidden">
            <CartButton mobile />

            <button
              type="button"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16302a] text-white shadow-[0_5px_18px_rgba(22,48,42,0.18)] transition-all duration-300 hover:bg-[#c9a227] hover:text-[#16302a] active:scale-95 sm:h-11 sm:w-11"
            >
              <HamburgerIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`fixed inset-0 z-[100] lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
      >
        {/* Overlay */}

        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-[#10231f]/55 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}

        <aside
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[430px] flex-col bg-[#fdfcf8] shadow-[-20px_0_70px_rgba(22,48,42,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}

          <div className="flex items-center justify-between border-b border-[#16302a]/10 px-6 py-4">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/images/logo.png"
                alt="The Nain Collection"
                width={100}
                height={100}
                className="h-[62px] w-[62px] object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close Menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16302a] text-white transition-all duration-300 hover:rotate-90 hover:bg-[#c9a227] hover:text-[#16302a]"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Intro */}

          <div className="px-6 pb-3 pt-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#c9a227]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#927d42]">
                The Nain Collection
              </span>
            </div>

            <h2 className="mt-3 font-serif text-2xl italic text-[#16302a]">
              Make every moment special.
            </h2>
          </div>

          {/* Mobile Links */}

          <nav className="flex-1 overflow-y-auto px-6 py-4">
            <ul>
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href} className="border-b border-[#16302a]/8">
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`group flex items-center justify-between py-[16px] text-[14px] transition-all duration-300 ${
                        isActive
                          ? "font-semibold text-[#16302a]"
                          : "text-[#45443e] hover:pl-2 hover:text-[#16302a]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-[9px] tracking-widest ${
                            isActive ? "text-[#c9a227]" : "text-[#aaa69b]"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {link.label}
                      </div>

                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "border-[#c9a227]/40 bg-[#c9a227]/10"
                            : "border-[#16302a]/10 group-hover:border-[#c9a227]/40 group-hover:bg-[#c9a227]/10"
                        }`}
                      >
                        <ChevronRightIcon />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Drawer Bottom */}

          <div className="border-t border-[#16302a]/10 bg-[#f8f5ed] p-6">
            <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#777263]">
              <span className="h-px w-6 bg-[#c9a227]" />
              Quick Access
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#16302a]/15 bg-white py-3 text-xs font-medium text-[#16302a] transition-all duration-300 hover:bg-[#16302a] hover:text-white"
              >
                <UserIcon />
                Account
              </button>

              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#16302a] py-3 text-xs font-medium text-white transition-all duration-300 hover:bg-[#c9a227] hover:text-[#16302a]"
              >
                <CartIcon />
                Cart
              </button>
            </div>

            <p className="mt-5 text-center text-[9px] uppercase tracking-[0.2em] text-[#aaa69b]">
              Premium Gifts • Fresh Flowers • Beautiful Moments
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}

/* ================= SOCIAL ICON ================= */

function SocialIcon({
  href,
  image,
  label,
}: {
  href: string;
  image: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9a227]"
    >
      <Image
        src={image}
        alt={label}
        width={12}
        height={12}
        className="h-3 w-3 object-contain opacity-75 transition-opacity group-hover:opacity-100"
      />
    </a>
  );
}

/* ================= ICON BUTTON ================= */

function IconButton({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#16302a]/10 bg-white/50 text-[#16302a] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a227]/40 hover:bg-[#16302a] hover:text-white hover:shadow-lg"
    >
      {children}
    </button>
  );
}

/* ================= CART ================= */

function CartButton({ mobile = false }: { mobile?: boolean }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      try {
        const storedCart = localStorage.getItem("cart");

        const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

        const totalItems = cart.reduce(
          (total, item) => total + Number(item.quantity || 0),
          0,
        );

        setCartCount(totalItems);
      } catch (error) {
        console.error("Error reading cart:", error);
        setCartCount(0);
      }
    };

    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <Link
      href="/Cart"
      aria-label="Cart"
      className={`group relative flex items-center justify-center rounded-full border border-[#16302a]/10 bg-white/70 text-[#16302a] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a227]/40 hover:bg-[#16302a] hover:text-white hover:shadow-lg ${
        mobile ? "h-10 w-10 sm:h-11 sm:w-11" : "h-11 w-11"
      }`}
    >
      <CartIcon />

      {cartCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#fdfcf8] bg-[#c9a227] px-1 text-[9px] font-bold text-[#16302a]">
          {cartCount}
        </span>
      )}
    </Link>
  );
}

/* ================= HAMBURGER ================= */

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <line
        x1="4"
        y1="7"
        x2="20"
        y2="7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className="origin-center transition-all duration-300"
        style={{
          transform: isOpen ? "translateY(5px) rotate(45deg)" : "none",
        }}
      />

      <line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className="transition-opacity duration-200"
        style={{
          opacity: isOpen ? 0 : 1,
        }}
      />

      <line
        x1="4"
        y1="17"
        x2="20"
        y2="17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className="origin-center transition-all duration-300"
        style={{
          transform: isOpen ? "translateY(-5px) rotate(-45deg)" : "none",
        }}
      />
    </svg>
  );
}

/* ================= CLOSE ================= */

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ================= SEARCH ================= */

function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />

      <line
        x1="16"
        y1="16"
        x2="21"
        y2="21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ================= USER ================= */

function UserIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />

      <path
        d="M4.5 20c0-3.8 3.2-6 7.5-6s7.5 2.2 7.5 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ================= CART ICON ================= */

function CartIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="10" cy="21" r="1.2" fill="currentColor" />
      <circle cx="17" cy="21" r="1.2" fill="currentColor" />
    </svg>
  );
}

/* ================= CHEVRON ================= */

function ChevronRightIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}