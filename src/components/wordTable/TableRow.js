import React, {useState} from "react";
import {TableCell, TableRow, Button, ButtonGroup, TextField} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TableRowComp(props) {
    const {word, createOrUpdate, deleteWord} = props

    // смена состояний строк таблицы (режим чтения-по умолчанию либо режим редактирования)
    const [editMode, setEditMode] = useState(false);
    const [changingWord, setChangingWord] = useState(word)

    // функция запуска режима редактирования полей, запускается при нажатии кнопки
    const handleEditButton = () => {
        setEditMode(true);
    }
    // возвращаемся в режим чтения по кнопке save, а также запускаем функцию записи изменения инпутов
    const handleSaveButton = () => {
        setEditMode(false);
        createOrUpdate(changingWord);
    }
    //временное состояния изменения слова
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
                        <Button onClick={handleSaveButton}>Save</Button>
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