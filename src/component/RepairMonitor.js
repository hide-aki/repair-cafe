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
      itemslist: [],
    }
  }

  componentDidMount() {
    this.getGoogleSheetShopList()
  }

  getGoogleSheetShopList = () => {
    axios.get("https://script.google.com/macros/s/AKfycbypbhhQ6yB6Sfvf0UGyEkAbcC_cfWeLwDdd8cVHs2oYSCZqPnE/exec").then((response) => {
      const items = response.data
      const result = items.map((item, index) => {
        return {
          number: index + 1,
          name: item[4],
          phone: item[5],
          itemname: item[1],
          category: '',
          itemdetail: item[2],
          itemstatus: '壞掉',
          volunteer: '',
          fixresult: '',
          fixnote: ''
        }
      })
      this.setState({
        itemslist: result
      })
    }).catch()
  }

  up = (table) => {
    var rows = table.getRow(1); //return row component with index of 1
    // var rowElement = rows.getElement();
  }

  render() {
    const options = {
      layout: "fitData",
      movableRows: true,
      columnVertAlign: "bottom",
      pagination: "local",
      paginationSize: 20,
    };

    const columns = [
      { rowHandle: true, formatter: "handle", headerSort: false, frozen: true, width: 30, minWidth: 30 },
      { title: "編號", field: "number", align: "center", headerSort: true, editor: "input", width: 70 },
      {
        title: "維修人資訊",
        columns: [
          { title: "姓名", field: "name", align: "left", headerSort: false, width: 70 },
          { title: "聯絡電話", field: "phone", align: "left", headerSort: false, width: 100 },
        ],
      },
      {
        title: "維修物品資訊",
        columns: [
          { title: "物品名稱", field: "itemname", headerSort: false, width: 100 },
          { title: "物品分類", field: "category", align: "center", width: 70, headerSort: false, editor: "select", editorParams: { values: ["木工", "家電", "裁縫"] } },
          {
            title: "物品損壞細節",
            field: "itemdetail",
            headerSort: false,
            formatter: "textarea",
            width: 200,
            cellClick: function (e, cell) {
              // var data = cell.getData()
              console.log(cell.getRow().getData())
            },
          }
        ],
      },
      {
        title: "維修執行",
        columns: [
          {
            title: "維修志工", field: "volunteer", editor: "select", width: 70, align: "center", headerSort: false, editorParams: {
              values: ["Michael", "Kira", "Sara", "Vita"], cellClick: function (e, cell) {
                // var data = cell.getData()
                console.log(cell.getRow().getData())
              },
            }
          },
          { title: "物品狀態", field: "itemstatus", align: "center", width: 70, headerSort: false, editor: "select", editorParams: { values: ["壞掉", "維修中", "修好了"] } },
          {
            title: "維修紀錄", field: "fixnote", align: "center", editor: "textarea", headerSort: false, width: 200
          },

        ]
      }
    ]

    return (
      <div>
        <h1>維修流程管理</h1>
        <AddItem />
        <h2>待維修物品</h2>
        <ReactTabulator
          columns={columns}
          data={this.state.itemslist}
          options={options}
          className="custom-css-class"
          tooltips={false}
          layout={"fitData"}
          sorter={"string"}
          id="itemslist"
        />
      </div >
    );
  }
}

export default RepairMonitor;

