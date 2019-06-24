import React, { Component } from "react";
import AddItem from './AddItem'
import '../style/RepairList.scss'

class RepairList extends Component {
  render() {
    return (
      <div className="main-content">
        物品列表
        <button>新增維修物品</button>
        <button>刪除維修物品</button>
        <AddItem />
      </div>
    )
  }
}


export default RepairList