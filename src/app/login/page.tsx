"use client"
import LoginPage from "@/components/login/LoginPage"
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
export default function Login(){
    const [cookies] = useCookies();
    const router = useRouter()
    useEffect(()=>{
      if(cookies.token) {
        router.push('/')
      }
    },[cookies])

    return <LoginPage/>
}