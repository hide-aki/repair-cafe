import React, { Component } from "react";


class AddItem extends Component {
  render() {
    return (
      <div>
        <form>
          <h3>維修人資訊</h3>
          <label for="name">姓名</label>
          <input id="name" type="text" />
          <label for="phone">電話</label>
          <input id="phone" type="text" />
          <label for="email">E-mail</label>
          <input id="email" type="text" />
          <h3>維修物品資訊</h3>
        </form>
      </div>
    )
  }
}

export default AddItem
