"use client";

import { useState, useEffect } from "react";
import { useLanguage, type Locale } from "@/i18n";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "about"];
      let currentSection = "about";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = (next: Locale) => {
    setLocale(next);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10 px-3">
      <div className="flex items-center gap-2">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <a
            href="#home"
            className={`nav-item ${
              activeSection === "home"
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
          >
            {t.header.home}
          </a>
          <a
            href="#experience"
            className={`nav-item ${
              activeSection === "experience"
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
          >
            {t.header.experience}
          </a>
          <a
            href="#projects"
            className={`nav-item ${
              activeSection === "projects"
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
          >
            {t.header.projects}
          </a>
          <a
            href="#about"
            className={`nav-item ${
              activeSection === "about"
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
          >
            {t.header.about}
          </a>
        </nav>
        <div
          className="flex p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur"
          role="group"
          aria-label="Language"
        >
          <button
            type="button"
            onClick={() => toggleLocale("en")}
            className={`nav-item px-3 ${
              locale === "en"
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
            aria-pressed={locale === "en"}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => toggleLocale("ru")}
            className={`nav-item px-3 ${
              locale === "ru"
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
            aria-pressed={locale === "ru"}
          >
            RU
          </button>
        </div>
      </div>
    </div>
  );
};
