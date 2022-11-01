import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ButtonDefault from './ButtonChange';
import TextField from '@mui/material/TextField';


export default function TableRowElement(props) {
    const {word} = props

    return (
    <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell><TextField id="outlined-read-only-input" defaultValue={word.id}  /></TableCell>
            <TableCell><TextField  id="outlined-read-only-input" defaultValue={word.english} /></TableCell>
            <TableCell><TextField  id="outlined-read-only-input" defaultValue={word.transcription} /></TableCell>
            <TableCell><TextField  id="outlined-read-only-input" defaultValue={word.russian} /></TableCell>
            <TableCell>
                <ButtonDefault/>
            </TableCell>
        </TableRow>
    </>)
}
