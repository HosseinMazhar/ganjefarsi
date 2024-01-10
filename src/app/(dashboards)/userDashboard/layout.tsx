import type { Metadata } from "next";
import UserDashboardNavbar from "@/components/userDashboard/UserDashboardNavbar";
export const metadata: Metadata = {
  title: " پیشخوان کاربر",
  description: "درسنامه و آزمون ادبیات",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UserDashboardNavbar />
      {children}
    </>
  );
}
