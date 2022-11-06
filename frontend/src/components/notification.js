import React from 'react'

function Notification() {
    return (
        <div className='border-x-2 bg-white  max-w-[690px] h-[100%] mx-auto shadow-md'>
            <div className='p-5 border-b-2'>
               <h1 className='text-3xl font-mono'> Notifications</h1>
            </div>
            <div className='flex m-3 p-2'>
                <div className='md:w-1/6 w-2/6 my-auto'>
                    <img className=' max-h-[100%] ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSQpuRwKcQD_-_2yf6EGsw56SsFVa4jdKaQ&usqp=CAU' alt='profile' />
                </div>
                <div className='  w-full flex flex-col mx-4'>
                    <p className='w-full p-2  rounded-xl flex-grow overflow-y-auto scrollbar-hide'>
                        <span>Name</span>
                        <span className='text-slate-600 max-h-[100px]'> posted a new photo</span>
                    </p>
                    <span className='ml-2 '>
                        <span>1 hour ago</span>
                    </span>

                </div>
            </div>
            <div className='flex m-3 p-2'>
                <div className='md:w-1/6 w-2/6 my-auto'>
                    <img className=' max-h-[100%] ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSQpuRwKcQD_-_2yf6EGsw56SsFVa4jdKaQ&usqp=CAU' alt='profile' />
                </div>
                <div className='  w-full flex flex-col mx-4'>
                    <p className='w-full p-2  rounded-xl flex-grow overflow-y-auto scrollbar-hide'>
                        <span>Name</span>
                        <span className='text-slate-600 max-h-[100px]'> posted a new photo</span>
                    </p>
                    <span className='ml-2 '>
                        <span>1 hour ago</span>
                    </span>

                </div>
            </div>
            <div className='flex m-3 p-2'>
                <div className='md:w-1/6 w-2/6 my-auto'>
                    <img className=' max-h-[100%] ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSQpuRwKcQD_-_2yf6EGsw56SsFVa4jdKaQ&usqp=CAU' alt='profile' />
                </div>
                <div className='  w-full flex flex-col mx-4'>
                    <p className='w-full p-2  rounded-xl flex-grow overflow-y-auto scrollbar-hide'>
                        <span>Name</span>
                        <span className='text-slate-600 max-h-[100px]'> posted a new photo</span>
                    </p>
                    <span className='ml-2 '>
                        <span>1 hour ago</span>
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Notification