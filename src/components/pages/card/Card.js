import React, {useState} from 'react';
import {Card, CardActions, CardContent, Button, Typography, Box } from '@mui/material';
import styles from './cards.module.scss';
import {StyledEngineProvider } from '@mui/material/styles';


export default function WordCard({word}) {
//задано начальное состояние - перевод скрыт
const [showTranslate, setShowTranslate] = useState(false);

//функция показать перевод, меняет состояние
const showRussian = () => {
        setShowTranslate(true) 
    }
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box sx={{ width: 250}} mt={5}>
                <Card sx={{ height: 190}} variant="outlined" className={styles.card__word}>
                    <CardContent>
                        <Typography className={styles.content} variant="h5" component="div">{word.english}</Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">{word.transcription}</Typography>
                        {showTranslate ?  
                        <Typography className={styles.content} variant="h5">{word.russian}</Typography> 
                        : ""}
                    </CardContent>
                        {showTranslate ? "" 
                        : <CardActions sx={{ mb: 3 }}>
                            <Button className={styles.button} size="small" variant="contained" onClick={showRussian}>
                            Показать перевод
                            </Button>
                        </CardActions>}
                </Card>
            </Box>
        </StyledEngineProvider>
        </>
    )
};




