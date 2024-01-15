"use client";
import { useForm } from "@mantine/form";
import { TextInput } from "@mantine/core";
import axios from "axios";

export default function CreateExamPage() {
    const form = useForm({
        initialValues: {
          title: "",
          deadline: "",
          questions: [{ text: "" }],
        },
        validate: {
          title: (value) => (value ? null : "وارد کردن عنوان ضروری است"),
          deadline: (value) =>
            value && /^\d+(\.\d+)?$/.test(value)
              ? null
              : "مهلت امتحان را به درستی وارد کنید برای مثال: 1.5",
        },
      });
    
      const handleAddQuestion = () => {
        form.insertListItem("questions", { text: "" });
      };
    
      const handleSubmit = async(values: any) => {
        console.log(values);
        try {
            await axios.post("/api/createExam", values);
            alert("درسنامه با موفقیت ثبت شد")
            form.reset();
          } catch (error) {
            alert("ثبت درسنامه با مشکل روبرو شد")
          }
      };
    
      return (
        <div className="w-screen h-[calc(100vh-60px)] flex justify-center items-center">
          <div className="w-4/6 h-[500px] flex flex-col justify-center items-center overflow-x-hidden py-9 border-neutral-600 border bg-neutral-700">
            <h1 className="font-family-vazir text-white bg font-extrabold text-center pb-5 text-xl">
              طراحی آزمون
            </h1>
            <form
              onSubmit={form.onSubmit(handleSubmit)}
              className="flex flex-col gap-3 w-full"
            >
              <TextInput
                className="mx-5 text-right font-family-vazir persian-text-input"
                label="عنوان امتحان"
                {...form.getInputProps("title")}
              ></TextInput>
              <TextInput
                className="mx-5 text-right font-family-vazir persian-text-input"
                label="مهلت امتحان"
                {...form.getInputProps("deadline")}
              ></TextInput>
              {form.values.questions.map((question, index) => {
                return (
                  <TextInput
                    key={index}
                    className="mx-5 text-right font-family-vazir persian-text-input"
                    label={index + 1 + " سوال"}
                    {...form.getInputProps(`questions.${index}.text`)}
                  ></TextInput>
                );
              })}
              <button type="button" onClick={handleAddQuestion}>
                افزودن به پرسشنامه
              </button>
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