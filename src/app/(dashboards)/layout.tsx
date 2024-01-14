"use client";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader } from "@mantine/core";
import { JwtPayload } from "jwt-decode";
import '@mantine/core/styles.css';

export interface tokenDataT extends JwtPayload {
  id: string;
  fullName: string;
  role: "admin" | "user";
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [cookies] = useCookies();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!cookies.token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [cookies]);
  if (loading) {
    return (
      <main className="w-screen h-screen flex justify-center items-center">
        <Loader color="blue" size="xl" />
      </main>
    );
  } else {
    return (
      <>
        {children}
      </>
    );
  }
}
