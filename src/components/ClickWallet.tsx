import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ClickWallet() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='text-white'>
      {/* Button to trigger the modal */}
      <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Open Modal
      </button>

      {/* Conditional rendering of the modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
            {/* Modal Header */}
            <div className='container mx-auto bg-black flex items-center justify-between text-white p-4 rounded-t-lg'>
              <div className='flex items-center'>
                <img src='/images/image.png' className='h-10 mr-3' alt='WalletConnect Logo' />
                <h1 className='text-white text-lg font-semibold'>WalletConnect</h1>
              </div>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-800" aria-label="Close">
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <h2 className="text-xl font-semibold mb-4 mt-4">Modal Title</h2>
            <p className="text-gray-700 mb-4">This is the modal content. You can add any HTML here.</p>

            {/* Modal Footer */}
            <div className="flex justify-end">
              <Link to="/">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Go to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
