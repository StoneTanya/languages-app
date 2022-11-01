import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function ButtonDefault(props) {
    const {word, addWord} = props
    useEffect(() => {
    }, [word])
    
    return (
        <>
        <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            m: 1,
        },
    }}>
        <ButtonGroup variant="text" aria-label="text button group">
            <Button onClick={() => addWord(word.id)}>Save</Button>
        </ButtonGroup>
    </Box>
    </>
);
}