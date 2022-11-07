import React, { useEffect, useState } from 'react';



function Settings() {
    const [tab, setTab] = useState('1');
    useEffect(() => {
        console.log(tab)
    }, [tab])
    const handleClick = (e) => {
        console.log(e.target)
        setTab(e.target.id)
    }
    return (
        <>
            <div className='border-x-2 bg-white  max-w-[690px] min-h-[80vh] mx-auto shadow-md flex flex-col rounded-md p-3'>
                <div className='flex gap-10' id='4' onClick={handleClick}>
                    <button className='focus:ring-2 p-3 border-' id='1'>Password</button>
                    
                    <button className='focus:ring-2 p-3' id='2'>Privacy</button>
                </div>
                <hr />

                {tab == '1' && <div >
                    <div className='mx-auto w-2/3 flex flex-col gap-6 py-3 '>
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                current password
                            </label>
                            <input
                                type="password"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 block w-full rounded-md ring-2 shadow-sm  sm:text-sm h-10"
                            />
                        </div>
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                New password
                            </label>
                            <input
                                type="password"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 block w-full rounded-md ring-2 border-gray-300 shadow-sm  sm:text-sm h-10"
                            />
                        </div>
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Confirm password
                            </label>
                            <input
                                type="password"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 block w-full rounded-md ring-2 border-gray-300 shadow-sm  sm:text-sm h-10"
                            />
                        </div>
                    </div>
                </div>}
                {tab == '2' && <div>privacy</div>}

            </div>
        </>
    )
}

export default Settings