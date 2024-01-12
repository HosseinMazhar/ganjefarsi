"use client"
import { Button } from "@mantine/core";
import { IconDoorExit, IconPlus, IconEye } from "@tabler/icons-react";
import { useCookies } from 'react-cookie';
import '@mantine/core/styles.css';

export default function AdminDashboardNavbar() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  return (
    <nav className="w-screen h-[60px] bg-neutral-800 border-b border-neutral-900 flex items-center justify-between px-6">
      <Button rightSection={<IconDoorExit size={20} />} color="red" className="font-family-vazir" onClick={()=>removeCookie('token',{path:'/'})}>خروج</Button>
      <div className="flex gap-3">
        <Button rightSection={<IconPlus size={20} />} className="font-family-vazir" color="blue">طراحی درسنامه</Button>
        <Button rightSection={<IconPlus size={20} />} className="font-family-vazir" color="blue">طراحی آزمون</Button>
        <Button rightSection={<IconEye size={20} />} className="font-family-vazir" color="blue">مشاهده پاسخنامه ها</Button>
      </div>
    </nav>
  );
}