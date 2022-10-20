import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

function WordCard() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (<div>
        <Box>
        <Button variant = "outlined" onClick = {handleClickOpen}>Открыть карточку слова</Button>
        <Dialog open = {open} onClose = {handleClose} aria-labelledby = "alert-dialog-title" aria-describedby = "alert-dialog-description">
            <DialogContent>
                <DialogContentText id = "alert-dialog-description"> СЛОВО </DialogContentText> 
            </DialogContent>
            <DialogActions>
                <Button onClick = {handleClose}> Знаю </Button> 
                <Button onClick = {handleClose} autoFocus> Не знаю </Button> 
            </DialogActions> 
        </Dialog>
        </Box> 
    </div>
    );
}

export default WordCard;

