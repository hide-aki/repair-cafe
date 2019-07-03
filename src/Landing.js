import React, { Component } from 'react';
import Admin from './component/Admin'
import Backend from './component/Backend'
import RepairList from './component/RepairList'
import { BrowserRouter, Route } from "react-router-dom";
import './Landing.scss';

class Landing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/list" component={RepairList}></Route>
        </div >
      </BrowserRouter>
    );
  }
}

export default Landing;
