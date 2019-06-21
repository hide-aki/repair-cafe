import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../style/Backend.scss'
import RepairList from "./RepairList";

class Backend extends Component {
  render() {
    return (
      <div className="backend-container">
        <div className="backend-menu">
          <Link>維修物品列表</Link>
          <Link>個人資料</Link>
          <Link>報名活動</Link>
        </div>
        <div>
          <RepairList />
        </div>
      </div>
    )
  }
}

export default Backend
