import React from 'react';

const LatestNews = () => {
    const newsItems = [
        "🚨 Breaking News • A major update has just been released • Important details coming shortly • Stay with us for live updates"

    ];

    return (
        <div className='flex items-center gap-5 bg-gray-100 p-3 overflow-hidden'>
            <p className='bg-red-600 text-white px-4 py-2 font-semibold whitespace-nowrap'>Latest</p>
            
            <div className='flex-1 overflow-hidden relative'>
                <div className='animate-marquee flex gap-8 whitespace-nowrap'>
                    {newsItems.map((news, index) => (
                        <span key={index} className='font-bold text-gray-800'>
                            {news}
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {newsItems.map((news, index) => (
                        <span key={`dup-${index}`} className='font-bold text-gray-800'>
                            {news}
                        </span>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
    0% {
        transform: translateX(100%);  /* Start from right */
    }
    100% {
        transform: translateX(-100%); /* Exit to left */
    }
}

.animate-marquee {
    animation: marquee 20s linear infinite;
}
                
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default LatestNews;