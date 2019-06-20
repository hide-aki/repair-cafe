import React, { Component } from "react";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import '../style/Admin.scss'
import repair from '../img/repair.svg'; // Tell Webpack this JS file uses this image
import logo from '../img/logo.svg';
import LogIn from './LogIn'
class Admin extends Component {
  render() {
    return (
      <div className="admin-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
          <h2>Repair Cafe Tainan</h2>
        </div>
        <LogIn />
      </div >
    )
  }
}

export default Admin;