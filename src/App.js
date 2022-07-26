import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home_internet from "./container/home_internet";

function App() {
    return (
        <BrowserRouter>
    <div className='App'>
        <Switch>
            <Route path='/'>
                <Home_internet/>
            </Route>
        </Switch>

    </div>
        </BrowserRouter>
);
}

export default App;
