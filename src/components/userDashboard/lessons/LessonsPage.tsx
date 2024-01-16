"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

type lessonT = [
  {
    _id: string
    title: string;
    paragraph: string;
  }
];

export default function LessonsPage() {
  const [data, setData] = useState<lessonT | null>(null);
  useEffect(() => {
    axios.get("/api/lessons").then((res: any) => {
      setData(res.data.lessons);
    });
  }, []);
  return (
    <main className="w-screen overflow-x-hidden flex flex-col">
      {data?.map((index, key) => {
        return (
          <div className="px-36 overflow-x-hidden flex flex-col pt-5">
            <div className="w-full font-family-vazir px-5 h-16 rounded-md bg-neutral-900 border-neutral-600 border flex justify-between items-center">
                <Link href={"/userDashboard/lessons/"+index._id}>
                <span className="text-sm">مطالعه کنید</span>
                </Link>
              <h1 className="text-xl">{index.title}</h1>
            </div>
          </div>
        );
      })}
    </main>
  );
}
