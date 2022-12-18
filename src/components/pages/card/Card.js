import React, {useState, forwardRef} from 'react';
import {Card, CardActions, CardContent, Button, Typography, Box } from '@mui/material';
import styles from './cards.module.scss';
import {StyledEngineProvider } from '@mui/material/styles';

const WordCard = forwardRef(({word}, buttonRef) => {
    const [showTranslate, setShowTranslate] = useState(false);
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
                        : 
                        <CardActions sx={{ mb: 3 }}>
                            <Button className={styles.button} size="small" variant="contained" onClick={showRussian} ref={buttonRef}>
                                Показать перевод
                            </Button>
                        </CardActions>}
                    </CardContent>
                </Card>
            </Box>
        </StyledEngineProvider>
        </>
    )
});

export default WordCard;


