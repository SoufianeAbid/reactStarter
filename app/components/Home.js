


import React , { Component } from 'react';
import {Link} from 'react-router';


class Home extends React.Component{
    render() {
        return (
              <div className="text-center">
                  <Link to="about"> <h3>About</h3> </Link>
                  <h1 className="lead"> Hello React ! </h1>
              </div>
            
        )
       
    }
}



export default Home;