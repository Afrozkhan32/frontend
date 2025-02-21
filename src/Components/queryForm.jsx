import React, { useState } from "react";
import { createQuery } from "../services/query";

const ContactusForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await createQuery({ email, message });
    if (res) {
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-4">
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email ID here..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your message here..."
            style={{ minHeight: "100px" }}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Send <i className="fa fa-paper-plane ml-2"></i>
        </button>
      </form>
    </div>
  );
};

export default ContactusForm;
