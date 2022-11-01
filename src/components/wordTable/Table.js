import React, {useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/material";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableRowElement from "./TableRow";
import TableRowReadOnly from "./TableRowReadOnly";
import wordsData from "../card/words";


export default function WordsTable() {
    const [editMode, setEditMode] = useState(false);

    const handleEditButton = () => {
        setEditMode(true);
    }
    const handleSaveButton = () => {
        setEditMode(false);
    }
    return (
<Box m={5}>
    <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="left">№</TableCell>
                    <TableCell>English</TableCell>
                    <TableCell>Russian Translation</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody> 
                
            {editMode ? 
            wordsData.map(word => <TableRowElement word={word} key={word.id} handleSaveButton={handleSaveButton} handleEditButton={handleEditButton}  />)
            : wordsData.map(word => <TableRowReadOnly word={word} key={word.id} handleEditButton={handleEditButton}  />)
        }     
            </TableBody>
        </Table>
    </TableContainer>
</Box>
);
}
