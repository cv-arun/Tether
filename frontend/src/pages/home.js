import { Button } from '@mui/material';
import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


function Home() {
const navigate= useNavigate()
  useEffect(()=>{
   const userKey=localStorage.getItem('userKey')
   !userKey && navigate('/login')

  },[])

  return (
    <>
    <Button onClick={()=>{ localStorage.removeItem('userKey'); navigate('/login')}}>Logout</Button>
    <div>home </div>
    </>
  )
}

export default Home