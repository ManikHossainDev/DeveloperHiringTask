/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";

import logo from '@/assets/logo/logo.png'

// react-icons
import { FiSearch, FiUser, FiMenu, FiX,} from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";
import Image from "next/image";

// ── Dropdown data
const menLinks = [
  { href: "/men/sneakers", label: "Sneakers" },
  { href: "/men/boots", label: "Boots" },
  { href: "/men/sandals", label: "Sandals" },
  { href: "/men/apparel", label: "Apparel" },
];

const womenLinks = [
  { href: "/women/sneakers", label: "Sneakers" },
  { href: "/women/boots", label: "Boots" },
  { href: "/women/sandals", label: "Sandals" },
  { href: "/women/apparel", label: "Apparel" },
];

// ── NavDropdown (arrow function component) 
const NavDropdown = ({ label, links }: { label: string; links: Array<{ href: string; label: string }> }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger button */}
      <button className="flex items-center gap-1 text-[15px] font-semibold text-[#1a1a1a] hover:opacity-60 transition-opacity duration-150 cursor-pointer select-none bg-transparent border-none outline-none">
        {label}
        <IoChevronDownOutline
          size={15}
          className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-40 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] py-1.5 z-50 transition-all duration-150 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1.5 pointer-events-none"
        }`}
      >
        {links.map((l:any) => (
          <Link
            key={l.href}
            href={l.href}
            className="block px-5 py-2.5 text-[14.5px] font-semibold text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors duration-100"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

// ── Main Navbar (arrow function component) 
const Navbar = ({ cartCount = 0, user = null }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setDrawerOpen(false);
    router.push("/login");
  };

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <nav>
        <div className="xl:container mx-auto bg-white rounded-md px-6 h-16 flex items-center justify-between gap-6">

          {/* LEFT: nav links */}
          <div className="hidden md:flex items-center gap-6 flex-1">
            <Link
              href="/new-drops"
              className="flex items-center gap-1 text-[15px] font-semibold text-[#1a1a1a] hover:opacity-60 transition-opacity duration-150 whitespace-nowrap"
            >
              New Drops
              <span className="text-[13px]">🔥</span>
            </Link>

            <NavDropdown label="Men" links={menLinks} />
            <NavDropdown label="Women" links={womenLinks} />
          </div>

          {/* LOGO */}
          <Link
            href="/"
            className="text-[30px] text-[#1a1a1a] tracking-widest flex-shrink-0 hover:opacity-70 transition-opacity duration-150 leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <Image width={100} height={100} src={logo} alt="image" />
          </Link>

          {/* RIGHT: icons */}
          <div className="flex items-center gap-1 flex-1 justify-end">

            {/* Search */}
            <button
              aria-label="Search"
              className="w-10 h-10 flex items-center justify-center rounded-full text-[#1a1a1a] hover:bg-black/[0.07] transition-colors duration-150"
            >
              <FiSearch size={22} />
            </button>

            {/* Account */}
            <button
              aria-label="Account"
              onClick={() => user ? router.push("/profile") : router.push("/login")}
              className="w-10 h-10 flex items-center justify-center rounded-full text-[#1a1a1a] hover:bg-black/[0.07] transition-colors duration-150"
            >
              <FiUser size={22} />
            </button>

            {/* Cart */}
            <button
              aria-label={`Cart (${cartCount})`}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f5a623] text-[#1a1a1a] text-[13px] font-bold hover:bg-[#e09610] hover:scale-105 transition-all duration-150"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              {cartCount}
            </button>

            {/* Mobile menu button */}
            <button
              aria-label="Open menu"
              onClick={openDrawer}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-[#1a1a1a] hover:bg-black/[0.07] transition-colors duration-150 ml-1"
            >
              <FiMenu size={24} />
            </button>
          </div>

        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 bg-black/30 z-[199] transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 bg-[#eeebe5] z-[200] flex flex-col gap-6 p-6 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between">
          <span
            className="text-[26px] text-[#1a1a1a] tracking-widest leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            KICKS
          </span>
          <button
            onClick={closeDrawer}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/[0.07] transition-colors duration-150"
          >
            <FiX size={23} />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex flex-col">
          {[
            { href: "/new-drops", label: "New Drops 🔥" },
            { href: "/men", label: "Men" },
            { href: "/women", label: "Women" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeDrawer}
              className="py-3.5 text-[16px] font-semibold text-[#1a1a1a] border-b border-black/[0.08] hover:opacity-60 transition-opacity duration-150"
            >
              {l.label}
            </Link>
          ))}

          {user ? (
            <button
              onClick={handleLogout}
              className="py-3.5 text-left text-[16px] font-semibold text-red-500 border-b border-black/[0.08] hover:opacity-70 transition-opacity duration-150"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                onClick={closeDrawer}
                className="py-3.5 text-[16px] font-semibold text-[#1a1a1a] border-b border-black/[0.08] hover:opacity-60 transition-opacity duration-150"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={closeDrawer}
                className="py-3.5 text-[16px] font-semibold text-[#1a1a1a] border-b border-black/[0.08] hover:opacity-60 transition-opacity duration-150"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;