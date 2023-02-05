import React, { useState, useEffect, useRef } from 'react';
import { Container, Box } from '@mui/system';
import Button from '@mui/material/Button';
import WordCard from "./Card";
import styles from './cards.module.scss';
import { useOutletContext } from 'react-router-dom';

export default function CardsSlider() {
    const { words, createOrUpdate, deleteWord } = useOutletContext();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = words.length;
    const [wasLearned, setWasLearned] = useState(0);

    const handleTranslateButton = () => {
        setWasLearned(wasLearned + 1);
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const buttonRef = useRef();
    useEffect(() => {
        buttonRef.current.focus();
    }, [activeStep]);

    const WordComponent = words.map(editWord => <WordCard word={editWord} key={editWord.id} createOrUpdate={createOrUpdate} deleteWord={deleteWord} handleTranslateButton={handleTranslateButton} ref={buttonRef} />)

    return (
        <Container>
            <Box className={styles.card__box} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Box>
                    Выучено слов: {wasLearned} из {maxSteps}
                </Box>
                {WordComponent[activeStep]}
                <Box>
                    <Button className={styles.back} onClick={handleBack} disabled={activeStep === 0}>Back</Button>
                    <Button className={styles.next} onClick={handleNext} disabled={activeStep === maxSteps - 1}>Next</Button>
                </Box>
            </Box>
        </Container>
    );
}