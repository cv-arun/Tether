import React,{useEffect} from 'react'
import { Routes, Route,useNavigate } from "react-router-dom";

import Home from '../pages/home';


function ProtectedRoutes() {
    const navigate=useNavigate()
    useEffect(()=>{
        let token=localStorage.getItem('userKey');
        !token && navigate('/login')
    },[])

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </>
    )
}

export default ProtectedRoutes