"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import classes from "./navbar.module.css";
import { usePathname } from "next/navigation";

const NavItem = ({
  href,
  text,
  onClick,
}: {
  href: string;
  text: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-white hover:text-green-800 px-3 py-2 rounded-md text-md font-medium font-serif"
  >
    {text}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <nav
      className="shadow-sm bg-regal-blue sticky top-0 z-40"
      /* bg-white bg-opacity-50 fixed top-0 left-0 right-0 z-40  */
    >
      <div className=" max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20  ">
          <div className="flex items-center">
            <div className="flex-shrink-0 ">
              <div className="flex flex-col items-center">
                {" "}
                <Link
                  style={{
                    fontFamily: "Cormorant_Garamond",
                    letterSpacing: "8px",
                  }}
                  href="/"
                  className="text-xl font-medium  text-white no-underline"
                >
                  ABATAY & İŞERİ
                </Link>
                <Link
                  style={{
                    fontFamily: "Cormorant_Garamond",
                    letterSpacing: "4px",
                  }}
                  href="/"
                  className="text-sm text-white tracking-wider no-underline"
                >
                  AVUKATLIK BÜROSU
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block font-serif">
            <div className="ml-10 text-white flex items-baseline space-x-8">
              <Link
                href="/hakkimizda"
                className={
                  path === "/hakkimizda" ? classes.highlight : undefined
                }
              >
                {" "}
                Hakkımızda
              </Link>
              <Link
                className={path === "/ekibimiz" ? classes.highlight : undefined}
                href="/ekibimiz"
              >
                Ekibimiz
              </Link>
              <Link
                className={
                  path === "/hizmetlerimiz" ? classes.highlight : undefined
                }
                href="/hizmetlerimiz"
              >
                Hizmetlerimiz
              </Link>
              <Link
                className={
                  path === "/yayinlarimiz" ? classes.highlight : undefined
                }
                href="/yayinlarimiz"
              >
                Yayınlarımız
              </Link>
              <Link
                href="/iletisim"
                className="bg-white text-green-950 hover:text-white hover:bg-green-900 px-8 py-1 rounded-md font-bold no-underline"
              >
                İletişim
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700 no-underline"
              aria-expanded="false"
            >
              <span className="sr-only ">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6 text-gray-300" aria-hidden="true" />
              ) : (
                <Menu
                  className="block h-6 w-6 text-gray-300"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem
              href="/hakkimizda"
              text="Hakkımızda"
              onClick={() => setIsOpen(false)}
            />
            <NavItem
              href="/ekibimiz"
              text="Ekibimiz"
              onClick={() => setIsOpen(false)}
            />
            <NavItem
              href="/hizmetlerimiz"
              text="Hizmetlerimiz"
              onClick={() => setIsOpen(false)}
            />
            <NavItem
              href="/yayinlarimiz"
              text="Yayınlarımız"
              onClick={() => setIsOpen(false)}
            />
            <Link
              href="/iletisim"
              className="font-serif bg-green-600 text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
