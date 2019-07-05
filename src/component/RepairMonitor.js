import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
import { ReactTabulator } from 'react-tabulator'
import "tabulator-tables/dist/css/tabulator.min.css";
import '../style/AddItem.scss'
import AddItem from "./AddItem";
import $ from 'jquery';

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
          number: item[8],
          index: index,
          name: item[4],
          phone: item[5],
          itemname: item[1],
          category: item[10],
          itemdetail: item[2],
          itemstatus: item[11],
          volunteer: item[9],
          dataconfirm: ''
        }
      })
      this.setState({
        itemslist: result
      })
    }).catch()
  }

  updateData = async (e, cell) => {
    const data = await cell.getData()
    const category = data.category
    const index = data.index.toString()
    const volunteer = data.volunteer
    const itemstatus = data.itemstatus
    const number = data.number.toString()
    console.log(index, number, volunteer, itemstatus)

    await $.ajax({
      type: "POST",
      url: "https://script.google.com/macros/s/AKfycbypbhhQ6yB6Sfvf0UGyEkAbcC_cfWeLwDdd8cVHs2oYSCZqPnE/exec",
      data: {
        index, number, category
      },
      success: function (response) {
        alert("成功")
      },
      error: function () {
        console.log("Error");
      }
    })
  }

  render() {
    const options = {
      layout: "fitData",
      movableRows: true,
      columnVertAlign: "bottom",
      pagination: "local",
      paginationSize: 20,
    };
    const icon = function (cell, formatterParams, onRendered) {
      return "<button>確認</button>";
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
          }
        ],
      },
      {
        title: "維修執行",
        columns: [
          {
            title: "維修志工", field: "volunteer", editor: "select", width: 70, align: "center", headerSort: false, editorParams: {
              values: ["Michael", "Kira", "Sara", "Vita"],
            }
          },
          { title: "物品狀態", field: "itemstatus", align: "center", width: 70, headerSort: false, editor: "select", editorParams: { values: ["壞掉", "維修中", "修好了"] } },
          {
            title: "資料確認", field: "dataconfirm", headerSort: false, width: 70, formatter: icon,
            cellClick: async function (e, cell) {
              const data = await cell.getData()
              const category = data.category
              const index = data.index
              const volunteer = data.volunteer
              const itemstatus = data.itemstatus
              const number = data.number

              await $.ajax({
                method: "POST",
                url: "https://script.google.com/macros/s/AKfycbypbhhQ6yB6Sfvf0UGyEkAbcC_cfWeLwDdd8cVHs2oYSCZqPnE/exec",
                data: {
                  index, number, category, volunteer, itemstatus
                },
                success: function (response) {
                  console.log("success");
                  return response
                },
                error: function () {
                  console.log("Error");
                }

              })
            }
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

