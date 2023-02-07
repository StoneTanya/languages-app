import React, {useState} from "react";
import {TableCell, TableRow, Button, ButtonGroup, TextField} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TableRowComp({word, createOrUpdateWord, deleteWord}) {
    const [editMode, setEditMode] = useState(false);
    const [changingWord, setChangingWord] = useState(word);

    const handleEditButton = () => {
        setEditMode(true);
    }
    const handleSaveButton = () => {
        setEditMode(false);
        createOrUpdateWord(changingWord);
    }

    function changeWord(lang, value) {
        const tmpWord = {...changingWord}
        tmpWord[lang] = value
        setChangingWord(tmpWord);
    }
    return (
        <TableRow sx={{'&:last-child td, &:last-child th': { border: 0 } }}> 
        { editMode ?
            <>
                <TableCell><TextField id="outlined-read-only-input" defaultValue={word.id}/></TableCell>
                <TableCell><TextField id="outlined-read-only-input"
                                        defaultValue={word.english}
                                        onChange={(event) => changeWord("english", event.target.value)}/>
                </TableCell>
                <TableCell><TextField id="outlined-read-only-input" defaultValue={word.transcription}/></TableCell>
                <TableCell><TextField id="outlined-read-only-input"
                                        defaultValue={word.russian}
                                        onChange={(event) => changeWord("russian", event.target.value)}/>
                </TableCell>
                <TableCell>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={handleSaveButton} disabled={changingWord === " "}>Save</Button>
                        <Button onClick={() => deleteWord(word.id)}><DeleteIcon></DeleteIcon></Button>
                    </ButtonGroup>
                </TableCell>
            </>
            :
            <>
                <TableCell>{word.id}</TableCell>
                <TableCell>{word.english}</TableCell>
                <TableCell>{word.transcription}</TableCell>
                <TableCell>{word.russian}</TableCell>
                <TableCell>
                        <ButtonGroup variant="text" aria-label="text button group">
                            <Button onClick={handleEditButton}><EditIcon></EditIcon></Button>
                            <Button onClick={() => deleteWord(word.id)}><DeleteIcon></DeleteIcon></Button>
                        </ButtonGroup>
                </TableCell>
            </>
        }
        </TableRow>
    )
}