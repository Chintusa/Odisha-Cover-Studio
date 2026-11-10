import React, { useState } from "react";
import { Link } from "wouter";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold font-serif tracking-tight text-primary">
              Odisha <span className="text-foreground">Cover Studio</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#collections" className="text-sm font-medium hover:text-primary transition-colors">Collections</a>
          <a href="#ready-stock" className="text-sm font-medium hover:text-primary transition-colors">Ready Stock</a>
          <a href="#lamination" className="text-sm font-medium hover:text-primary transition-colors">Lamination</a>
          <a href="#wholesale" className="text-sm font-medium hover:text-primary transition-colors">Wholesale</a>
          <a href="#stories" className="text-sm font-medium hover:text-primary transition-colors">Stories</a>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="hidden sm:flex">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </Button>
          </a>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 py-4 flex flex-col gap-3">
          <a 
            href="#collections" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium py-2 hover:text-primary transition-colors"
          >
            Collections
          </a>
          <a 
            href="#ready-stock" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium py-2 hover:text-primary transition-colors"
          >
            Ready Stock
          </a>
          <a 
            href="#lamination" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium py-2 hover:text-primary transition-colors"
          >
            Lamination Studio
          </a>
          <a 
            href="#wholesale" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium py-2 hover:text-primary transition-colors"
          >
            Wholesale Program
          </a>
          <a 
            href="#stories" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium py-2 hover:text-primary transition-colors"
          >
            Stories & Reviews
          </a>
          <a 
            href="https://wa.me/919999999999" 
            target="_blank" 
            rel="noreferrer"
            className="pt-2"
          >
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
