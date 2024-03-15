// File: Home.tsx

'use client';

import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { useAppSelector } from "../../../lib/redux/store";
import { useRouter } from 'next/navigation';

export default function Home() {
  const isAuthenticated = useAppSelector(state => state.auth.loggedIn);
  const router = useRouter();
  
  if (!isAuthenticated) {
    router.push('/admin/login');
    return;
  }

  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
