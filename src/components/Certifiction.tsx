export function Certification(){
    
    return(
        <div className='flex items-center mt-2 space-x-12'>

                <div className="bg-white w-64 h-56 border shadow-custom-gray p-4 rounded-lg ml-16 mt-10 flex flex-col">
                    <div className="flex items-start">
                        <img src="/images/m14.png" className="h-10 mr-3" alt="Microsoft Azure" />
                        <h1 className="font-semibold text-xl text-blue-900">Microsoft Azure</h1>
                    </div>
                    <p className="text-gray-700 mt-10 text-xs">
                        "AI Auditing identifies and helps patch
                        critical vulnerabilities in Microsoft Azure's
                        cloud infrastructure, ensuring enhanced
                        data security for millions of users."
                    </p>
                </div>


                <div className='bg-white w-64 h-56 border shadow-custom-gray p-4 rounded-lg ml-20 mt-10 flex flex-col'>
                    <div className="flex items-start">
                        <img src='/images/m15.png' className='h-10 mr-3' alt="Google Cloud" />
                        <div>
                            <h1 className='font-bold text-2xl text-black'>Google Cloud</h1>
                        </div>
                    </div>
                    <p className="text-gray-700 mt-10 text-xs">
                        "AI Auditing identifies and helps patch
                        critical vulnerabilities in Google Cloud's
                        cloud infrastructure, ensuring enhanced
                        data security for millions of users."
                    </p>
                </div>


                <div className='bg-white w-64 h-56 border shadow-custom-gray p-4 rounded-lg ml-20 mt-10 flex flex-col'>
                    <div className='flex items-center mb-2'>
                        <img src='/images/m16.png' className='h-10 mr-3 w-72' alt="Google Cloud" />

                    </div>
                    <p className="text-gray-700 text-xs mt-10">
                        "AI Auditing identifies and helps patch
                        critical vulnerabilities in Google Cloud's
                        cloud infrastructure, ensuring enhanced
                        data security for millions of users."
                    </p>
                </div>



</div>
    )
}