import ToggleThemeHeader from "../ToggleThemeHeader";
import { FaUserCircle } from "react-icons/fa";
import Logo from "./Logo";

const Headers = () => {
    return (
        <div>
            <ToggleThemeHeader />
            <div className="profile-header h-24 flex items-center justify-between px-4 md:px-24 bg-orange-600">
                <Logo />
                <div className="text-gray-500 text-4xl">
                    <FaUserCircle />
                </div>
            </div>
        </div>
    );
};

export default Headers;
