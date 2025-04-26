// App.tsx

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import "./styles/transitions.css";

import SplashCursor from './components/SplashCursor'; // Update the import path
import AnimatedContent from './components/AnimatedContent'; // Ensure this import is present

const queryClient = new QueryClient();

const ScrollToSection = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
      rootMargin: "-50px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          // Add fade-in section if not already present
          if (!target.classList.contains("fade-in-section")) {
            target.classList.add("fade-in-section");
          }

          // Add stagger effect to children
          const staggerItems = target.querySelectorAll(".stagger-item");
          staggerItems.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add("active");
            }, i * 150);
          });

          // Set scroll progress variable
          const progress = entry.intersectionRatio;
          target.style.setProperty("--scroll-progress", String(progress));
          target.classList.add("active");

          // Parallax update
          if (target.classList.contains("parallax")) {
            const updateParallax = () => {
              const rect = target.getBoundingClientRect();
              const scrolled = window.pageYOffset;
              const speed = 0.5;
              const offset = (rect.top + scrolled) * speed;
              target.style.setProperty("--scroll-offset", `${offset}px`);
            };
            window.addEventListener("scroll", updateParallax);
            updateParallax();
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('nav a[href^="#"]')) {
        e.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        const element = document.getElementById(id || "");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.id;
          document.querySelectorAll("nav a").forEach((link) => {
            if (link.getAttribute("href") === `#${currentSection}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    };

    document.addEventListener("click", handleNavClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleNavClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

const PageTransition = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={400} classNames="page">
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToSection />
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Routes location={location}>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AppContent />
          <Toaster />
          <Sonner />
          <SplashCursor />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
