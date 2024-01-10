import AdminDashboardNavbar from "@/components/adminDashboard/AdminDashboardNavbar";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "پیشخوان ادمین",
    description: "درسنامه و آزمون ادبیات",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>
        <AdminDashboardNavbar/>
        {children}
        </>
    );
  }