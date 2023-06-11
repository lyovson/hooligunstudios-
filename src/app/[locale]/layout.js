import { useLocale } from "next-intl";
import localFont from "next/font/local";
import { notFound } from "next/navigation";

import Footer from "../../components/Footer.js";
import Header from "../../components/Header.js";
import "./globals.css";

export const metadata = {
  title: "Hooligun Studios",
  description: "Movie and Music Production Studio from Armenia",
};

const normal = localFont({
  src: "./fonts/light.otf",
  display: "swap",
  subsets: ["latin"],
  variable: "--gotham-normal",
});

const title = localFont({
  src: "./fonts/bold.otf",
  display: "swap",
  subsets: ["latin"],
  variable: "--gotham-title",
});

export default function RootLayout({ params, children }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} className={`${normal.variable} ${title.variable}`}>
      <body className={` mx-auto w-screen`}>{children}</body>
    </html>
  );
}
