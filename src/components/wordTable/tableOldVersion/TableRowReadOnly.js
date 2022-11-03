import React from "react";
import {TableCell, TableRow, Button, ButtonGroup  } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// строка в режиме чтения

export default function TableRowReadOnly(props) {
    const {word, handleEditButton} = props

    return (
    <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{word.id}</TableCell>
            <TableCell>{word.english}</TableCell>
            <TableCell>{word.transcription}</TableCell>
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