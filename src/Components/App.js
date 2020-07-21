import React, {Component} from 'react';
import  Router from "Components/Router";
import globalcss from "Components/Globalcss"

class App extends Component {
    render() {
        return <>
        <globalcss></globalcss>
         <Router></Router>
        </>
    }
}

export default App;