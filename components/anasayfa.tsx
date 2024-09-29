"use client";

import React from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import classes from "./navbar.module.css";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

const NavItem = ({
  href,
  text,
  onClick,
  className,
}: {
  href: string;
  text: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={`text-white hover:text-green-200 px-3 py-2 text-xl font-medium transition-all duration-300 ease-in-out ${className}`}
  >
    {text}
  </Link>
);

export default function Navbar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="shadow-sm bg-regal-blue sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex flex-col items-center">
                <Link
                  style={{
                    fontFamily: "Cormorant_Garamond",
                    letterSpacing: "8px",
                  }}
                  href="/"
                  className="text-xl font-medium text-white no-underline"
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
              <NavItem
                href="/hakkimizda"
                text="Hakkımızda"
                className={path === "/hakkimizda" ? classes.highlight : ""}
              />
              <NavItem
                href="/ekibimiz"
                text="Ekibimiz"
                className={path === "/ekibimiz" ? classes.highlight : ""}
              />
              <NavItem
                href="/hizmetlerimiz"
                text="Hizmetlerimiz"
                className={path === "/hizmetlerimiz" ? classes.highlight : ""}
              />
              <NavItem
                href="/yayinlarimiz"
                text="Yayınlarımız"
                className={path === "/yayinlarimiz" ? classes.highlight : ""}
              />
              <Link
                href="/iletisim"
                className="bg-white text-green-950 hover:text-white hover:bg-green-900 px-8 py-1 rounded-md no-underline transition-all duration-300 ease-in-out"
              >
                İletişim
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700 no-underline transition-all duration-300 ease-in-out"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-10/14 sm:w-[400px] bg-regal-blue p-0 overflow-hidden"
              >
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="flex flex-col h-full"
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="flex justify-between items-center p-6 border-b border-white">
                        <div className="text-white">
                          <div
                            style={{
                              fontFamily: "Cormorant_Garamond",
                              letterSpacing: "4px",
                            }}
                            className="text-xl font-medium"
                          >
                            ABATAY & İŞERİ
                          </div>
                          <div
                            style={{
                              fontFamily: "Cormorant_Garamond",
                              letterSpacing: "2px",
                            }}
                            className="text-sm mt-1"
                          >
                            AVUKATLIK BÜROSU
                          </div>
                        </div>
                        <SheetClose className="rounded-full ml-16 text-white hover:bg-green-700 transition-all duration-300 ease-in-out focus:outline-none ">
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close</span>
                        </SheetClose>
                      </div>
                      <nav className="flex flex-col space-y-1 mt-8 px-6">
                        {[
                          { href: "/hakkimizda", text: "Hakkımızda" },
                          { href: "/ekibimiz", text: "Ekibimiz" },
                          { href: "/hizmetlerimiz", text: "Hizmetlerimiz" },
                          { href: "/yayinlarimiz", text: "Yayınlarımız" },
                        ].map((item, index) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <NavItem
                              href={item.href}
                              text={item.text}
                              className="flex items-center justify-between py-3 border-b border-green-700 last:border-b-0"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.text}

                              <ChevronRight className="h-5 w-5" />
                            </NavItem>
                          </motion.div>
                        ))}
                      </nav>
                      <motion.div
                        className="mt-auto p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Link
                          href="/iletisim"
                          className="font-serif bg-white text-green-950 hover:bg-green-100 block px-4 py-3 rounded-md text-center text-lg font-medium w-full transition-all duration-300 ease-in-out"
                          onClick={() => setIsOpen(false)}
                        >
                          İletişim
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
