"use client"
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader } from '@mantine/core';
import { JwtPayload } from 'jwt-decode';
import tokenDecode from '@/utils/tokenDecode';
import UserDashboard from '@/components/UserDashboard';
import AdminDashboard from '@/components/AdminDashboard';

export interface tokenDataT extends JwtPayload {
  id: string,
  fullName: string,
  role: "admin" | "user"
}

export default function Home() {
  const router = useRouter()
  const [cookies] = useCookies();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<tokenDataT | null>(null)
  useEffect(()=>{
    if(!cookies.token) {
      router.push('./login')
    } else {
      const tokenData = tokenDecode(cookies.token);
      setUserData(tokenData)
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
    if(userData?.role === "user") {
      return <UserDashboard/>
    }
    if(userData?.role === "admin") {
      return <AdminDashboard/>
    }
  }
}
