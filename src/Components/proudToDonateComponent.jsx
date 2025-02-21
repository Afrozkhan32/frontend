import React, { useEffect, useState } from "react";
import slide1 from "./assets/proudToDonate1.jpg";
import slide2 from "./assets/proudToDonate2.jpg";
import slide3 from "./assets/proudToDonate3.jpg";
import "tailwindcss/tailwind.css";

const images = [slide1, slide2, slide3];

const ProudToDonate = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
      <h1 className="text-4xl font-bold mb-6 animate-fadeIn">Proud to Donate</h1>
      <div className="relative w-3/4 max-w-lg h-80 overflow-hidden rounded-2xl shadow-lg">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`ProudToDonate${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="mt-6 p-4 text-center bg-white bg-opacity-20 rounded-xl shadow-lg backdrop-blur-md">
        <p className="text-lg font-semibold">Remember that the happiest people are not those getting more, but those giving more.</p>
      </div>
    </div>
  );
};

export default ProudToDonate;
