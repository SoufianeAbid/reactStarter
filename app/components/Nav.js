
import React , { Component } from 'react';
import {Link} from 'react-router';



class Taf extends React.Component{
    render() {
        return (
            <div className="text-center">
                  <Link to="/"><h3>Home</h3></Link>
                  <p className="lead"> Simple react boilerplate (React, Babel, Express, Webpack) </p>
            </div>
            
        )
       
    }
}



export default Taf;