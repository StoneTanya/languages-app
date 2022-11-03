import React, {useState} from "react";
import { Paper, Box, Table, TableContainer, TableBody, TableCell, TableRow, TableHead} from "@mui/material";
import wordsData from "../card/words";
import styles from "./table.module.scss";
import TableRowVersion2 from "./TableRowVersion2";

export default function WordsTable2() {

const [editWords, setEditWord] = useState(wordsData);

    // функция записи изменений в инпутах понять, что не так
    const handleChangeEng = (event) => {
        setEditWord({english: event.target.value})
        console.log(event.target)
    }

    const handleChangeRus = (event) => {
        setEditWord({...editWords, russian: event.target.value})
        console.log(event.target)
        console.log(editWords)
    }

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
                    {wordsData.map(editWords => <TableRowVersion2 word={editWords} key={editWords.id} handleChangeEng={handleChangeEng} handleChangeRus={handleChangeRus} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
