import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

export function MyDashboard() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [selectedItems, setSelectedItems] = useState(new Set());

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

  const handlePageChange = (pageNumber:number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className='container mx-auto bg-customblue'>
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
          <h1 className='text-3xl font-bold text-white flex-grow md:ml-8 p-4 flex flex-col'>Dashboard</h1>
        </div>
      </div>

      {/* Main content and boxes */}
      <div className="flex-grow md:ml-24 p-6 flex flex-col">
        <div className="text-white font-semibold text-2xl">
          <h1>Welcome:</h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-6 w-11/12">
          <table className="min-w-full bg-myDashboard text-white rounded-lg border-gray-300">
            <thead>
              <tr className="border-b border-black">
                
                <th className="p-3 text-center">Bug ID</th>
                <th className="p-3 text-center">Severity</th>
                <th className="p-3 text-center">Description</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className="border-b border-black">
                  
                  <td className="p-3 text-center">{item["Bug ID"]}</td>
                  <td className="p-3 text-center">{item["Severity"]}</td>
                  <td className="p-3 text-center">{item["Description"]}</td>
                </tr>
              ))}

              {/* Pagination */}
              <tr>
                <td colSpan={4} className="py-6">
                  <div className="flex justify-end space-x-3 mr-11">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-1 h-5 bg-sky-700 text-black rounded-md shadow-md flex items-center text-sm justify-center"
                    >
                      Prev
                    </button>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 h-5 bg-sky-700  text-black rounded-md shadow-md flex items-center text-sm justify-center"
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
  );
}
