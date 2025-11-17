/**
 * App.jsx - Main application component
 * 
 * Orchestrates the entire Little Einstein Studio website.
 * Manages global state (dark mode, active navigation) and renders all page sections.
 * Includes smooth scrolling and scroll-based navigation tracking.
 */

import React, { useState, useEffect, useRef } from "react";
import siteContent from "./content.json";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Dark mode state - controls theme switching
  const [dark, setDark] = useState(false);
  
  // Active navigation item - tracks which section is currently highlighted
  const [active, setActive] = useState("Home");

  // Refs for sections to track scroll position
  const sectionsRef = useRef({
    hero: null,
    about: null,
    projects: null,
    team: null,
    contact: null,
  });

  // Apply/remove dark mode class to document root for Tailwind dark mode
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    
    // Save dark mode preference to localStorage
    localStorage.setItem("darkMode", dark.toString());
  }, [dark]);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setDark(true);
    } else if (savedDarkMode === null) {
      // Check system preference if no saved preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
    }
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header

      const sections = [
        { id: "hero", ref: sectionsRef.current.hero },
        { id: "about", ref: sectionsRef.current.about },
        { id: "projects", ref: sectionsRef.current.projects },
        { id: "team", ref: sectionsRef.current.team },
        { id: "contact", ref: sectionsRef.current.contact },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref) {
          const offsetTop = section.ref.offsetTop;
          if (scrollPosition >= offsetTop) {
            const sectionName = section.id === "hero" ? "Home" : 
                               section.id.charAt(0).toUpperCase() + section.id.slice(1);
            setActive(sectionName);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enable smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Destructure site content from JSON for easier prop passing
  const { brand, nav, hero, about, projects, team, contact } = siteContent;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header
        brand={brand}
        nav={nav}
        active={active}
        setActive={setActive}
        dark={dark}
        setDark={setDark}
        contact={contact}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div ref={(el) => (sectionsRef.current.hero = el)}>
          <Hero hero={hero} setActive={setActive} />
        </div>
        <div ref={(el) => (sectionsRef.current.about = el)}>
          <About about={about} />
        </div>
        <div ref={(el) => (sectionsRef.current.projects = el)}>
          <Projects projects={projects} />
        </div>
        <div ref={(el) => (sectionsRef.current.team = el)}>
          <Team team={team} />
        </div>
        <div ref={(el) => (sectionsRef.current.contact = el)}>
          <Contact contact={contact} />
        </div>
        <Footer brand={brand} />
      </main>
    </div>
  );
}

