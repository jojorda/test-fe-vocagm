"use client";
import { useSelector } from "react-redux";
import { Banner, Footer, Header } from "@/components/profile";

const ProfileLayout = ({ children }) => {
    const user = useSelector((state) => state.user.user);

    if (!user) {
        return null;
    }

    return (
        <div className="min-h-full flex flex-col">
            <Header />
            <div className="flex-1 px-4 md:px-24 py-6">
                <Banner />
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default ProfileLayout;
