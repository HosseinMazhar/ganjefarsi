"use client";
import { TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";

export default function CreateLessonPage() {
  const form = useForm({
    initialValues: {
      title: "",
      paragraph: "",
    },
  });
  const handleFormSubmit = async (values: any) => {
    try {
      await axios.post("/api/createLesson", values);
      alert("درسنامه با موفقیت ثبت شد")
      form.reset();
    } catch (error) {
      alert("ثبت درسنامه با مشکل روبرو شد")
    }
  };
  return (
    <div className="w-screen h-[calc(100vh-60px)] flex justify-center items-center">
      <div className="w-4/6 h-5/6 rounded-xl border-neutral-600 border bg-neutral-700">
        <h1 className="font-family-vazir text-white bg font-extrabold text-center py-5 text-xl">
          طراحی درسنامه
        </h1>
        <form
          onSubmit={form.onSubmit(handleFormSubmit)}
          className="flex flex-col gap-3"
        >
          <TextInput
            className="mx-5 text-right font-family-vazir persian-text-input"
            label="عنوان"
            {...form.getInputProps("title")}
          ></TextInput>
          <Textarea
            className="mx-5 text-right font-family-vazir persian-text-input"
            label="متن"
            {...form.getInputProps("paragraph")}
          ></Textarea>
          <button
            type="submit"
            className="mt-6 mx-5 w-12 font-family-vazir bg-blue-600 py-2 rounded hover:bg-blue-500"
          >
            ثبت
          </button>
        </form>
      </div>
    </div>
  );
}
