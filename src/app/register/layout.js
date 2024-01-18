import { ToggleThemeHeader } from "@/components";

const RegisterLayout = ({ children }) => {
    return (
        <div className="register h-full overflow-auto bg-cover bg-no-repeat">
            <ToggleThemeHeader />
            {children}
        </div>
    );
};

export default RegisterLayout;
