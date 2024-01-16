"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface LessonProps {
  params: {
    id: string;
  };
}

interface requestResponseT {
  lessonById: {
    _id: string;
    title: string;
    paragraph: string;
  };
}

export default function Lesson({ params }: LessonProps) {
  const [data, setData] = useState<requestResponseT | null>();
  useEffect(() => {
    axios.get(`/api/lessons/${params.id}`).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="text-right py-8 px-36 flex flex-col gap-5">
      <h1 className="font-family-vazir text-3xl">{data?.lessonById.title}</h1>
      <p className="font-family-vazir">{data?.lessonById.paragraph}</p>
    </div>
  );
}
