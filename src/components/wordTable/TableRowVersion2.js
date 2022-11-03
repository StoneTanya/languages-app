import React, {useState} from "react";
import {TableCell, TableRow, Button, ButtonGroup, TextField} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TableRowVersion2(props) {
    const {word, handleChangeEng, handleChangeRus} = props

    // смена состояний строк таблицы (режим чтения-по умолчанию либо режим редактирования)
    const [editMode, setEditMode] = useState(false);

    // функция запуска режима редактирования полей, запускается при нажатии кнопки
    const handleEditButton = () => {
        setEditMode(true);
    }

    // возвращаемся в режим чтения по кнопке save, а также запускаем функцию записи изменения инпутов
    const handleSaveButton = () => {
        setEditMode(false);
        handleChangeEng();
        handleChangeRus();
    }

    return (
        <TableRow sx={{'&:last-child td, &:last-child th': { border: 0 } }}> 
        { editMode ?
            <TableCell><TextField id="outlined-read-only-input" defaultValue={word.id}/></TableCell>
            :<TableCell>{word.id}</TableCell>       
        } { editMode ?
            <TableCell><TextField id="outlined-read-only-input" defaultValue={word.english} onChange={(event) => handleChangeEng(event, word.id)}/></TableCell>
            :<TableCell>{word.english}</TableCell>
        } { editMode ?
            <TableCell><TextField id="outlined-read-only-input" defaultValue={word.transcription}/></TableCell>
            :<TableCell>{word.transcription}</TableCell>
        } { editMode ?
            <TableCell><TextField id="outlined-read-only-input" defaultValue={word.russian} onChange={(event) => handleChangeRus(event, word.id)}/></TableCell>
            : <TableCell>{word.russian}</TableCell>
        } { editMode ?
            <TableCell>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={() => handleSaveButton()}>Save</Button>
                    <Button><DeleteIcon></DeleteIcon></Button>
                </ButtonGroup>
            </TableCell>  
            : <TableCell>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={() => handleEditButton()}><EditIcon></EditIcon></Button>
                        <Button><DeleteIcon></DeleteIcon></Button>
                    </ButtonGroup>
            </TableCell>
        }
        </TableRow>
    )
}