import React from "react";
import {Routes, Route} from "react-router-dom"
import UsersList from "./components/UsersList";
import UserInfo from "./components/UserInfo";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<UsersList/>}/>
                <Route path="/:uuid" element={<UserInfo/>}/>
            </Routes>
        </>
    );
}

export default App;
