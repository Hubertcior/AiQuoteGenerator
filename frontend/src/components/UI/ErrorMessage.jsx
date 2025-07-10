import React from 'react'

const ErrorMessage = ({error}) => {
    return (
        <div className="text-red-700 bg-red-100 border border-red-300 rounded-md px-4 py-2 mt-4 text-center font-medium shadow-sm">
            {error}
        </div>
    )
}
export default ErrorMessage
