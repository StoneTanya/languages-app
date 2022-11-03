import React, { useState } from "react";
import { Paper, Box, Table, TableContainer, TableBody, TableCell, TableRow, TableHead  } from "@mui/material";
import TableRowReadOnly from "./TableRowReadOnly";
import TableRowEditMode from "./TableRowEditMode";
import wordsData from "../../card/words";
import styles from "../table.module.scss";

export default function WordsTable() {

    // смена состояний строк таблицы (режим чтения-по умолчанию либо режим редактирования)
    const [editMode, setEditMode] = useState(false);
    const [editWords, setEditWord] = useState(wordsData);

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

    // функция записи изменений в инпутах понять, что не так
    const handleChangeEng = (event) => {
        setEditWord({...editWords, english: event.target.value})
        console.log(editWords)
    }

    const handleChangeRus = (event) => {
        setEditWord({...editWords, russian: event.target.value})
        console.log(editWords)
    }

    return (
        <Box m={5}>
            <TableContainer component={Paper} >
                <Table className={styles.table} sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className={styles.table__head}>
                            <TableCell align="left">№</TableCell>
                            <TableCell>English</TableCell>
                            <TableCell>Transcription</TableCell>
                            <TableCell>Russian</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {editMode ?
                        wordsData.map(word => <TableRowEditMode word={word} key={word.id} handleSaveButton={handleSaveButton} handleEditButton={handleEditButton} handleChangeEng={handleChangeEng} handleChangeRus={handleChangeRus} />)
                        : wordsData.map(word => <TableRowReadOnly word={word} key={word.id} handleEditButton={handleEditButton} />)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
