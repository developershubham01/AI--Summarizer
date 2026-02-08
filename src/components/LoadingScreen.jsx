import logo from "../assets/logo.png"; // path adjust

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center 
                    bg-gradient-to-br from-violet-600 to-purple-700 text-white z-50">

      <img
        src={logo}
        alt="Logo"
        className="w-20 h-20 mb-6 animate-bounce"
      />

      <h1 className="text-2xl font-bold mb-2">
        AI Article Summarizer
      </h1>

      <p className="text-white/80 mb-6">
        Loading, please wait...
      </p>

      <div className="w-10 h-10 border-4 border-white/30 border-t-white 
                      rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingScreen;
