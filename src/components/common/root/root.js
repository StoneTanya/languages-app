import React, {useState, useEffect, useContext, createContext} from "react";
import {Outlet} from 'react-router-dom';
import {Container} from '@mui/material';
import Header from '../header';
import Footer from '../footer';

const ApiContext = createContext();
export {ApiContext};

export default function Root() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [words, setWords] = useState([]);
    
    const apiData = useContext(ApiContext);

    useEffect(() => {
            apiData.getWordsData().then (
            (result) => {
                setIsLoaded(true);
                setWords(result);
            },
            (error) => {
                setIsLoaded(false);
                setError(error);
            }
        )
    }, [setWords, apiData]);

    const createOrUpdateWord =(newWord) => {
        const wordIndex = words.findIndex(word => word.id === newWord.id)
        let newWords;
        if (wordIndex !== -1) {
            newWords = [...words.slice(0, wordIndex), newWord, ...words.slice(wordIndex + 1)]
        } else {
            newWords = [newWord, ...words]
        }
        setWords(newWords);
        console.log(words);
    }

    const deleteWord = (wordID) => {
        setWords(words.filter(word => word.id !== wordID));
        console.log(words);
    }
    const context = {words, setWords, error, setError, isLoaded, setIsLoaded, createOrUpdateWord, deleteWord}
    
    return (
        <>
            <Header />
            <Container>
                <Outlet context={context} />
            </Container>
            <Footer />
        </>
    )
}

