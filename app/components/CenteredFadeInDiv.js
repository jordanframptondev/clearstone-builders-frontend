const CenteredFadeInDiv = ({ children }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-black bg-opacity-80 p-8 animate-fade-in rounded-sm">
                {children}
            </div>
        </div>
    );
};

export default CenteredFadeInDiv;
