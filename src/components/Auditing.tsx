import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Auditing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  // Function to handle click on any icon or button
  const handleClick = () => {
    setIsButtonVisible(false);
  };


  return (
    <div>
      <div className='container mx-auto h-10 bg-white flex items-center justify-center'>
        <p> Introduction AI - Auditing Learn more</p>
      </div>

      <div className='container mx-auto h-14   bg-black flex items-center justify-between text-white p-4'>
        <div className='flex items-center h-9'>
          <img src='/images/image.png' className=' mr-3 h-12' alt='Auditing Logo' />

          <h1 className='text-xl font-medium'>AUDITING</h1>
        </div>

        {!isButtonVisible && (
          <Link to="/MyDashboard"><button className='bg-customGreen font-semibold text-white ml-96 px-4 py-2 rounded mr-[-26rem] hover:bg-green-600'>MyDashboard</button></Link>
        )}

        {/* The button opens the modal, no <Link> wrapping needed */}
        <button onClick={openModal} className='bg-customGreen font-semibold text-white px-4 py-2 rounded hover:bg-green-600'>
          WalletConnect
        </button>
      </div>

      {/* Conditional rendering of the modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-blue-400 rounded-lg shadow-lg max-w-lg relative w-80">
            {/* Modal Header */}
            <div className='container mx-auto flex items-center justify-between text-white rounded-t-lg ml-5'>
              <div className='flex items-center'>

                <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="4 19 8 13 12 15 16 10 20 14 20 19 4 19" />
                  <polyline points="4 12 7 8 11 10 16 4 20 8" /></svg>
                <h1 className='text-white text-lg p-2 font-semibold'>WalletConnect</h1>
              </div>

              <div onClick={handleClick} className="bg-blue-900 w-6 h-6 mr-9 rounded-3xl flex items-center justify-center mt-2">
                <button onClick={closeModal} className="text-white text-xl mb-1 hover:text-gray-600" aria-label="Close">
                  &times;
                </button>
              </div>

            </div>

            {/* Modal Body */}
            <div className="bg-black rounded-lg rounded-t-3xl  w-80 h-1/6">

              <div className="flex flex-col items-center mt-3">
                <div className="flex items-center space-x-2">
                  <h1 className="text-white font-semibold text-center text-xl mt-3">Connect Your Wallet</h1>
                  <svg className="h-5 w-5 mt-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </div>
                <hr className="border-gray-600 w-full mt-5" />
              </div>
              <div className='flex mt-4 ml-4 space-x-4'>
                <div className='flex items-center'>
                  <svg className="h-5 w-5 text-blue-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="7" y="4" width="10" height="16" rx="1" />
                    <line x1="11" y1="5" x2="13" y2="5" />
                    <line x1="12" y1="17" x2="12" y2="17.01" />
                  </svg>
                  <span className='text-blue-500 ml-2 font-semibold'>Mobile</span>
                </div>

                <div className='flex items-center text-gray-400'>
                  <svg className="h-5 w-5 ml-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                  </svg>
                  <span className='ml-2 text-sm font-semibold'>Scan with your wallet</span>
                </div>
              </div>


              <div className="flex flex-col items-center mt-5">
                <div className="flex items-center space-x-2">
                  <img src='/images/m23.png' className='w-56 h-52' />
                </div>
              </div>

              <div className='mt-7 flex items-center ml-16'>
                <svg className="h-5 w-5 text-blue-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="4" width="18" height="12" rx="1" />
                  <line x1="7" y1="20" x2="17" y2="20" />  <line x1="9" y1="16" x2="9" y2="20" />  <line x1="15" y1="16" x2="15" y2="20" /></svg>
                <span className='font-semibold ml-2 text-blue-500'>Desktop</span>
              </div>


              {/* Modal Footer */}

              <div onClick={handleClick} className='flex justify-between text-center mx-12 mt-5'>
                <Link onClick={closeModal} to='/'><img src='/images/m24.png' className='w-9 h-9' /></Link>
                <Link onClick={closeModal} to='/'><img src='/images/m25.png' className='w-9 h-9' /></Link>
                <Link onClick={closeModal} to='/'><img src='/images/m26.png' className='w-9 h-9' /></Link>
                <Link onClick={closeModal} to='/'><img src='/images/m27.png' className='w-9 h-9' /></Link>

              </div>
              <div onClick={handleClick} className='text-white text-xs flex items-center ml-12'>
                <Link onClick={closeModal} to='/'><h4>Coin Base</h4></Link>&nbsp; &nbsp;
                <Link onClick={closeModal} to='/'><h4>Trust Wallet</h4></Link>&nbsp; &nbsp;
                <Link onClick={closeModal} to='/'><h4>Thirdweb</h4></Link>&nbsp; &nbsp;
                <Link onClick={closeModal} to='/'> <h4>Zerion</h4></Link>&nbsp; &nbsp;
              </div>

              {/* New Close Button
        <div className="flex justify-center mt-5">
          <button onClick={closeModal} className="text-white bg-red-500 hover:bg-red-700 p-2 rounded-lg">
            Close Popup
          </button>
        </div> */}



              <div>
                <h3>dsvcdsv</h3>
                <h3>dsvcdsv</h3>
              </div>


            </div>




          </div>
        </div>
      )}

      <div className='relative container mx-auto bg-customblue text-white p-6 h-[35rem]'>
        <div className='ml-52 text-left mt-7'>
          <h2 className='text font-normal'>Provable Trust For All</h2>
          <h1 className='text-5xl mt-5 font-semibold'>
            Trusted Infrastructure for  <span className='text-customGreen'>Web-3</span>
          </h1>
          <p className='font-semibold mt-6 text-gray-400 text-1xl'>
            AI - Auditing is Web3's leading smart contract auditor and provides a <br />
            comprehensive suite of tools to secure the industry at scale.
          </p>

          <div className='flex items-center mt-6 '>
            <div className='px-2'>
              <select className='h-12 w-20 text-center rounded-lg text-gray-700'>
                <option selected>ETH</option>
                <option>BNB</option>
              </select>
            </div>

            <input type='text' placeholder='Search Project by Token/ Contact address' className='w-full max-w-md p-2 text-black rounded-l h-12 placeholder-white font-semibold bg-gray-300 text-center' />
            <Link to="/SearchClick">
              <button className='bg-customGreen p-2 h-12 rounded-r hover:bg-green-600 w-12'>
                <i className='fas fa-search'></i>
              </button>
            </Link>
          </div>
        </div>

        <div className='flex space-x-8 mt-20 ml-52'>
          <div className='relative border bg-white text-black w-72 h-96 rounded-lg border-gray-500 shadow-lg'>
            <div className='mt-3 ml-2'>
              <div className='flex items-center'>
                <img src='/images/m1.png' className='h-10 mr-3' alt='Service Icon' />
                <h1 className='font-bold text-lg'>Code Security Audits</h1>
              </div>
              <h2 className='ml-3 font-semibold mt-3'>Smart Contract Audit</h2>

              <div className='flex items-center w-10 h-6 pt-6'>
                <img src='/images/m2.png' alt='Icon' />
                <img src='/images/m3.png' alt='Icon' />
                <img src='/images/m4.png' alt='Icon' />
                <img src='/images/m5.png' alt='Icon' />
                <img src='/images/m6.png' alt='Icon' />
              </div>

              <div className='mt-11 bg-gradient-to-tl from-gray-300 to-white w-64 h-52 rounded-lg shadow-lg ml-3'>
                <div className='ml-6 mt-4'>
                  <h1 className='font-semibold text-sm mt-8'>
                    SMART<br />CONTRACT
                  </h1>
                  <div className='flex items-start mt-2'>
                    <p className='text-[5px] mr-2 mt-4'>
                      Lorem ipsum, dolor sit amet atque consectetur. ipsa doloremque quis magnam asperiores, sapiente alias veritatis laborum velit molestiae.
                      <button className='w-16 mt-10 h-3 mb-14 bg-gradient-to-r from-blue-500 to-sky-500 text-white text-text-[7px] rounded-lg hover:from-blue-700 hover:to-sky-700'>
                        GET STARTED
                      </button>

                    </p>

                    <div className='flex-shrink-0'>
                      <img src='/images/m7.png' alt='Icon' className='w-40 mr-2 h-40' />
                    </div>
                  </div>

                </div>
              </div>


            </div>
          </div>

          <div className='bg-slate-50  w-60 h-28 border rounded-lg border-gray-500'>
            <div className='flex items-center ml-4 mt-2 '>
              <img src='/images/m8.png' className='h-10 mr-3' alt='Trustworthy Icon' />
              <h1 className='font-semibold text-lg text-black'>TrustWorthy</h1>
            </div>
            <p className='text-gray-700  ml-4 mt-5 text-xs'>Security Score & Ranking</p>
          </div>

          <div className='bg-slate-50 w-60 h-28 border rounded-lg border-gray-500'>
            <div className='flex items-center ml-4 mt-2 '>
              <img src='/images/m9.png' className='h-8 mr-3' alt='Sky Icon' />
              <h1 className='font-semibold text-lg text-black'>Sky</h1>
            </div>
            <p className='text-gray-700  ml-4 mt-5 text-xs'>Compliance, AML and Risk Management</p>
          </div>
        </div>

        <div className='flex mt-8 ml-52 space-x-8'>
          <div className='bg-slate-50 w-60 h-28 border rounded-lg ml-80 -mt-72 border-gray-500'>
            <div className='flex items-center ml-4 mt-2 '>
              <img src='/images/m10.png' className='h-6 mr-3' alt='Secure Icon' />
              <h1 className='font-semibold text-lg text-black'>Secure</h1>
            </div>
            <p className='text-gray-700  ml-4 mt-5 text-xs'>Fully Secure and Responsible</p>
          </div>

          <div className='bg-slate-50 w-60 h-28 border  rounded-lg ml-80 -mt-72 border-gray-500'>
            <div className='flex items-center ml-4 mt-2 border-gray-500'>
              <img src='/images/m11.png' className='h-7 mr-3' alt='Pen Testing Icon' />
              <h1 className='font-semibold text-lg text-black'>Pen Testing</h1>
            </div>
            <p className='text-gray-700  ml-4 mt-5 text-xs'>In-Depth Attack Simulation</p>
          </div>
        </div>

        <div className='flex space-x-11 mt-32 space-x-8 ml-52 '>
          <div className='bg-slate-50 w-60 h-28 border rounded-lg ml-80 -mt-72 border-gray-500'>
            <div className='flex items-center ml-4 mt-2 '>
              <img src='/images/m12.png' className='h-7 mr-3' alt='Bug Bounty Icon' />
              <h1 className='font-semibold text-lg text-black'>Bug Bounty</h1>
            </div>
            <p className='text-gray-700  ml-4 mt-5 text-xs'>Open Source bug detection</p>
          </div>

          <div className='bg-slate-50 w-60 h-28 border rounded-lg ml-80 -mt-72 border-gray-500'>
            <div className='flex items-center ml-4 mt-2 '>
              <img src='/images/m13.png' className='h-7 mr-3' alt='Formal Testing Icon' />
              <h1 className='font-semibold text-lg text-black'>Formal testing</h1>
            </div>
            <p className='text-gray-700  ml-4 mt-5 text-xs'>Web3 Mathematics Guarantees</p>
          </div>
        </div>
      </div>
    </div>
  );
}