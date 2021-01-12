import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


// import status
import { StatusSuccessful, StatusCanceled, StatusPending, Actions }from './status'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxHeight:100,
  },
});

function createData(orderId, clientName, orderDate, DeleveryDate, discount, status, actions) {
  return { orderId, clientName, orderDate, DeleveryDate, discount, status, actions };
}

const rows = [
  createData(5548, 'John Doe', '22/08/2017', '30/08/2017', '0%', <StatusSuccessful/>, <Actions/> ),
  createData(6000, 'Ahemd BenArfa','22/08/2017', '30/08/2017', '20%', <StatusCanceled/>, <Actions/> ),
  createData(5549, 'John Doe', '22/08/2017', '30/08/2017', '15%', <StatusPending/>, <Actions/> ),
  createData(5548, 'John Doe', '22/08/2017', '30/08/2017', '0%', <StatusSuccessful/>, <Actions/> ),
  createData(6000, 'Ahemd BenArfa','22/08/2017', '30/08/2017', '20%', <StatusCanceled/>, <Actions/> ),
  // createData(5549, 'John Doe', '22/08/2017', '30/08/2017', '15%', <StatusPending/>, <Actions/> )

];

export default function DenseTable() {
  const classes = useStyles();

  return (
    // <div>
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow>
            <TableCell align="left">Order Id</TableCell>
            <TableCell align="left">Client Name</TableCell>
            <TableCell align="left">Order Date</TableCell>
            <TableCell align="left">Delevery Date</TableCell>
            <TableCell align="left">Discount</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.orderId}>
              <TableCell component="th" scope="row">
                {row.orderId}
              </TableCell>
              <TableCell align="left">{row.clientName}</TableCell>
              <TableCell align="center">{row.orderDate}</TableCell>
              <TableCell align="center">{row.DeleveryDate}</TableCell>
              <TableCell align="center">{row.discount}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // </div>
  );
}
