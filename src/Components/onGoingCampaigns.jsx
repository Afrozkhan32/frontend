import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Loader from "./loader";
import Campaign from "./everyOngoingCampaigns";

const OnGoingCampaigns = (props) => {
  const Ref = useRef();

  const handleScroll = (direction) => {
    if (Ref.current) {
      Ref.current.scrollLeft += direction === "left" ? -325 : 325;
    }
  };

  return (
    <section id="Donate" className="py-12 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-600">Ongoing Campaigns</h1>
          <div className="space-x-4">
            <button
              className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
              onClick={() => handleScroll("left")}
            >
              <i className="fa fa-chevron-left"></i>
            </button>
            <button
              className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
              onClick={() => handleScroll("right")}
            >
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
        {props.loading && <Loader />}
        <div ref={Ref} className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide">
          {props.data.map((d) => (
            <div key={d._id} className="flex-none w-80 bg-white rounded-lg shadow-lg overflow-hidden">
              <Campaign
                id={d._id}
                handleClick={props.handleClick}
                title={d.title}
                description={d.description}
                image={d.imageUrl}
                requiredAmount={d.required}
                isActivated={d.isActivated}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/all-campaigns">
            <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OnGoingCampaigns;
