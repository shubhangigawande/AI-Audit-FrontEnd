import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function SearchClick() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedRecord, setClickedRecord] = useState(null);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    axios
      .post("/data.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCheckboxChange = (index) => {
    setSelectedItems((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(index)) {
        newSelected.delete(index);
      } else {
        newSelected.add(index);
      }
      return newSelected;
    });
  };

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openModal = (record) => {
    setClickedRecord(record);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setClickedRecord(null);
  };

  return (
    <div className="ml-10 mr-10 mx-auto min-h-screen bg-SearchClick">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link to="/">
            <button
              type="button"
              className="text-white font-medium rounded-full text-sm p-2.5 inline-flex items-center mr-2"
            >
              <svg
                className="w-7 h-7 transform rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-white flex-grow md:ml-8 p-4 flex flex-col">
            Audit Report
          </h1>
        </div>
        <input
          type="text"
          placeholder="Contract Address:-"
          className="rounded-md w-64 h-9 placeholder-black font-semibold"
        />
      </div>

      {/* Main content and boxes */}
      <div className="flex-grow md:ml-24 p-6 flex flex-col">
        <div className="flex flex-wrap gap-4 md:gap-8 h-auto space-x-6">
          <div className="w-full sm:w-1/2 h-36 md:w-64 bg-white shadow-custom-black rounded-md p-4 mb-4">
            <div className="rounded-md bg-green-300  w-32 h-8 ml-4">
              <h1 className="p-1 font-bold text-center text-md">Audit Score</h1>
              <div>
                {currentItems.map((item, index) => (
                  <div key={index}>
                    <h1 className="p-3 font-semibold text-4xl">
                      {item["score"]}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-64 bg-white shadow-custom-black rounded-md p-4 mb-4">
            <div className="rounded-md bg-red-200 w-28 h-8 ml-4">
              <h1 className="font-semibold p-1 text-center text-sm text-red-600">
                High Severity
              </h1>
              <div>
                {currentItems.map((item, index) => (
                  <div key={index}>
                    <h1 className="p-1 font-semibold text-4xl">
                      {item["high"]}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-64 bg-white shadow-custom-black rounded-md p-4 mb-4">
            <div className="rounded-md bg-gray-300 w-32 h-8 ml-4">
              <h1 className="p-1 font-semibold text-sm">Medium Severity</h1>
              <div>
                {currentItems.map((item, index) => (
                  <div key={index}>
                    <h1 className="p-1 font-semibold text-4xl">
                      {item["medium"]}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-64 bg-white shadow-custom-black rounded-md p-4 mb-4">
            <div className="rounded-md bg-green-200 w-32 h-8 ml-4">
              <h1 className="p-1 font-semibold text-sm">Low Severity</h1>
              <div>
                {currentItems.map((item, index) => (
                  <div key={index}>
                    <h1 className="p-1 font-semibold text-4xl">
                      {item["low"]}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-6 w-11/12 shadow-custom-black">
          <table className="min-w-full bg-white rounded-lg border-gray-300">
            <thead>
              <tr className="border-b-2 border-gray-300 h-16">
                <th className="p-3 text-center">Bug ID</th>
                <th className="p-3 text-center">Severity</th>
                <th className="p-3 text-center">Description</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr
                  key={index}
                  className="border-b-2 border-gray-300 h-16 cursor-pointer"
                  onClick={() => index === 0 && openModal(item)}
                >
                  <td className="p-3 text-center align-middle">
                    {item["_id"]}
                  </td>
                  <td className="p-3 text-center align-middle">
                    {item["level"]}
                  </td>
                  <td className="p-3 text-center align-middle">
                    {item["description"]}
                  </td>
                </tr>
              ))}

              <tr>
                <td colSpan={3} className="py-6">
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-1 h-5 bg-gray-100 text-gray-700 rounded-md shadow-md flex items-center text-sm justify-center"
                    >
                      Prev
                    </button>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 h-5 bg-gray-100 text-gray-700 rounded-md shadow-md flex items-center text-sm justify-center"
                    >
                      Next
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {isModalOpen && clickedRecord && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-[52rem] p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center pb-2 mb-4">
                <h1 className="text-3xl text-gray-600 font-semibold">
                  Bugs Details
                </h1>
                <button
                  onClick={closeModal}
                  className="text-3xl w-11 hover:text-gray-600"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>

              <hr className="border-gray-400 w-full mb-10" />

              {/* Modal Content */}
              <div className="space-y-4">
                <div className="font-semibold">
                  <h1 className="text-gray-600 text-xl">Bug ID NO</h1>
                  <p className="mt-2 text-gray-500">{clickedRecord["_id"]}</p>
                </div>

                <div className="font-semibold ">
                  <h1 className="text-gray-600 mt-8  text-xl">Problem</h1>
                  <p className="mt-2">{clickedRecord["problem"]}</p>
                  <p className="text-sm text-gray-500 font-san">Unexpected Logout occurs when user clicks 'Save'</p>
                </div>

                <div className="font-semibold">
                  <h1 className="text-gray-600 mt-8 text-xl">Solution</h1>
                  <p className="mt-2">{clickedRecord["solution"]}</p>
                  <p className="text-sm text-gray-500 font-san">Fixed the session timeout setting and updated the <br /> save function to prevent session termination.</p>
                </div>

                <div className="font-semibold">
                  <h1 className="text-gray-600 mt-8 text-xl">Recommendations</h1>
                  <p className="mt-2">{clickedRecord["recommendations"]}</p>
                  <p className="text-sm text-gray-500 font-san">Regularly review and test session managment <br /> setting to ensure stability.</p>
                </div>

                <button
  onClick={closeModal}
  className="bg-gray-300 w-24 h-8 rounded-md mt-5"
>
  Close
</button>


                

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
