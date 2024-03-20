"use client";
import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import axios from "../../api/axios";

export default function Home() {
  const [users, setUsers] = useState();
  const email = useAppSelector((state) => state.user.email);
  console.log(email);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axios.get("/users", {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <h2>
        {email?.length ? (
          <ul>
            {email.map((user, key) => (
              <li key={key}>{user?.username}</li>
            ))}
          </ul>
        ) : (
          <p>No users to display</p>
        )}
      </h2>
    </main>
  );
}
