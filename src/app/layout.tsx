import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { MyCookiesProvider } from "./context/CookiesProvider";
import { MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "گنج فارسی",
  description: "درسنامه و آزمون ادبیات",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyCookiesProvider>
          <MantineProvider defaultColorScheme="dark">
            {children}
          </MantineProvider>
        </MyCookiesProvider>
      </body>
    </html>
  );
}
