import React from "react";
import { Paper, Box, Table, TableContainer, TableBody, TableCell, TableRow, TableHead} from "@mui/material";
import styles from "./table.module.scss";
import TableRowVersion2 from "./TableRowVersion2";

export default function WordsTable2({words, createOrUpdate}) {

    // // функция записи изменений в инпутах понять, что не так
    // const handleChangeRus = (event, wordID) => {
    //     const changedWords = editWords.map(word => {
    //         if (word.id === wordID) {
    //             return {...word, russian: event.currentTarget.value}
    //         }
    //         return {...word}
    //     })
    //     setEditWord(changedWords)
    //     console.log(editWords)
    // }
    //
    // const handleChangeEng = (event, wordID) => {
    //     const changedWords = editWords.map(word => {
    //         if (word.id === wordID) {
    //             return {...word, english: event.currentTarget.value}
    //         }
    //         return {...word}
    //     })
    //     setEditWord(changedWords)
    //     console.log(editWords)
    // }

    return (
        <Box m={5}>
            <TableContainer component={Paper} >
                <Table className={styles.table} sx={{minWidth: 650}} aria-label="simple table">
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
                    {words.map(editWord =>
                        <TableRowVersion2
                            word={editWord} key={editWord.id} createOrUpdate={createOrUpdate}
                        />
                    )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}