import React, { useState } from 'react';
import { Container, Box } from '@mui/system';
import Button from '@mui/material/Button';
import WordCard from "./Card";

export default function WordSlider(props) {
    const {words, createOrUpdate, deleteWord} = props

    // слайдер - листалка слов
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = words.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const WordComponent = words.map(editWord => <WordCard word={editWord} key={editWord.id} createOrUpdate={createOrUpdate} deleteWord={deleteWord}/>)

    return (
        <Container>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                {WordComponent[activeStep]}
                <Box>
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>Back</Button>
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>Next</Button>
                </Box>
            </Box>
        </Container>
    );
}