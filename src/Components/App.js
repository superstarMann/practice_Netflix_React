import React, {Component} from 'react';
import  Router from "Components/Router";
import Globalcss from "Components/Globalcss"

class App extends Component {
    render() {
        return <>
        <Globalcss></Globalcss>
         <Router></Router>
        </>
    }
}

export default App;