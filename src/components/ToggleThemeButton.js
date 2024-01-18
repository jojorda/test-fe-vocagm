"use client";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/ruoter/slices/themeSlice";

const ToggleThemeButton = () => {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    return (
        <div className="flex items-center gap-3 w-fit">
            <p className="text-sm font-semibold text-blue-900">Blue</p>
            <div className="w-9 h-9 bg-white rounded-full border border-blue-700 flex items-center justify-center cursor-pointer"
                onClick={() => dispatch(toggleTheme())}
            >
                <div className="relative p-1">
                    <div className="border border-blue-700 w-5 h-2 rounded-xl" />
                    <div className={`border border-blue-700 w-3 h-3 bg-white rounded-full absolute top-0 bottom-0 my-auto ${
                            theme === "blue" ? "left-1" : "right-1"
                        }`}
                    />
                </div>
            </div>
            <p className="text-sm font-semibold text-orange-600">
                Orange
            </p>
        </div>
    );
};

export default ToggleThemeButton;
