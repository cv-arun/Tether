import React from 'react';
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


function ProfilePic() {
  return (
    <>
      <div className='flex justify-center'>
        <Button><input id='choose-file' style={{ display: 'none' }} type={'file'} />
          <label htmlFor="choose-file">Upload photo<AddPhotoAlternateIcon /></label></Button>
      </div>
      <hr />
      <h1>Suggested Photos</h1>
      <div className='overflow-y-auto grid grid-cols-3 gap-1 h-60'>
        {
          [...Array(12)].map(() => <div className=' max-w-[150px] aspect-square'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuP4A26vUkEZwYJL4zGV8KRxUbBmcX11Mdw&usqp=CAU' className=' max-w-[100%] aspect-square' alt='suggestions'/>
          </div>)
        }

      </div>

    </>
  )
}

export default ProfilePic