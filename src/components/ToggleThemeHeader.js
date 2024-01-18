"use client";
import ToggleThemeButton from "./ToggleThemeButton";

const ToggleThemeHeader = () => {
    return (
        <div className="h-12 bg-white px-4 flex justify-end items-center">
            <ToggleThemeButton />
        </div>
    );
};

export default ToggleThemeHeader;
