import React from 'react';

export function Auditing() {
  return (
    <div>
      <div className='container mx-auto h-10 bg-white flex items-center justify-center'>
        <p>Introduction AI - Auditing Learn more</p>
      </div>

      <div className='container mx-auto h-15 bg-black flex items-center justify-between text-white p-4 mt-5'>
        <div className='flex items-center'>
          <img src='/images/image.png' className='h-10 mr-3'/>
          <h1>Auditing</h1>
        </div>
        <button className='bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600'>
          Address
        </button>
      </div>

      <div className='container mx-auto bg-blue-950 text-white p-6 mt-5'>
        <div className='ml-52 text-left'>
          <h2 className='text-1xl'>Provable Trust For All</h2>
          <h1 className='text-5xl font-bold mt-8'>
            Trusted Infrastructure for <span className='text-green-400'>Web-3</span>
          </h1>
          <p className='font-semibold mt-8 text-gray-400 text-1xl'>
            AI - Auditing is Web3's leading smart contract auditor and provides a <br />
            comprehensive suite of tools to secure the industry at scale.
          </p>

          <div className='flex items-center mt-6'>
            <input type='text' placeholder='Search Project by Token/ Contact address' className='w-full max-w-md p-2 rounded-l  bg-gray-300 text-center'/>
            <button className='bg-green-400 text-white p-2 rounded-r hover:bg-green-600 w-12'> <i className='fas fa-search'></i>
            </button>
          </div>
          
        </div>
      </div>

    <div>
      <div className='container border border-spacing-1 bg-white text-black w-56 h-64 ml-80 rounded-lg border-black'>
        <div className='mt-3'>
        <div className='flex items-center'>
          <img src='/images/m1.png' className='h-10 mr-3'/>
          <h1 className='font-bold'>Auditing</h1>
        </div>
        </div>
       
        </div>
        </div>
    </div>
  );
}
