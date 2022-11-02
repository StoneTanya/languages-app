import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TableRowElement(props) {
    const {word, handleSaveButton, handleChangeInput} = props

    return (
    <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell><TextField id="outlined-read-only-input" defaultValue={word.id} /></TableCell>
            <TableCell><TextField  id="outlined-read-only-input" defaultValue={word.english} onChange={(event) => handleChangeInput(event)} /></TableCell>
            <TableCell><TextField  id="outlined-read-only-input" defaultValue={word.transcription} /></TableCell>
            <TableCell><TextField  id="outlined-read-only-input" defaultValue={word.russian} /></TableCell>
            <TableCell>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={() => handleSaveButton()}>Save</Button>
                    <Button><DeleteIcon></DeleteIcon></Button>
                </ButtonGroup>
            </TableCell>
        </TableRow>
    </>)
}
