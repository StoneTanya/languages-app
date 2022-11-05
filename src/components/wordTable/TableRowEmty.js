import React from "react";
import { TableCell, TableRow, TextField, Button } from '@mui/material';


export default function TableRowEmpty() {
    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell><TextField id="outlined-basic" /></TableCell>
                <TableCell><TextField id="outlined-basic" /></TableCell>
                <TableCell><TextField id="outlined-basic" /></TableCell>
                <TableCell><TextField id="outlined-basic" /></TableCell>
                <TableCell>
                    <Button>Add</Button>
                </TableCell>
            </TableRow>
        </>)
}