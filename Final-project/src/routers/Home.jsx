import React from "react";
import HomeBg from "../assets/Home1.jpg";

const Home = () => {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-125 md:h-150 flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${HomeBg})`,
          }}
        >
          {/* Dark blue gradient overlay for text readability */}
          <div className="absolute inset-0 bg-linear-to-r from-[#002147]/80 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-md">
              University of Agriculture, <br />
              Peshawar
            </h1>
          
          </div>
        </div>
      </section>

      {/* Aap yahan mazeed sections add kar sakte hain, jaise: */}
      {/* <About /> */}
      {/* <Teachers /> */}
    </main>
  );
};

export default Home;
