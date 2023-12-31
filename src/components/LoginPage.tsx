"use client";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter()
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'ایمیل را تصحیح کنید.'),
    },
  });

  return (
    <div className="flex w-full h-screen bg-neutral-800 flex-row justify-center items-center">
      <div className="rounded-xl w-[300px] border-neutral-600 border flex flex-col items-center gap-5 py-8">
        <h1 className="font-family-vazir text-white bg font-extrabold text-center pb-5 text-xl">
          مدخل گنج فارسی  
        </h1>
        <form onSubmit={form.onSubmit((values)=>{
          axios.post("/api/login", values).then(()=>router.push("/"))
        })} className="flex flex-col gap-3">
        <TextInput className="w-[250px] font-family-vazir persian-input" label=":ایمیل" {...form.getInputProps('email')}></TextInput>
        <PasswordInput className="w-[250px] font-family-vazir persian-input" label=":گذر واژه" {...form.getInputProps('password')}></PasswordInput>
        <Button type="submit" className="mt-6 font-family-vazir">ورود</Button>
        </form>
        <Link href={"./signin"}><p className="font-family-vazir text-xs hover:text-blue-300">ثبت نام کنید</p></Link>
      </div>
    </div>
  );
}
