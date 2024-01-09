import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "پیشخوان",
    description: "درسنامه و آزمون ادبیات",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>
        <h1>admin navbar</h1>
        {children}
        </>
    );
  }