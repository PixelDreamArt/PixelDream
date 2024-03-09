"use client";
import { useAppSelector } from "@/lib/hooks";

export default function Home() {
  const email = useAppSelector((state) => state.user.email);
  console.log(email);

  return (
    <main>
      <h1>Home</h1>
      <h2>{email}</h2>
    </main>
  );
}
