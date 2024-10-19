const CenteredFadeInDiv = ({ children }) => {
    return (
        <div className="flex items-center justify-center mx-4 lg:mx-0 mt-[50%] mb-12 md:my-[0] md:h-screen mx-0 md:mx-9">
            <div className="bg-[#4a504dc9] font-thin text-[#b6b4b1] text-sm md:text-xl lg:text-2xl bg-opacity-80 p-8 animate-fade-in rounded-sm max-w-4xl">
                {children}
            </div>
        </div>
    );
};

export default CenteredFadeInDiv;
