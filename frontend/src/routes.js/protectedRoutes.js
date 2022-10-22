import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from '../pages/home';


function ProtectedRoutes() {
    
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </>
    )
}

export default ProtectedRoutes