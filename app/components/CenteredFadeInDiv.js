const CenteredFadeInDiv = ({ children }) => {
    return (
        <div className="flex items-center justify-center h-screen mx-9">
            <div className="bg-black bg-opacity-80 p-8 animate-fade-in rounded-sm  max-w-3/4">
                {children}
            </div>
        </div>
    );
};

export default CenteredFadeInDiv;
