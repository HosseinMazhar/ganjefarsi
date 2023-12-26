"use client";
import { CookiesProvider } from "react-cookie";

export const MyCookiesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <CookiesProvider>{children}</CookiesProvider>;
};
