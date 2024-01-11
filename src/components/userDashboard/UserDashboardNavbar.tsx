import { Button } from "@mantine/core";
import { IconDoorExit, IconSchool, IconFileCheck } from "@tabler/icons-react";

export default function UserDashboardNavbar() {
  return (
    <nav className="w-screen h-[60px] bg-neutral-800 border-b border-neutral-900 flex items-center justify-between px-6">
      <Button rightSection={<IconDoorExit size={20} />} color="red" className="font-family-vazir">خروج</Button>
      <div className="flex gap-3">
        <Button rightSection={<IconSchool size={20} />} className="font-family-vazir" color="blue">درسنامه ها</Button>
        <Button rightSection={<IconFileCheck size={20} />} className="font-family-vazir" color="blue">آزمون ها</Button>
      </div>
    </nav>
  );
}
