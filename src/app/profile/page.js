"use client";
import { Button } from "@/components";
import { FormHeader, Input } from "@/components/profile";
import { FaUserCircle, FaPenFancy } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { BiSolidLogOut } from "react-icons/bi";
import { FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "@/ruoter/slices/userSlice";
import { useRouter } from "next/navigation";

const Profile = () => {
    const user = useSelector((state) => state.user.user);
    const router = useRouter();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(onLogout());
        router.push("/login");
    };

    return (
        <div>
            <FormHeader />
            <div className="flex flex-col-reverse md:flex-row gap-1 md:gap-6">
                <div className="md:flex-[0.3] md:h-[600px] flex flex-col gap-3 pt-4 pb-10 pr-2 md:pr-6 border-solid md:border-r border-gray-200">
                    <div className="flex-1 border-solid border-b border-gray-600">
                        <Button className="text-sm py-0 bg-transparent" text="Profile" leftIcon={FaUserCircle} />
                    </div>
                    <div>
                        <Button className="text-sm text-red-800 py-0 bg-transparent" text="Logout" leftIcon={BiSolidLogOut} onClick={logout} />
                    </div>
                </div>
                <div className="flex-1 shadow-lg rounded-md px-4 md:px-6 py-8 h-fit">
                    <div className="flex items-center gap-2 pb-3 mb-3 border-solid border-b border-gray-300 text-lg">
                        <FaPenFancy />
                        <h1 className="font-bold">Edit Profile</h1>
                    </div>
                    <FormProvider
                        {...{ register: false, formState: { errors: {} } }}
                    >
                        <form>
                            <div className="flex flex-col gap-3 mb-6">
                                <Input label="Nama" value={user.name} />
                                <Input label="No Handphone" value={user.phone}/>
                                <Input type="password" label="Old Password" value={user.password}/>
                                <Input label="New Password" type="password" />
                            </div>
                        </form>
                        <Button className="profile-edit-btn px-6 py-2 text-sm" text="Edit Profile" rightIcon={FiArrowRight}/>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};

export default Profile;
