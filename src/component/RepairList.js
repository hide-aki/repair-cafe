import React, { Component } from "react";
import AddItem from './AddItem'
class RepairList extends Component {
  render() {
    return (
      <div>
        物品列表
        <button>新增維修物品</button>
        <AddItem />
      </div>
    )
  }
}


export default RepairList