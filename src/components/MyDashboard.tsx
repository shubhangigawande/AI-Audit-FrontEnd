import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

export function MyDashboard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='container mx-auto bg-blue-950'>
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
        <div className="overflow-x-auto mt-12 w-11/12 shadow-custom-black">
          <table className="min-w-full bg-sky-900  text-white">
            <thead>
              <tr className="border-b border-black">
                <th className="p-3 text-center">Address</th>
                <th className="p-3 text-center">Network</th>
                <th className="p-3 text-center">Report</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b border-black">
                  <td className="p-3 text-center">{item["Bug ID"]}</td>
                  <td className="p-3 text-center">{item["Severity"]}</td>
                  <td className="p-3 text-center">{item["Description"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
