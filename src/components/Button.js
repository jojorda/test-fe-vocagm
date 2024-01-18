"use client";

const Button = ({
    text = "",
    rightIcon: RightIcon = null,
    leftIcon: LeftIcon = null,
    className = "",
    ...props
}) => {
    return (
        <button
            className={`py-3 rounded-3xl bg-blue-200 flex justify-center items-center gap-2 font-semibold ${className}`}
            {...props}
        >
            {LeftIcon && <LeftIcon />}
            {text}
            {RightIcon && <RightIcon />}
        </button>
    );
};

export default Button;
