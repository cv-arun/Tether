import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddReactionIcon from '@mui/icons-material/AddReaction';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:'10px' ,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  shadow:''
};


export default function NestedModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  React.useEffect(() => {
    setOpen(true)
  }, [props])
  return (
    <div>
      <Button onClick={handleOpen}></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400}}>
          <div className='h-80'>
            <div className='flex '><h2 className='text-2xl text-right w-4/6'>Create Post</h2>
              <span className='w-2/6 flex flex-row-reverse'><CloseIcon onClick={handleClose} /></span></div>
            <hr />
            <div className='flex mt-2'>

              <img className=' max-h-12 my-auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSQpuRwKcQD_-_2yf6EGsw56SsFVa4jdKaQ&usqp=CAU' alt='profile' />

              <div className='m-3'>
                <h3 className='m-1 text-lg '>Name</h3>
                <select className='bottom-2 rounded-sm border-gray-400 hover:text-lg'>
                  <option>Friends</option>
                  <option >Public</option>
                </select>
              </div>

            </div>
            <div className='flex flex-col  justify-between  h-[220px]'>
              <input placeholder='Whats on your Mind?' className='border-0 w-full mr-5 p-4' />
              <div className='mb-3'>
                <div className='w-full my-3 h-[60px] rounded-md shadow-md ring-2 ring-slate-200 flex items-center justify-between px-4'>
                  <p>Add to your Post</p>
                  <AddPhotoAlternateIcon />
                  <AddReactionIcon />
                </div>
                <Button variant='contained' sx={{ width: '100%' }}>Post</Button>
              </div>

            </div>
          </div>


        </Box>
      </Modal>
    </div>
  );
}

