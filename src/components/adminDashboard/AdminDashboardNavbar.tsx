import { Button } from "@mantine/core";
import { IconDoorExit, IconPlus, IconEye } from "@tabler/icons-react";

export default function AdminDashboardNavbar() {
  return (
    <nav className="w-screen h-[60px] bg-neutral-800 border-b border-neutral-900 flex items-center justify-between px-6">
      <Button rightSection={<IconDoorExit size={20} />} color="red" className="font-family-vazir">خروج</Button>
      <div className="flex gap-3">
        <Button rightSection={<IconPlus size={20} />} className="font-family-vazir" color="blue">طراحی درسنامه</Button>
        <Button rightSection={<IconPlus size={20} />} className="font-family-vazir" color="blue">طراحی آزمون</Button>
        <Button rightSection={<IconEye size={20} />} className="font-family-vazir" color="blue">مشاهده پاسخنامه ها</Button>
      </div>
    </nav>
  );
}