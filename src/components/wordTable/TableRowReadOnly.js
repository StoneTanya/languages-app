import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function TableRowReadOnly(props) {
    const {word, handleEditButton} = props

    return (
    <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{word.id}  </TableCell>
            <TableCell>{word.english} </TableCell>
            <TableCell>{word.transcription} </TableCell>
            <TableCell>{word.russian}</TableCell>
            <TableCell>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={() => handleEditButton()}><EditIcon></EditIcon></Button>
                    <Button><DeleteIcon></DeleteIcon></Button>
                </ButtonGroup>
            </TableCell>
        </TableRow>
    </>)
}