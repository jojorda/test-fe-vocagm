"use client";
import Input from "../Input";

const ProfileInput = (props) => {
    return (
        <Input wrapperClassName="!border-gray-300 !mt-1 !h-10" disabled {...props}  />
    );
};

export default ProfileInput;
