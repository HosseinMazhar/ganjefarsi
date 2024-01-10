import { Button } from "@mantine/core";
import { IconDoorExit, IconSchool, IconFileCheck } from "@tabler/icons-react";

export default function UserDashboardNavbar() {
  return (
    <nav className="w-screen h-[60px] bg-neutral-800 border-b border-neutral-900 flex items-center justify-between px-6">
      <Button rightSection={<IconDoorExit size={20} />}>خروج</Button>
      <div className="flex gap-3">
        <Button rightSection={<IconSchool size={20} />}>درسنامه ها</Button>
        <Button rightSection={<IconFileCheck size={20} />}>آزمون ها</Button>
      </div>
    </nav>
  );
}
