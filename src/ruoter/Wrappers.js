"use client";
import { getDecryptedCookies } from "@/utils";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./slices/userSlice";

const Wrappers = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const userCookies = Cookies.get("user");
        const loginCookies = Cookies.get("loginSession");
        switch (pathname) {
            case "/login":
                if (userCookies && loginCookies) {
                    router.push("/profile");
                }
                break;
            case "/profile":
                if (userCookies) {
                    if (!loginCookies) {
                        router.push("/login");
                    }
                } else {
                    router.push("/register");
                }
                break;
            default:
                router.push("/");
                break;
        }
        setIsChecking(false);
    }, [pathname]);

    useEffect(() => {
        const userData = getDecryptedCookies("user");
        dispatch(setUser(userData));
    }, []);

    if (isChecking) {
        return null;
    }

    return <div className={`h-full ${theme}`}>{children}</div>;
};

export default Wrappers;
