import React, { Component } from 'react';
import './Main.css'
class Main extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="main">
            <h1 className="h1">Build Beatiful Sites.</h1>
            <p className="p">
                Create simple websites without <br></br> Coding with Freeway Express
            </p>
            <div className="spec">
            <b>Version:</b>6.1.2 <br></br>
            <b>Price:</b>Free    <br></br>
            <b>Requires:</b>Mac OS X 10.6.8+ <br></br>
            </div>

            <br></br>

            <form className="form">
                <input placeholder="email@address.com" ></input>
                <input type="submit" value="Download"></input>
            </form>
            <p className="p2">Download Earlier Version.</p>
            <p>This version is unsupported without a valid serial </p>
            <p>number. Need technical support? Purchase an Express </p>
            <p className="p3">serial Number</p>
            
            <img src={process.env.PUBLIC_URL+"/Mac.png"}></img>
        </div>
         );
    }
}
 
export default Main;