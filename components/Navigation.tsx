"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({
  activeSection,
  onNavigate,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-1 left-1/2 transform -translate-x-1/2 z-40 bg-background/80 backdrop-blur-md border rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center space-x-6">
          {navigationItems.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-sm transition-colors hover:font-bold cursor-pointer ${
                  activeSection === item.id ? "font-bold" : "font-light"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 shadow-lg bg-background/80 backdrop-blur-md"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        <span className="sr-only">Toggle navigation menu</span>
      </Button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu */}
          <nav className="md:hidden fixed top-0 left-0 h-full w-64 bg-background border-r shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col p-6 pt-20">
              <div className="mb-8">
                <h2 className="text-lg font-semibold">Navigation</h2>
              </div>
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`text-left py-2 px-3 rounded-md transition-colors hover:bg-muted ${
                      activeSection === item.id
                        ? "text-primary bg-muted font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
