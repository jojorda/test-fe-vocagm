"use client";

import { useSelector } from "react-redux";
import { FaUserCircle, FaPencilAlt } from "react-icons/fa";
import Button from "../Button";

const FormHeaders = () => {
    const user = useSelector((state) => state.user.user);
    return (
        <div className="flex items-center justify-between mt-4 mb-8">
            <div className="flex items-center gap-2">
                <div className="text-gray-700 text-4xl">
                    <FaUserCircle />
                </div>
                <p className="font-semibold text-lg">{user.name}</p>
            </div>
            <Button className="profile-edit-btn px-6 py-2 text-sm" text="Edit Profile" leftIcon={FaPencilAlt}/>
        </div>
    );
};

export default FormHeaders;
