import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ButtonChange from "./ButtonChange";
// import TextField from '@mui/material/TextField';


export default function TableRowReadOnly(props) {
    const {word} = props

    return (
    <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{word.id}  </TableCell>
            <TableCell>{word.english} </TableCell>
            <TableCell>{word.transcription} </TableCell>
            <TableCell>{word.russian}</TableCell>
            <TableCell>
                <ButtonChange/>
            </TableCell>
        </TableRow>
    </>)
}