import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "درسنامه ها",
  description: "درسنامه و آزمون ادبیات",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
