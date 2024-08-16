import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function SearchClick() {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState(new Set());

  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleCheckboxChange = (index: number) => {
    setSelectedItems(prevSelected => {
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

  return (
    <div className='container mx-auto bg-slate-800'>
      <div className='flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <Link to="/">
            <button type="button" className="text-white font-medium rounded-full text-sm p-2.5 inline-flex items-center mr-2">
              <svg className="w-7 h-7 transform rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </Link>
          <h1 className='text-3xl font-bold text-white flex-grow md:ml-8 p-4 flex flex-col'>Audit Report</h1>
        </div>
        <input type="text" placeholder="Contract Address:-" className="rounded-md w-64 h-9 placeholder-black font-semibold" />
      </div>

      {/* Main content and boxes */}
      <div className="flex-grow md:ml-24 p-6 flex flex-col">
        <div className="flex flex-wrap gap-4 md:gap-8 h-auto">
          <div className="w-full sm:w-1/2 h-36 md:w-60 bg-white shadow-md rounded-md p-4 mb-4">
            <h1>80 | 89</h1>
          </div>
          <div className="w-full sm:w-1/2 md:w-60 bg-white shadow-md rounded-md p-4 mb-4">
            fjgfh
          </div>
          <div className="w-full sm:w-1/2 md:w-60 bg-white shadow-md rounded-md p-4 mb-4">
            fjgfh
          </div>
          <div className="w-full sm:w-1/2 md:w-60 bg-white shadow-md rounded-md p-4 mb-4">
            fjgfh
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-6 w-11/12">
          <table className="min-w-full bg-white rounded-lg border-gray-300">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="p-3 text-center">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setSelectedItems(new Set(
                        checked
                          ? currentItems.map((_, idx) => (currentPage - 1) * itemsPerPage + idx)
                          : []
                      ));
                    }}
                  />
                </th>
                <th className="p-3 text-center">Bug ID</th>
                <th className="p-3 text-center">Severity</th>
                <th className="p-3 text-center">Description</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="p-3 text-center">
                    <input
                      type="checkbox"
                      checked={selectedItems.has((currentPage - 1) * itemsPerPage + index)}
                      onChange={() => handleCheckboxChange((currentPage - 1) * itemsPerPage + index)}
                    />
                  </td>
                  <td className="p-3 text-center">{item["Bug ID"]}</td>
                  <td className="p-3 text-center">{item["Severity"]}</td>
                  <td className="p-3 text-center">{item["Description"]}</td>
                </tr>
              ))}

              {/* Pagination */}
              <tr>
                <td colSpan={4} className="py-6">
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
                    {/* <span className="flex items-center">
                      Page: &nbsp;<span className='px-3 py-1 h-7 w-14 bg-gray-100 text-gray-700 rounded-md flex items-center justify-center'>{currentPage}</span>  &nbsp; of {totalPages} &nbsp;&nbsp;
                    </span> */}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
