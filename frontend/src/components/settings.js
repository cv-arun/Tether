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
                        <div class="form-group mb-6">
                            <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">current Password</label>
                            <input type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0
                             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
                                placeholder=" current Password" />
                        </div>
                        <div class="form-group mb-6">
                            <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">New Password</label>
                            <input type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0
                             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
                                placeholder="New Password" />
                        </div>
                        <div class="form-group mb-6">
                            <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Confirm Password</label>
                            <input type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0
                             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
                                placeholder="Cinfirm Password" />
                        </div>
                    </div>
                </div>}
                {tab == '2' && <div>privacy</div>}

            </div>
        </>
    )
}

export default Settings