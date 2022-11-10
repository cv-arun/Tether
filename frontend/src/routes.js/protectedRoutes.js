import React,{useEffect} from 'react'
import { Routes, Route,useNavigate } from "react-router-dom";

import Home from '../pages/home';
import Feed from '../pages/feedPage';
import Mycommunity from '../pages/myCommunity';
import Notification from '../pages/notification';
import Profile from '../pages/profile';
import Settings from '../pages/settings';
import Chat from '../pages/chat';
import isLoggedIn from '../api.js/isLoggedIn';



function ProtectedRoutes() {
    const navigate=useNavigate()
    useEffect(()=>{
        let token=localStorage.getItem('userKey');
        !token?navigate('/login'):isLoggedIn().then(data=>{
            console.log(data,'log data')
            !data.loggedIn && navigate('/login')
        })
        
    },[])

    return (
        <>
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/" element={<Feed />} />
                <Route exact path="/chat" element={<Chat />} />
                <Route exact path="/community" element={<Mycommunity />} />
                <Route exact path="/notification" element={<Notification />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/settings" element={<Settings />} />
            </Routes>
        </>
    )
}

export default ProtectedRoutes