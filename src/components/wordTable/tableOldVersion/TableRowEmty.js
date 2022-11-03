import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// это пока что не работает, не импортирую, оставляю для решения в следующую очередь

export default function TableRowEmpty() {
    const [newWord, setNewWord] = useState({english: '', russian: ''});
    const handleChangeEng = (event) => {
        setNewWord({...newWord, english: event.target.value})
        console.log(words)
    }
    const handleChangeRus = (event) => {
    setNewWord({...newWord, russian: event.target.value})
    console.log(newWord)
    }
    return (
    <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell><TextField  id="outlined-basic" variant="outlined" value={newWord.id}/></TableCell>
            <TableCell><TextField  id="outlined-basic" onChange={handleChangeEng} value={newWord.english}/></TableCell>
            <TableCell><TextField  id="outlined-basic" onChange={handleChangeRus} value={newWord.russian}/></TableCell>
            <TableCell>
                <Button>Add</Button>
            </TableCell>
        </TableRow>
    </>)
}