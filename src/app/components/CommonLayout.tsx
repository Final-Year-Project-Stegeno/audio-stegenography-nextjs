import React from 'react'

type propsType = {
    title: string,
    children: React.ReactNode
}

const CommonLayout: React.FC<propsType> = ({ title, children }) => {
    return (
        <div className='w-full max-w-screen-xl mx-auto min-h-screen pt-24'>
            <h1 className='text-4xl font-semibold text-center capitalize my-6'>{title}</h1>
            {children}
        </div>
    )
}

export default CommonLayout
