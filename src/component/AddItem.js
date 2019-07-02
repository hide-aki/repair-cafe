import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactTabulator } from 'react-tabulator'
import "tabulator-tables/dist/css/tabulator.min.css"; //import Tabulator stylesheet

class AddItem extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          order: 1,
          name: "Kira",
          phone: "092222222",
          email: "qqq@gmail.com",
          itemname: "烤箱",
          category: "家電",
          itemstatus: "壞掉",
          volunteer: "忠仁"
        },
        {
          order: 2,
          name: "李青",
          phone: "092221112",
          email: "oppp123@gmail.com",
          itemname: "電扇",
          category: "家電",
          itemstatus: "壞掉",
          volunteer: "Scoops"
        },
      ],
      ref: null,
    }
  }

  render() {
    const options = {
      layout: "fitData",
      height: 150,
      width: 800,
      movableRows: true,

    };

    const columns = [
      { title: "編號", field: "order", align: "center", headerSort: false },
      { title: "姓名", field: "name", align: "center", headerSort: false },
      { title: "聯絡電話", field: "phone", align: "center", headerSort: false },
      { title: "E-mail", field: "email", align: "center", headerSort: false },
      { title: "物品名稱", field: "itemname", align: "center", headerSort: false },
      { title: "物品分類", field: "category", align: "center", headerSort: false },
      { title: "物品狀態", field: "itemstatus", align: "center", headerSort: false },
      { title: "維修志工", field: "volunteer", align: "center", headerSort: false },
      {
        title: "物品細節",
        field: "itemdetail",
        headerSort: false
      }
    ];

    return (
      <div>
        <ReactTabulator
          columns={columns}
          data={this.state.data}
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

export default AddItem;

// import React, { Component } from "react";
// import Table from '@material-ui/core/Table';
// import TableHead from '@material-ui/core/TableHead';
// import TableCell from '@material-ui/core/TableCell';
// import TableRow from '@material-ui/core/TableRow';
// import TableBody from '@material-ui/core/TableBody';

// class AddItem extends Component {
//   render() {
//     const tableHead = (
//       <TableHead>
//         <TableRow className="table-body">
//           <TableCell padding="none" align="center">編號</TableCell>
//           <TableCell padding="none" align="center">物品名稱</TableCell>
//           <TableCell padding="none" align="center">維修分類</TableCell>
//           <TableCell padding="none" align="center">物品照片</TableCell>
//           <TableCell padding="none" align="center">維修狀態</TableCell>
//           <TableCell padding="none" align="center">詳細資訊</TableCell>
//           <TableCell padding="none" align="center">維修志工</TableCell>
//           <TableCell padding="none" align="center">物品主人</TableCell>
//         </TableRow>
//       </TableHead>
//     )
//     return (
//       <Table>
//         {tableHead}
//         <TableBody>
//           <TableRow className="table-body">
//             <TableCell padding="none" align="center">1</TableCell>
//             <TableCell padding="none" align="center">吐司機</TableCell>
//             <TableCell padding="none" align="center">家電</TableCell>
//             <TableCell padding="none" align="center">img</TableCell>
//             <TableCell padding="none" align="center">
//               <select >
//                 <option >待維修 </option>
//                 <option >維修中 </option>
//                 <option >已完成 </option>
//               </select>
//             </TableCell>
//             <TableCell padding="none" align="center">
//               <button>細節</button>
//             </TableCell>
//             <TableCell padding="none" align="center">Kira</TableCell>
//             <TableCell padding="none" align="center">李青</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     )
//   }
// }

// export default AddItem

