import React from "react";

const Form = (props) => {
  return (
    <div className="max-w-2xl mx-auto my-6 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{props.title}</h3>
      <form onSubmit={props.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="campaign-name" className="block text-gray-700 font-medium">Campaign Name</label>
          <input
            type="text"
            value={props.data.title}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="campaign-name"
            onChange={props.handleCampaignNameChange}
            placeholder="Enter Campaign Name"
            required
          />
        </div>
        <div>
          <label htmlFor="campaign-subtitle" className="block text-gray-700 font-medium">Campaign Sub Heading</label>
          <input
            type="text"
            value={props.data.subTitle}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="campaign-subtitle"
            onChange={props.handleCampaignSubTitleChange}
            placeholder="Enter Campaign Sub Heading"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-gray-700 font-medium">Image URL</label>
          <input
            type="text"
            value={props.data.imageUrl}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="image"
            onChange={props.handleImageChange}
            placeholder="Enter Image URL"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700 font-medium">Campaign Description</label>
          <textarea
            value={props.data.description}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="description"
            onChange={props.handleCampaignDescriptionChange}
            placeholder="Enter description..."
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="amount" className="block text-gray-700 font-medium">Amount (Rs)</label>
          <input
            type="number"
            value={props.data.required}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="amount"
            onChange={props.handleAmountChange}
            placeholder="Enter amount to be raised"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-5 w-5 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
            id="activate"
            checked={props.data.isActivated}
            onChange={props.handleActivateBtn}
          />
          <label htmlFor="activate" className="text-gray-700 font-medium">Activate</label>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg shadow-md transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
