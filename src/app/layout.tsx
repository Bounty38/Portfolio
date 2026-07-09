import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { LanguageProvider } from "@/i18n";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sam Kislitcyn | Portfolio",
  description: "Professional portfolio",
};

const localeBootstrapScript = `
(function () {
  try {
    var stored = localStorage.getItem("portfolio-locale");
    var locale = stored;
    if (locale !== "en" && locale !== "ru") {
      var languages = navigator.languages || [navigator.language];
      locale = languages.some(function (lang) {
        return String(lang || "").toLowerCase().indexOf("ru") === 0;
      })
        ? "ru"
        : "en";
    }
    document.documentElement.lang = locale;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeBootstrapScript }} />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
