const AwesomeNavbar = () => {
  return (
    <nav className="w-full shadow bg-gray-800 text-white px-4 py-2 flex justify-between items-center fixed top-0 left-0 z-10">
      <div className="flex items-center font-extrabold">
        <img
          src="/react-logo.png"
          alt="Dynamic Logo"
          className="mr-2 h-6 w-6 sm:h-8 sm:w-8"
        />
        <p className="text-lg sm:text-xl md:text-2xl">React Facts</p>
      </div>
    </nav>
  );
};

export default AwesomeNavbar;
