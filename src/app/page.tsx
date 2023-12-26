"use client"
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter()
  const [cookies] = useCookies();
  useEffect(()=>{
    if(!cookies.token) {
      router.push('./login')
    }
  },[cookies])
  return (
    <main>
    </main>
  )
}
