const AuthPage = ({ title, caption, titleClassName = "" }) => {
    return (
        <div>
            <h1 className={`font-bold text-3xl md:text-5xl mb-3 ${titleClassName}`}>
                {title}
            </h1>
            <p className="font-extralight text-sm mb-8">{caption}</p>
        </div>
    );
};

export default AuthPage;
