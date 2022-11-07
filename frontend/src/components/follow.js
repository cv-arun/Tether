import React from 'react'

function Follow({ Following, Followers }) {


  return (
    <>  <div className='text-center font-sans text-2xl'>{Following?'Following':'Followers'}</div>
      <hr />
      <div className='flex flex-col p-1 overflow-y-auto scrollbar-hide gap-2 h-64'>
        {[...Array(17)].map(() => <div className='flex'>
          <div className='md:w-1/6 w-2/6 my-auto'>
            <img className=' max-h-[100%] ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSQpuRwKcQD_-_2yf6EGsw56SsFVa4jdKaQ&usqp=CAU' alt='profile' />
          </div>
          <div className='  w-full flex flex-col mx-4'>
            <p className='w-full p-2  rounded-xl '>
              Name
            </p>
          </div>
        </div>
        )}



      </div>


    </>
  )
}

export default Follow