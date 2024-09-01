import React from "react";

const Home = () => {
  return (
    <div
      name="home"
      className="comp w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[900px] mx-auto content-spacing">
        <p className="mobile-text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4">
          👋 Hi, my name is
        </p>
        <h1 className="las text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
          Laeek Ahmed Shaikh
        </h1>
        <h2 className="mobile-text-xl sm:text-2xl md:text-3xl text-gray-200">
          Undergrad CS Student, Aspiring Software & Data Engineer 🧑‍💻
        </h2>
      </div>
    </div>
  );
};

export default Home;
