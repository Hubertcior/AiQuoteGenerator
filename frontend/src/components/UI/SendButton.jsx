import React from 'react'

const SendButton = ({onClick, text}) => {
    return (
        <div
            onClick={onClick}
            className="cursor-pointer px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-colors duration-200 active:scale-95 select-none"
        >
            {text}
        </div>
    )
}
export default SendButton
