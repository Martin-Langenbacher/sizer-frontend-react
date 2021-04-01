import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Sizes from "./Sizes";
import Users from "./Users";

function App() {

    function getSelectUserHandler(user)
    {
        alert( user.id);
        // return property => this.play(property);
    }


    return (


        <div className="App">

            <p>
                <Users onSelectUser={ getSelectUserHandler }></Users>
            </p>
            <p>
                <Sizes></Sizes>
            </p>

        </div>
    );
}

export default App;
