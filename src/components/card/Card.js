import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './cards.module.scss';


export default function WordCard({word}) {

    // const {word, showRussian} = props
    // useEffect(() => {
    // }, [word])

    return (
        <React.Fragment>
            <Box sx={{ width: 300}} mt={5}>
                <Card variant="outlined" className={styles.card__word}>
                    <CardContent>
                        <Typography variant="h5" component="div">{word.english}</Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">{word.transcription}</Typography>
                        <Typography variant="h5">{word.russian}</Typography>
                    </CardContent>
                    <CardActions sx={{ mb: 3 }}>
                        <Button size="small" variant="contained">Показать перевод</Button>
                    </CardActions>
                </Card>
            </Box>
        </React.Fragment>
    )
};




