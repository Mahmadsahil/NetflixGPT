import React from 'react'

const HeaderShimmer = () => {
    return (
        <div className='fixed flex flex-col md:flex-row justify-between items-center p-1 h-16 w-screen bg-gradient-to-b from-black z-50'>
            <div>
                <div className='h-8 w-20 p-2 md:ml-12 bg-gray-300 rounded-lg animate-pulse'></div>
            </div>

            <div className='flex gap-12 mr-12'>
                <div className='h-8 w-20 p-2 bg-gray-300 rounded-lg animate-pulse'></div>
                <div className='h-8 w-20 p-2 bg-gray-300 rounded-lg animate-pulse'></div>
                <div className='h-8 w-20 p-2 bg-gray-300 rounded-lg animate-pulse'></div>

            </div>
        </div>
    )
}

export default HeaderShimmer