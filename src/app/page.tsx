"use client"
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader } from '@mantine/core';
export default function Home() {
  const router = useRouter()
  const [cookies] = useCookies();
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    if(!cookies.token) {
      router.push('./login')
    } else {
      setLoading(false)
    }
  },[cookies])
  if (loading) {
    return (
      <main className='w-screen h-screen flex justify-center items-center'>
        <Loader color='blue' size='xl'/>
      </main>
    )
  } else {
    return <h1>hello</h1>
  }
}
