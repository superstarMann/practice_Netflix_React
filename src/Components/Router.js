import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "Routes/Home"
import Search from "Routes/Search"
import TV from "Routes/TV"
import Header from "Components/Header"

export default () => (
    <Router>
      <> 
      <Header></Header>
        <Switch>
          <Route path = "/" exact component ={Home} ></Route>
          <Route path = "/search" component = {Search}></Route>
          <Route path = "/tv" exact component = {TV}></Route>
          <Route path = "/tv/info" render= {() => `만드는 중입니다 😁`} ></Route>
          <Redirect from="*" to="/" ></Redirect>
        </Switch>
        </>
    </Router>
);