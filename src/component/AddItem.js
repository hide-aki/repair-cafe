import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

class AddItem extends Component {
  render() {
    const tableHead = (
      <TableHead>
        <TableRow className="table-body">
          <TableCell padding="none" align="center">編號</TableCell>
          <TableCell padding="none" align="center">物品名稱</TableCell>
          <TableCell padding="none" align="center">維修分類</TableCell>
          <TableCell padding="none" align="center">物品照片</TableCell>
          <TableCell padding="none" align="center">維修狀態</TableCell>
          <TableCell padding="none" align="center">詳細資訊</TableCell>
          <TableCell padding="none" align="center">維修志工</TableCell>
          <TableCell padding="none" align="center">物品主人</TableCell>
        </TableRow>
      </TableHead>
    )
    return (
      <Table>
        {tableHead}
        <TableBody>
          <TableRow className="table-body">
            <TableCell padding="none" align="center">1</TableCell>
            <TableCell padding="none" align="center">吐司機</TableCell>
            <TableCell padding="none" align="center">家電</TableCell>
            <TableCell padding="none" align="center">img</TableCell>
            <TableCell padding="none" align="center">
              <select >
                <option >待維修 </option>
                <option >維修中 </option>
                <option >已完成 </option>
              </select>
            </TableCell>
            <TableCell padding="none" align="center">
              <button>細節</button>
            </TableCell>
            <TableCell padding="none" align="center">Kira</TableCell>
            <TableCell padding="none" align="center">李青</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
  }

}

export default AddItem