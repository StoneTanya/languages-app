import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './cards.module.scss';
import {createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        Card: {
            defaultProps: {
                backgroundColor: false,
            },
        },
    },
});


export default function WordCard({word}) {

//задано начальное состояние - перевод скрыт
const [showTranslate, setShowTranslate] = useState(false);

//функция показать перевод, меняет состояние
const showRussian = () => {
        setShowTranslate(true) 
    }

    return (
        <>
            <Box sx={{ width: 250}} mt={5}>
                <ThemeProvider theme={theme}>
                <Card variant="outlined" className={styles.card__word}>
                    <CardContent>
                        <Typography variant="h5" component="div">{word.english}</Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">{word.transcription}</Typography>
                        {showTranslate ?  
                        <Typography variant="h5">{word.russian}</Typography> 
                        : ""}
                    </CardContent>
                        {showTranslate ? "" 
                        : <CardActions sx={{ mb: 3 }}>
                            <Button className={styles.card__button} size="small" variant="contained" onClick={showRussian}>
                            Показать перевод
                            </Button>
                        </CardActions>}
                </Card>
                </ThemeProvider>
            </Box>
        </>
    )
};




