import React from "react";
import styles from "./styles/campaigns.module.css";

const Campaigns = ({ id, image, title, description, requiredAmount, isActivated, handleClick }) => {
  return (
    <div
      className={`m-4 p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${
        isActivated ? "bg-white" : "bg-gray-300 opacity-75 cursor-not-allowed"
      } ${styles.campaignContainer}`}
      onClick={isActivated ? () => handleClick(id) : null}
    >
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-5/12 flex justify-center">
          <img className="w-40 h-40 object-cover rounded-lg" src={image} alt={title} />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-7/12 px-4">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
          
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-700 font-semibold">
              <span className="text-gray-900 font-bold">Required Amount:</span> 
              <span className="ml-1"><i className="fa fa-inr" aria-hidden="true"></i> {requiredAmount}</span>
            </div>

            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition hover:bg-blue-700"
            >
              Donate Now <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
