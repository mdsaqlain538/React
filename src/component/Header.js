import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import './Header.css'

class Header extends Component {
    state = {  }
    render() { 
        return ( <div>
            <div className="head">
            <img src={process.env.PUBLIC_URL+"/images.jpg"} width="60px"></img> <b>Soft</b>press
            </div>
            <div className="list">
                <ul>
                    <li> <a href="#">FREEWAY</a></li> &nbsp; &nbsp; &nbsp;
                    <li> <a href="#">CHROMA</a></li> &nbsp; &nbsp; &nbsp;
                    <li> <a href="#">EXHIBO</a></li> &nbsp; &nbsp; &nbsp;
                    <li> <a href="#">FRETSPACE</a></li> &nbsp; &nbsp; &nbsp;
                    <li> <a href="#">FREEWAY EXPRESS</a></li> &nbsp; &nbsp; &nbsp;
                    <li> <a href="#">MARKET PLACE</a></li> &nbsp; &nbsp; &nbsp;
                    <li> <a href="#">SUPPORT</a></li>
                </ul>
            </div>
        </div> );
    }
}
 
export default Header;