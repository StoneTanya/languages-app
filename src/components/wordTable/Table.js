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
import ButtonDefault from './ButtonDefault'; 
import TextField from '@mui/material/TextField';
import wordsData from "../card/words";


const initialData = [
    {id: 1, english: '', russian: '', readOnly: false}
];

export default function WordsTable() {
    const [words, setWords] = useState(initialData);
    const [newWord, setNewWord] = useState({english: '', russian: '', readOnly: false});

    const handleChangeEng = (event) => {
        setNewWord({...newWord, english: event.target.value})
        console.log(words)
    }

    const handleChangeRus = (event) => {
    setNewWord({...newWord, russian: event.target.value})
    console.log(newWord)
    }

    const addWord = (event) => {
        const newID = Math.max(...words.map(word => word.id)) + 1
        setWords({...newWord, id: newID})

        setNewWord({english: "", russian: ""})
        console.log(words)
    }

    const removeWord = (wordID) => {
    setWords(words.filter(word => word.id !== wordID))
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

        {wordsData.map(word => <TableRowElement word={word} key={word.id} removeWord={removeWord}/>)}

        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell><TextField  id="outlined-basic" variant="outlined" value={newWord.id} /></TableCell>
            <TableCell><TextField  id="outlined-basic" onChange={handleChangeEng} value={newWord.english}/></TableCell>
            <TableCell><TextField  id="outlined-basic" onChange={handleChangeRus} value={newWord.russian}/></TableCell>
            <TableCell>
                <ButtonDefault addWord={addWord}/>
            </TableCell>
        </TableRow>
        
            </TableBody>
        </Table>
    </TableContainer>
</Box>
);
}
