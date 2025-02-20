'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const Page = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <h1 className="text-4xl my-3">Home - Amigo Oculto</h1>
      <h1 className="text-center text-4xl my-3">Escolha seu Evento</h1>
      <div className="flex justify-center">
        <button
                className="mt-2 p-1 bg-green-500
                 text-white text-4xl rounded-md border-b-4 border-green-700
                 active:border-0 disabled:opacity-50"
                 onClick={() => router.push('/event/0')}
                 >Evento 1</button>
      </div>
    </div>
  );
}

export default Page;
  