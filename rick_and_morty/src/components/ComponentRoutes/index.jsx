import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../../pages/home";
import Search from "../../pages/search";
import InfoPageCharacter from "../../pages/infoPageCharacter";
import NavBar from "../../pages/NavBar";

const ComponentRoutes = () => {
    return(
        <Routes>
           <Route element={<NavBar/>}>
                <Route index element={<Home/>}/>
                <Route path="search" element={<Search/>}/>
                <Route path="info/:id" element={<InfoPageCharacter/>}/>
           </Route>
        </Routes>
    )
}

export default ComponentRoutes