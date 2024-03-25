import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";
import { useEffect } from "react";

const RequireAuth = ({ children }) => {
  const token = useSelector(selectCurrentToken);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  return token ? children : null;
};

export default RequireAuth;
