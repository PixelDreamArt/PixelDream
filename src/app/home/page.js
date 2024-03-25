"use client";
import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Link from "next/link";

import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "@/lib/features/authorization/authSlice";

export default function Home() {
  const [users, setUsers] = useState();
  // const email = useAppSelector((state) => state.user.email);
  // console.log(email);
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? `Welcome ${user}` : "welcome";
  const tokenAbbr = token ? `${token.slice(0, 9)}...` : "";
  const content = (
    <section>
      <h1>{welcome}</h1>
      <p>Token: {tokenAbbr}</p>
      <p>
        <Link href="/userList">Go to the users list</Link>
      </p>
    </section>
  );

  //   let isMounted = true;
  //   const controller = new AbortController();

  //   const getUsers = async () => {
  //     try {
  //       const response = await axios.get("/users", {
  //         signal: controller.signal,
  //       });
  //       console.log(response.data);
  //       isMounted && setUsers(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUsers();
  //   return () => {
  //     isMounted = false;
  //     controller.abort();
  //   };
  // }, []);

  return content;
}
