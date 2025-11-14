"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import {
  Menu,
  X,
  User,
  LogOut,
  Settings,
  Bookmark,
  Download,
  History,
  Moon,
  Sun,
  Home,
  Instagram,
  Book,
  ChevronRight,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import NavbarSearchButton from "./NavbarSearchButton";

const navigationItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Genre",
    href: "/genre",
    icon: Layers,
  },
  {
    title: "Pustaka",
    href: "/pustaka",
    icon: Book,
  },
  {
    title: "Berwarna",
    href: "/berwarna",
    icon: Book,
  },
  {
    title: "Download APK",
    href: "https://drive.google.com/file/d/1cnOHToJFWRedzmGZfMukRzs3UP-REqvs/view?usp=sharing",
    icon: Download,
  },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  // Authentication disabled - no login needed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for background blur
      setScrolled(currentScrollY > 10);

      // Hide/show navbar logic for mobile only
      if (window.innerWidth < 768) {
        // md breakpoint
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          // Scrolling up or at the top
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past threshold
          setIsVisible(false);
          // Close mobile menu if open when hiding navbar
          setIsMenuOpen(false);
        }
      } else {
        // Always show navbar on desktop
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Close menus when clicking outside (simplified since no user menu)
    const handleClickOutside = (event: MouseEvent) => {
      // User menu functionality removed
    };

    // Handle escape key to close mobile menu
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    // Handle window resize to ensure navbar is visible on desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    // Prevent scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen, lastScrollY]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Implement actual theme toggling logic here
  };

  // Function to check if the current path matches the navigation item
  const isActive = (itemPath: string) => {
    // Check for exact match or if pathname starts with itemPath (for nested routes)
    return (
      pathname === itemPath ||
      (itemPath !== "/" && pathname.startsWith(itemPath))
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
            : "bg-gradient-to-b from-gray-900 to-transparent"
        } ${
          isVisible && !isMenuOpen
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="h-8 w-8 relative overflow-hidden rounded-full">
                  <Image
                    src="/favicon.ico"
                    alt="AeroSense"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-green-600 text-transparent bg-clip-text">
                  AeroSense
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-xl font-bold bg-gradient-to-r from-blue-400 to-green-600 text-transparent bg-clip-text"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <NavbarSearchButton className="text-gray-300 hover:text-white" />
              <button
                onClick={toggleDarkMode}
                className="text-gray-300 hover:text-white p-1.5 rounded-full hover:bg-gray-800 transition-colors"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              <Link
                href="https://instagram.com/aerosense.id"
                className="hidden md:flex text-gray-300 hover:text-white p-1.5 rounded-full hover:bg-gray-800 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>

              {/* Auth section disabled - no login needed */}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[9998] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Side Drawer */}
        <div
          className={`absolute top-0 right-0 w-64 h-full bg-gray-900 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Content */}
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 relative overflow-hidden rounded-full">
                  <Image
                    src={"/favicon.ico"}
                    alt="AeroSense"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="font-bold text-white">AeroSense</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-4 px-3">
              <nav className="space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-blue-600/20 to-green-600/20 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon
                      className={`h-5 w-5 mr-3 ${
                        isActive(item.href) ? "text-blue-400" : ""
                      }`}
                    />
                    <span
                      className={
                        isActive(item.href)
                          ? "font-bold bg-gradient-to-r from-blue-400 to-green-600 text-transparent bg-clip-text"
                          : ""
                      }
                    >
                      {item.title}
                    </span>
                    {isActive(item.href) && (
                      <ChevronRight className="ml-auto h-4 w-4 text-blue-400" />
                    )}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 space-y-1">
                <div className="px-4 py-2 text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Features
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-white"
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("https://instagram.com/aerosense.id");
                  }}
                >
                  <Instagram className="mr-3 h-5 w-5" />
                  Community
                </Button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-800">
              <div className="text-center text-gray-400 text-sm">
                {/* Authentication disabled */}
                AeroSense - Air Quality Monitor
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
