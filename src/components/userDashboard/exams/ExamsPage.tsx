"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

type examsT = [
    {
      _id: string
      title: string;
      deadline: string;
      questions: [
        {
            _id: string;
            text: string
        }
      ]
    }
  ];

export default function ExamsPage() {
    const [data, setData] = useState<examsT | null>(null);
    useEffect(() => {
        axios.get("/api/exams").then((res: any) => {
          setData(res.data.exams);
        });
      }, []);
    return (
        <main className="w-screen overflow-x-hidden flex flex-col">
        {data?.map((index) => {
          return (
            <div className="px-36 overflow-x-hidden flex flex-col pt-5" key={index._id}>
              <div className="w-full font-family-vazir px-5 h-16 rounded-md bg-neutral-900 border-neutral-600 border flex justify-between items-center">
                  <Link href={"/userDashboard/exams/"+index._id}>
                  <span className="text-sm">مشاهده آزمون</span>
                  </Link>
                <h1 className="text-xl">{index.title}</h1>
              </div>
            </div>
          );
        })}
      </main>
    )
}