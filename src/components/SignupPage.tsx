"use client"
import { TextInput, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "ایمیل را تصحیح کنید",
    },
  });
  return (
    <div className="flex w-full h-screen bg-neutral-800 flex-row justify-center items-center">
      <div className="rounded-xl w-[300px] border-neutral-600 border flex flex-col items-center gap-5 py-8">
        <h1 className="font-family-vazir text-white bg font-extrabold text-center pb-5 text-xl">
          ثبت نام در گنج فارسی
        </h1>
        <form
          onSubmit={form.onSubmit((values) => {
            axios.post("/api/signup", values).then(() => router.push("/login"));
          })}
          className="flex flex-col gap-3"
        >
          <TextInput
            className="w-[250px] font-family-vazir persian-input"
            label="نام و نام خانوادگی"
            {...form.getInputProps("fullName")}
          ></TextInput>
          <TextInput
            className="w-[250px] font-family-vazir persian-input"
            label="ایمیل"
            {...form.getInputProps("email")}
          ></TextInput>
          <PasswordInput
            className="w-[250px] font-family-vazir persian-input"
            label="گذر واژه"
            {...form.getInputProps("password")}
          ></PasswordInput>
          <button
            type="submit"
            className="mt-6 font-family-vazir bg-blue-600 py-2 rounded hover:bg-blue-500"
          >
            ثبت نام
          </button>
        </form>
        <Link href={"./login"}>
          <p className="font-family-vazir text-xs hover:text-blue-300">
            داخل شوید
          </p>
        </Link>
      </div>
    </div>
  );
}
