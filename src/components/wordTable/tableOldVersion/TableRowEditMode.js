import React  from "react";
import {TableCell, TableRow, TextField, Button, ButtonGroup } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


// режим редактирования

export default function TableRowEditMode(props) {
    const {word, handleSaveButton, handleChangeEng, handleChangeRus} = props

    return (
    <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell><TextField id="outlined-read-only-input" defaultValue={word.id}/></TableCell>
            <TableCell><TextField  id="outlined-read-only-input" defaultValue={word.english} onChange={(event) => handleChangeEng(event)}/></TableCell>
            <TableCell><TextField  id="outlined-read-only-input" defaultValue={word.transcription}/></TableCell>
            <TableCell><TextField  id="outlined-read-only-input" defaultValue={word.russian} onChange={(event) => handleChangeRus(event)}/></TableCell>
            <TableCell>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={() => handleSaveButton()}>Save</Button>
                    <Button><DeleteIcon></DeleteIcon></Button>
                </ButtonGroup>
            </TableCell>
        </TableRow>
    </>
    )
}
