import React from "react";
import ChildImage from "./assets/whyUsSection-happyKids.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-10 rounded-2xl shadow-lg">
      <div className={`md:w-2/3 p-6 ${styles.whyUs}`}>
        <h1 className="text-4xl font-bold mb-4 border-b-4 border-yellow-400 inline-block">Why Us?</h1>
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          aut perspiciatis laborum repellat esse hic nihil a placeat accusamus
          fugit. Iusto earum ea esse beatae quae soluta vero cupiditate
          commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati aut perspiciatis laborum repellat esse hic nihil a placeat
          accusamus fugit. Iusto earum ea esse beatae quae soluta vero
          cupiditate commodi.
        </p>
      </div>
      <div className="md:w-1/3 flex justify-center items-center p-4">
        <img
          className="rounded-xl shadow-lg w-full object-cover max-h-72"
          src={ChildImage}
          alt="Happy Kids"
        />
      </div>
    </div>
  );
};

export default WhyUs;
