"use client";
import { Button, Input, ToggleThemeButton } from "@/components";
import { AuthPageTitle } from "@/components/auth";
import Image from "next/image";
import Link from "next/link";
import { onLogin } from "@/ruoter/slices/userSlice";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Login = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const form = useForm();
    const user = useSelector((state) => state.user.user);

    const onSubmit = (data) => {
        if (!user) {
            router.push("/register");
        } else {
            const { password } = data;
            if (password !== user.password) {
                form.setError("password", { message: "Password Anda salah" });
            } else {
                dispatch(onLogin(data));
                form.reset();
                router.push("/profile");
            }
        }
    };

    return (
        <div className="h-full flex flex-col-reverse lg:flex-row overflow-auto">
            <div className="login-bg flex-1 bg-cover flex flex-col items-center justify-center gap-10 py-10">
                <div className="w-[200px] min-h-[300px] lg:w-[300px] lg:min-h-[400px] bg-gray-300 relative">
                    <Image className="object-cover" alt="image" src="/ogo1.jpeg" fill/>
                </div>
                <div className="text-white w-[360px] lg:w-[440px] text-center">
                    <h1 className="font-bold text-3xl">LOREM</h1>
                    <p>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor
                        <br />
                        sit amet, consectetur, adipisci velit..."
                        <br />
                        "There is no one who loves pain itself, who seeks after
                        it"
                    </p>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center relative px-4 py-10">
                <div className="absolute top-4 right-6">
                    <ToggleThemeButton />
                </div>
                <div className="w-[480px] mt-16">
                    <AuthPageTitle
                        title="Silakan Login"
                        caption="Masukkan username dan password anda untuk masuk"
                        titleClassName="login-title"
                    />
                    <FormProvider {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-3 mb-8">
                                <Input name="username" label="Username" />
                                <Input name="password" label="Password" type="password" />
                            </div>
                            <Button className="login-submit-btn w-full" type="submit" text="Masuk Sekarang" />
                        </form>
                    </FormProvider>
                    <p className="text-center mt-10 text-sm font-semibold">
                        Belum punya akun?{" "}
                        <Link href="/register" className="login-link">
                            Register Sekarang
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
