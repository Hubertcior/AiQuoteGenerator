import React from 'react'

const Quote = ({text}) => {
    return (
        <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 bg-white bg-opacity-80 rounded-xl px-8 py-6 shadow-lg max-w-2xl mx-auto mt-8 transition-all duration-300">
            {text ? text : "Feel free to generate"}
        </h1>
    )
}
export default Quote
