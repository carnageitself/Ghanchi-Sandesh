import React from 'react'

const Dropdown = () => {
    return (
        <>
            <span aria-label="primary" className="relative z-20 flex-row flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">

                <div className="relative group">
                    <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                        <span>First Dropdown</span>
                    </button>
                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block">

                        <div className="px-2 pt-2 pb-4 bg-gray-200 shadow-lg">
                            <div className="flex flex-col">
                                <div>
                                    dropdown
                                </div>

                                <div>
                                    dropdown
                                </div>
                                <div>
                                    dropdown
                                </div>
                                <div>
                                    dropdown
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </span>
        </>
    )
}

export default Dropdown

