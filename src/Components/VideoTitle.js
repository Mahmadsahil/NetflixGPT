const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen h-full text-white pt-24 md:pt-64 px-14 absolute bg-gradient-to-r from-black ">
      <div className="w-8/12 md:w-6/12 flex flex-col gap-2 mt-8">
        <p className="text-lg md:my-0 md:text-3xl mt-2 py-1 text-gray-200">{title}</p>
        <p className="text-xs md:block md:text-base py-2 ">{description}</p>
        <div className='flex gap-2'>
          <button className="text-xs md:text-base py-1 md:py-2 px-4 md:w-28 bg-white text-gray-600 m-1 rounded-md hover:bg-slate-300">Play</button>
          <button className="hidden md:block py-2 px-4 w-28 bg-slate-700 text-gray-200 m-1 rounded-md hover:bg-slate-00">More info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle;