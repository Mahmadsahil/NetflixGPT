import React from 'react';
import VideoShimmer from '../Shimmer/VideoShimmer';


const MoviesListShimmer = () => {
    let items = [0, 1, 2, 3, 4, 5, 6];
    return (
        <div className="m-8">
            <div className='animate-pulse h-4 w-20 md:h-[30px] md:w-40 rounded-xl bg-slate-200 my-2 bg-opacity-40'></div>
            <div className="flex flex-row gap-4 overflow-x-auto scroll scroll-smooth">
                {items.map((item, index) => (
                    <VideoShimmer key={index} />
                ))}
            </div>
        </div>
    );
}

export default MoviesListShimmer;