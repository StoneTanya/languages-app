import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/material";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableRowElement from "./TableRowDefault";
import TableRowReadOnly from "./TableRowReadOnly";
import wordsData from "../card/words";
import styles from "./table.module.scss";

export default function WordsTable() {
    const [editMode, setEditMode] = useState(false);
    const [editWords, setEditWord] = useState(wordsData);

    const handleEditButton = () => {
        setEditMode(true);
    }
    const handleSaveButton = () => {
        setEditMode(false);
        handleChangeInput();
    }

    const handleChangeInput = (event) => {
        setEditWord({...editWords, english: event.target.value})
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
                            editWords.map(editWords => <TableRowElement word={editWords} key={editWords.id} handleSaveButton={handleSaveButton} handleEditButton={handleEditButton} handleChangeInput={handleChangeInput} />)
                            : wordsData.map(word => <TableRowReadOnly word={word} key={word.id} handleEditButton={handleEditButton} />)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
