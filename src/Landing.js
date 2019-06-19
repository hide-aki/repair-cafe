import React, { Component } from 'react';
import Admin from './component/Admin'
import { BrowserRouter, Route } from "react-router-dom";
import './Landing.scss';

class Landing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/admin" component={Admin}></Route>
        </div >
      </BrowserRouter>
    );
  }
}

export default Landing;
