import React from "react";
import './common/Reset.scss'
import './App.scss'
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../containers/Header";
import MainPage from "../containers/MainPage";




const App = () => {

    return (
        <>
            <Header />
            <Switch>
                <Route path={'/'} component={MainPage} exact />
                <Redirect to={'/'} />
            </Switch>
           
        </>
    )
}
export default App;