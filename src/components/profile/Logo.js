import Image from "next/image";

const Logo = ({ className = "" }) => {
    return (
        <div className={` h-16 w-16 rounded-full relative ${className}`}>
            <Image src="/ogos.jpeg" alt="logo" fill className="object-cover" />
        </div>
    );
};

export default Logo;
