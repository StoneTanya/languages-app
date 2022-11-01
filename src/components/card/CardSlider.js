import React, { useState } from 'react';
import { Container, Box } from '@mui/system';
import Button from '@mui/material/Button';
import wordsData from "./words";
import WordCard from "./Card";

export default function WordSlider() {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = wordsData.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    

    // const [defaultState, setState] = useState(wordsData);
    // console.log(defaultState)
    
    // const showRussian = () => {
    //     setState(wordsData)
    // }

    const WordComponent = wordsData.map(word => <WordCard key={word.id} word={word} />)

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