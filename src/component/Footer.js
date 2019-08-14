import React, { Component } from 'react';
import './Footer.css'
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
        <div  className="footer">
        <hr></hr>
        <p>Copyrights SiteNames.All Rights Reserved</p>
        <p>Powered By Create Ecommerce</p>
        <p>To Subscribe please Click<button className="bt">Support</button>    </p>
        <div>
        <img src={process.env.PUBLIC_URL+"/fb.png"} width="30px"></img> &nbsp; &nbsp; 
        <img src={process.env.PUBLIC_URL+"/wt.png"} width="30px"></img> &nbsp; &nbsp; 
        <img src={process.env.PUBLIC_URL+"/insta.png"} width="30px"></img> &nbsp; &nbsp; 
        </div>
        <br></br>
        <p>--------</p>
        </div> );
    }
}
 
export default Footer;