import React from 'react'

const InputField = ({ setPrompt }) => {
    return (
        <input
            type="text"
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type programming lang or technology..."
            className="w-[30rem] pl-2 rounded-lg shadow-md bg-white text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        />
    )
}
export default InputField
