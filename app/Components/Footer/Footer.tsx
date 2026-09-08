"use client";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Deals", href: "/Deals" },
  { label: "Occasions", href: "/occasions" },
  { label: "Combos", href: "/combos" },
  { label: "Custom Deals", href: "/custom-deals" },
  { label: "Track Order", href: "/track-order" },
];
const infoLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#16302a] text-white">
      {" "}
      {/* Background Decoration */}{" "}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {" "}
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#c9a227]/10 blur-[120px]" />{" "}
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#c9a227]/5 blur-[110px]" />{" "}
        <div className="absolute right-[12%] top-[25%] h-1.5 w-1.5 rounded-full bg-[#d7b95d]/50" />{" "}
        <div className="absolute left-[18%] bottom-[30%] h-2 w-2 rounded-full bg-[#d7b95d]/30" />{" "}
        <div className="absolute -right-32 bottom-[-220px] h-[500px] w-[500px] rounded-full border border-[#c9a227]/10" />{" "}
      </div>{" "}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {" "}
        {/* ===================================================== */}{" "}
        {/* MAIN FOOTER */}{" "}
        {/* ===================================================== */}{" "}
        <div className="border-b border-white/10 py-14 md:py-16">
          {" "}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10">
            {" "}
            {/* ================= BRAND ================= */}{" "}
            <div>
              {" "}
              <a href="/" className="group inline-flex items-center">
                {" "}
                <Image
                  src="/images/logo.jpeg"
                  alt="The Nain Collection"
                  width={140}
                  height={140}
                  className="h-24 rounded-4xl w-24 object-contain transition-transform duration-500 group-hover:scale-105"
                />{" "}
              </a>{" "}
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
                {" "}
                Thoughtfully chosen cakes, flowers, gifts and beautiful
                surprises — delivered with love across Pakistan.{" "}
              </p>{" "}
              {/* Social Icons */}{" "}
              <div className="mt-7 flex items-center gap-3">
                {" "}
                {/* Facebook */}{" "}
                <a
                  href="https://www.facebook.com/sycoshafi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a227]/50 hover:bg-[#c9a227]"
                >
                  {" "}
                  <Image
                    src="/images/facebook-app-symbol.png"
                    alt="Facebook"
                    width={17}
                    height={17}
                    className="h-4 w-4 object-contain opacity-70 transition-opacity group-hover:opacity-100"
                  />{" "}
                </a>{" "}
                {/* Instagram */}{" "}
                <a
                  href="https://www.instagram.com/the_nain_collection/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a227]/50 hover:bg-[#c9a227]"
                >
                  {" "}
                  <Image
                    src="/images/instagram.png"
                    alt="Instagram"
                    width={17}
                    height={17}
                    className="h-4 w-4 object-contain opacity-70 transition-opacity group-hover:opacity-100"
                  />{" "}
                </a>{" "}
                {/* TikTok */}{" "}
                <a
                  href="https://www.tiktok.com/@the_nain_collection"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a227]/50 hover:bg-[#c9a227]"
                >
                  {" "}
                  <Image
                    src="/images/tik-tok.png"
                    alt="TikTok"
                    width={17}
                    height={17}
                    className="h-4 w-4 object-contain opacity-70 transition-opacity group-hover:opacity-100"
                  />{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            {/* ================= EXPLORE ================= */}{" "}
            <div>
              {" "}
              <FooterHeading title="Explore" />{" "}
              <ul className="space-y-3.5">
                {" "}
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    {" "}
                    <a
                      href={link.href}
                      className="group flex w-fit items-center gap-1.5 text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      {" "}
                      <span>{link.label}</span>{" "}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />{" "}
                    </a>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </div>{" "}
            {/* ================= INFORMATION ================= */}{" "}
            <div>
              {" "}
              <FooterHeading title="Information" />{" "}
              <ul className="space-y-3.5">
                {" "}
                {infoLinks.map((link) => (
                  <li key={link.href}>
                    {" "}
                    <a
                      href={link.href}
                      className="group flex w-fit items-center gap-1.5 text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      {" "}
                      <span>{link.label}</span>{" "}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />{" "}
                    </a>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </div>{" "}
            {/* ================= CONTACT ================= */}{" "}
            <div>
              {" "}
              <FooterHeading title="Contact" />{" "}
              <div className="space-y-5">
                {" "}
                {/* Phone */}{" "}
                <a
                  href="tel:03054489802"
                  className="group flex items-start gap-3"
                >
                  {" "}
                  <ContactIcon>
                    {" "}
                    <Phone className="h-4 w-4" />{" "}
                  </ContactIcon>{" "}
                  <div>
                    {" "}
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
                      {" "}
                      Call Us{" "}
                    </p>{" "}
                    <p className="mt-1 text-sm text-white/70 transition-colors group-hover:text-white">
                      {" "}
                      0308 6484348{" "}
                    </p>{" "}
                  </div>{" "}
                </a>{" "}
                {/* Email */}{" "}
                <a
                  href="mailto:info@thenaincollection.com"
                  className="group flex items-start gap-3"
                >
                  {" "}
                  <ContactIcon>
                    {" "}
                    <Mail className="h-4 w-4" />{" "}
                  </ContactIcon>{" "}
                  <div className="min-w-0">
                    {" "}
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
                      {" "}
                      Email{" "}
                    </p>{" "}
                    <p className="mt-1 break-all text-sm text-white/70 transition-colors group-hover:text-white">
                      {" "}
                      safyannasir68@gmail.com{" "}
                    </p>{" "}
                  </div>{" "}
                </a>{" "}
                {/* Location */}{" "}
                <div className="flex items-start gap-3">
                  {" "}
                  <ContactIcon>
                    {" "}
                    <MapPin className="h-4 w-4" />{" "}
                  </ContactIcon>{" "}
                  <div>
                    {" "}
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
                      {" "}
                      Delivery{" "}
                    </p>{" "}
                    <p className="mt-1 text-sm leading-6 text-white/70">
                      {" "}
                      All Major Cities Across Pakistan{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* ===================================================== */}{" "}
        {/* DELIVERY BANNER */}{" "}
        {/* ===================================================== */}{" "}
        <div className="border-b border-white/10 py-7">
          {" "}
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            {" "}
            <div className="flex items-center gap-3 text-center sm:text-left">
              {" "}
              <span className="text-[#c9a227]">✦</span>{" "}
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/45 sm:text-xs">
                {" "}
                Premium Gifts • Fresh Flowers • Beautiful Moments{" "}
              </span>{" "}
              <span className="text-[#c9a227]">✦</span>{" "}
            </div>{" "}
            <a
              href="/shop"
              className="group flex items-center gap-2 rounded-full border border-[#c9a227]/30 px-5 py-2.5 text-xs font-medium text-[#d7b95d] transition-all duration-300 hover:bg-[#c9a227] hover:text-[#16302a]"
            >
              {" "}
              Shop Collection{" "}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        {/* ===================================================== */}{" "}
        {/* COPYRIGHT */}{" "}
        {/* ===================================================== */}{" "}
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          {" "}
          <p className="text-[10px] tracking-wide text-white/35">
            {" "}
            © {new Date().getFullYear()} The Nain Collection. All rights
            reserved.{" "}
          </p>{" "}
          <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
            {" "}
            Made with love in Pakistan{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
/* ========================================================= */ /* FOOTER HEADING */ /* ========================================================= */ function FooterHeading({
  title,
}: {
  title: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      {" "}
      <span className="h-px w-7 bg-[#c9a227]" />{" "}
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d7b95d]">
        {" "}
        {title}{" "}
      </h3>{" "}
    </div>
  );
}
/* ========================================================= */ /* CONTACT ICON */ /* ========================================================= */ function ContactIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/5 text-[#d7b95d] transition-all duration-300 group-hover:bg-[#c9a227] group-hover:text-[#16302a]">
      {" "}
      {children}{" "}
    </span>
  );
}
