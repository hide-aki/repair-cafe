import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
import { ReactTabulator } from 'react-tabulator'
import "tabulator-tables/dist/css/tabulator.min.css";
import '../style/AddItem.scss'
import AddItem from "./AddItem";

class RepairMonitor extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      ref: null,
    }
  }

  componentDidMount() {
    this.getGoogleSheetShopList()
  }

  getGoogleSheetShopList = () => {
    axios.get("https://script.google.com/macros/s/AKfycbypbhhQ6yB6Sfvf0UGyEkAbcC_cfWeLwDdd8cVHs2oYSCZqPnE/exec").then((response) => {
      const items = response.data
      items.pop()
      console.log(items)
      const result = items.map((item, index) => {
        return {
          number: index + 1,
          name: item[0],
          phone: item[1],
          email: item[2],
          itemname: item[3],
          category: item[4],
          itemdetail: item[5],
          itemstatus: '壞掉',
          volunteer: ''
        }
      })
      this.setState({
        items: result
      })
    }).catch()
  }
  addItem = () => {

  }

  render() {
    const options = {
      layout: "fitData",
      // layout: "fitColumns",
      movableRows: true,
      width: 750
    };

    const columns = [
      { title: "編號", field: "number", align: "center", headerSort: false, editor: "input" },
      { title: "姓名", field: "name", align: "left", headerSort: false },
      { title: "聯絡電話", field: "phone", align: "left", headerSort: false },
      { title: "E-mail", field: "email", align: "left", headerSort: false },
      { title: "物品名稱", field: "itemname", align: "center", headerSort: false },
      { title: "物品分類", field: "category", align: "center", headerSort: false },
      { title: "物品狀態", field: "itemstatus", align: "center", headerSort: false, editor: "select", editorParams: { values: ["壞掉", "維修中", "修好了"] } },
      { title: "維修志工", field: "volunteer", editor: "select", align: "center", headerSort: false, editorParams: { values: ["Michael", "Kira", "Sara", "Vita"] } },
      {
        title: "物品維修細節",
        field: "itemdetail",
        headerSort: false
      }
    ];

    return (
      <div>
        <h1>維修物品管理</h1>
        <button>新增維修物品</button>
        <ReactTabulator
          columns={columns}
          data={this.state.items}
          options={options}
          className="custom-css-class"
          tooltips={false}
          layout={"fitData"}
          sorter={"string"}
        />

      </div >
    );
  }
}

export default RepairMonitor;

