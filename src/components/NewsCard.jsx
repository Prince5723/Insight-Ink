import React from 'react'

function NewsCard({ country, category, title, desc, img, fullArticle, className}) {

    const handleCardClick = () => {
        // Open the URL in a new tab when the card is clicked
        window.open(fullArticle, '_blank');
      };

    return (
        <div className={className}>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={handleCardClick}>

                <img className="rounded-t-lg h-60 w-full" src={img} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" >{desc}</p>
                    <a href={fullArticle} target='_blank' rel='noreferrer' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg style={{background:'transparent'}} className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default NewsCard
