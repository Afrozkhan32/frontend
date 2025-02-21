import React from "react";

const Form = (props) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">{props.title}</h1>
        <form onSubmit={props.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="InputEmail" className="block text-gray-700 font-medium mb-2">
              Email address
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="InputEmail"
              aria-describedby="emailHelp"
              onChange={props.handleEmailChange}
              placeholder="Enter e-mail address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="InputPassword" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="InputPassword"
              onChange={props.handlePasswordChange}
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
