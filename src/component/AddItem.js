import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'

class AddItem extends Component {
  constructor() {
    super()
    this.state = {
      modal: false,
      addData: {
        name: '',
        phone: '',
        itemdetail: '',
        itemname: ''
      }
    }
  }

  handleClickOpen = () => {
    this.setState({
      modal: true
    })
  }

  handleClickClose = () => {
    this.setState({
      modal: false
    })
  }

  changeInput = (e) => {
    let value = e.target.value;
    let name = e.target.id
    this.setState(prevState => {
      const data = prevState.addData
      data[name] = value
      return {
        addData: data
      }
    })
  }

  submitData = () => {
    const name = this.state.addData.name;
    const phone = this.state.addData.phone
    const itemname = this.state.addData.itemname
    const itemdetail = this.state.addData.itemdetail
    axios({
      method: 'post',
      url: 'https://script.google.com/macros/s/AKfycbypbhhQ6yB6Sfvf0UGyEkAbcC_cfWeLwDdd8cVHs2oYSCZqPnE/exec',
      data: null,
      params: {
        name, phone, itemname, itemdetail
      }
    })
      .then(function (response) {
        if (response == "成功") {
          alert("成功");
          this.setState({
            modal: false
          })
        }
      })
  }



  render() {
    return (
      <div>
        <button onClick={this.handleClickOpen}>新增維修物品</button>
        <Dialog open={this.state.modal} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">維修人資訊</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="姓名"
              type="name"
              fullWidth
              value={this.state.value}
              onChange={this.changeInput}
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="電話"
              type="phone"
              fullWidth
              onChange={this.changeInput}
            />
          </DialogContent>
          <DialogTitle id="form-dialog-title">維修物品資訊</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="itemname"
              label="物品名稱"
              type="itemname"
              fullWidth
              onChange={this.changeInput}
            />
            <TextField
              autoFocus
              margin="dense  multiline"
              id="itemdetail"
              label="物品損壞細節"
              type="itemdetail"
              multiline
              fullWidth
              rows="3"
              onChange={this.changeInput}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickClose} color="primary">
              取消
          </Button>
            <Button color="primary" onClick={this.submitData}>
              送出
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default AddItem
