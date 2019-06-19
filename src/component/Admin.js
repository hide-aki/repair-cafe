import React, { Component } from "react";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import '../style/Admin.scss'

class Admin extends Component {
  render() {
    return (
      <div className="admin-container">
        <div className="logo-container">
          <div>12312313</div>
        </div>
        <div className="form-container">
          <div className="login-wrapper">
            <Paper className="login-form">
              <h2>管理者登入</h2>
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
              <button >登入</button>
            </Paper>
          </div>
        </div>
      </div>
    )
  }
}

export default Admin;