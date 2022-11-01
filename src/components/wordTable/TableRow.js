import React, {useEffect} from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ButtonChange from './ButtonChange';
// import ButtonDefault from './ButtonDefault'; 
import TextField from '@mui/material/TextField';


export default function TableRowElement(props) {
    const {word} = props
    useEffect(() => {
    }, [word]);

    return (
    <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell><TextField id="outlined-read-only-input" value={word.id} readOnly={true} /></TableCell>
            <TableCell><TextField  id="outlined-read-only-input" value={word.english} readOnly={true}/></TableCell>
            <TableCell><TextField  id="outlined-read-only-input" value={word.russian} readOnly={true}/></TableCell>
            <TableCell>
                <ButtonChange/>
                {/* <ButtonDefault/> */}
            </TableCell>
        </TableRow>
    </>)
}
