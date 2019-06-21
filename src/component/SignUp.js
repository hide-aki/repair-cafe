import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import repair from '../img/repair.svg'; // Tell Webpack this JS file uses this image
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="form-container">
      <div className="login-wrapper">
        <img className="repair-img" src={repair} alt="repair-icon" />
        <Paper className="login-form">
          <h2>註冊</h2>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Link>已註冊帳號</Link>
          <button >登入</button>
        </Paper>
      </div>
    </div>
  )
}

export default SignUp