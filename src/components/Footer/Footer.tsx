"use client";
import fImage from '@/assets/logo/Logof.png'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaPlus,
} from "react-icons/fa6";



const CATEGORIES = [
  "Runners",
  "Sneakers",
  "Basketball",
  "Outdoor",
  "Golf",
  "Hiking",
];

const COMPANY = ["About", "Contact", "Blogs"];

const SOCIALS = [
  { icon: FaFacebookF, label: "Facebook",   href: "#" },
  { icon: FaInstagram, label: "Instagram",  href: "#" },
  { icon: FaXTwitter,  label: "Twitter / X", href: "#" },
  { icon: FaTiktok,    label: "TikTok",     href: "#" },
];


const Logo = () => (
  <span
    className="text-white font-black uppercase leading-none select-none tracking-tight"
    style={{
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "clamp(2rem, 5vw, 2.8rem)",
    }}
  >
    KICKS
    <FaPlus className="inline-block w-3.5 h-3.5 rounded-full text-red-500 relative -top-3 left-0.5" />
  </span>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h3
    className="text-orange-500 uppercase font-bold text-sm tracking-widest mb-4"
    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
  >
    {children}
  </h3>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="text-white text-sm hover:text-white hover:pl-1 transition-all duration-200 inline-block"
    >
      {children}
    </Link>
  </li>
);

const SocialButton = ({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
}) => (
  <Link
    href={href}
    aria-label={label}
    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.07] text-white
               hover:bg-[#4B6BFF] hover:text-white hover:scale-110 transition-all duration-200"
  >
    <Icon size={15} />
  </Link>
);


const NewsletterForm = () => {
  const [email, setEmail]       = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]       = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-white text-sm font-semibold bg-white/10 rounded-lg px-4 py-3">
        <span className="text-lg">🎉</span>
        <span>You&apos;re in! Check your inbox.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex w-full space-x-1">
        <input
          type="email"
          required
          value={email}
          onChange={handleChange}
          placeholder="Email address"
          className="flex-1 min-w-0 px-4 py-2.5 text-sm bg-white/15 text-white
                     placeholder-white/50 border border-white/30 rounded-lg outline-none
                     focus:border-white/80 focus:bg-white/20 transition-all duration-200"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-widest
                     rounded-lg hover:bg-orange-500 active:scale-95 transition-all duration-200 whitespace-nowrap"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Submit
        </button>
      </div>
      {error && <p className="text-red-300 text-xs mt-1.5">{error}</p>}
    </form>
  );
};


const AboutCol = () => (
  <div className="col-span-2 sm:col-span-1">
    <SectionHeading>About us</SectionHeading>
    <p className="text-white text-sm leading-relaxed max-w-[210px]">
      We are the biggest hyperstore in the universe. We got you all cover with
      our exclusive collections and latest drops.
    </p>
  </div>
);

const CategoriesCol = () => (
  <div>
    <SectionHeading>Categories</SectionHeading>
    <ul className="space-y-2">
      {CATEGORIES.map((cat) => (
        <FooterLink key={cat} href="#">
          {cat}
        </FooterLink>
      ))}
    </ul>
  </div>
);

const CompanyCol = () => (
  <div>
    <SectionHeading>Company</SectionHeading>
    <ul className="space-y-2">
      {COMPANY.map((item) => (
        <FooterLink key={item} href="#">
          {item}
        </FooterLink>
      ))}
    </ul>
  </div>
);

const SocialsCol = () => (
  <div>
    <SectionHeading>Follow us</SectionHeading>
    <div className="flex gap-2.5 flex-wrap">
      {SOCIALS.map((s) => (
        <SocialButton key={s.label} {...s} />
      ))}
    </div>
  </div>
);



const Footer = () => {
  return (
    <>
      <footer className="w-full xl:container">
        {/* ── Newsletter Band ── */}
        <div className="bg-[#4B6BFF] px-2 md:px-4  py-8 sm:py-10 md:py-14 mb-10 xl:mb-16 rounded-t-2xl">
          <div className="xl:container mx-auto flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10">

            {/* Headline */}
            <div className="flex-shrink-0">
              <h2
                className="text-white font-black uppercase xl:text-3xl leading-tight tracking-wide"
              >
                Join our KicksPlus <br /> Club &amp; Get 15% Off
              </h2>
              <p className="text-white/70 text-sm mt-1.5 mb-5">
                Sign up for free! Join the community.
              </p>
               <div className="w-full lg:w-[340px]">
                <NewsletterForm />
              </div>
            </div>

            {/* Logo + Form */}
            <div className="flex flex-col items-start mb-5 md:mb-0 lg:items-end gap-3 w-full lg:w-auto">
              <Logo />
            </div>

          </div>
        </div>

        {/* ── Footer Body ── */}
        <div className="bg-[#111111] px-4  pt-10 rounded-2xl -mt-20">
          <div className="xl:container mx-auto">

            {/* Responsive grid:
                mobile  → 2 cols
                tablet  → 2 cols
                desktop → 4 cols  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 pb-10">
              <AboutCol />
              <CategoriesCol />
              <CompanyCol />
              <SocialsCol />
            </div>

           <div className='w-full flex justify-center'>
             <Image className='w-full' width={500} height={500} src={fImage} alt="manik" />
           </div>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div className=" text-black  text-center py-3.5">
          <p className=" text-xs tracking-wide">
            © All rights reserved
          </p>
        </div>

      </footer>
    </>
  );
};

export default Footer;