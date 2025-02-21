import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Pagination from "./pagination";
import Loader from "./loader";
import { getAllQueries, deleteQuery } from "../services/query";
import { paginate } from "../utills/paginate";

const Query = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function getData() {
      const { data, err } = await getAllQueries();
      if (!err) {
        setData(data);
        setLoading(false);
      } else {
        toast.error(err.response?.data?.message || "Something went wrong");
        console.error("Error", err);
      }
    }
    getData();
  }, []);

  if (!data || data.length === 0) {
    return loading ? <Loader /> : <p className="text-center text-gray-500">No messages found.</p>;
  }

  const handlePageChange = (page) => setCurrentPage(page);
  const pageSize = 5;
  const showData = paginate(data, currentPage, pageSize);

  const handleDeleteBtn = async (id) => {
    let originalData = [...data];
    setData(data.filter((d) => d._id !== id));
    let res = await deleteQuery(id);
    if (!res) setData(originalData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Messages</h2>
      {loading && <Loader />}
      <ul className="space-y-4">
        {showData.map((d) => (
          <li key={d._id} className="p-4 bg-gray-100 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <div className="text-gray-800">
                <b>Email:</b> {d.email}
              </div>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                onClick={() => handleDeleteBtn(d._id)}
              >
                Delete
              </button>
            </div>
            <div className="text-gray-700 text-justify">
              <b>Message:</b>
              <p className="mt-1">{d.message}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Pagination itemsCount={data.length} pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Query;
