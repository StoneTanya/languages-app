import React, {useState, useEffect, useContext, createContext} from "react";
import {Outlet} from 'react-router-dom';
import {Container} from '@mui/material';
import Header from '../header';
import Footer from '../footer';

const ApiContext = createContext();
export {ApiContext};

export default function Root() {
    const [words, setWords] = useState([]);
    const apiData = useContext(ApiContext);

    useEffect(() => {
            apiData.getWordsData().then(result => {
                setWords(result);
                console.log(result)
            })
    }, [setWords, apiData]);

    const createOrUpdateWord =(newWord) => {
        const wordIndex = words.findIndex(word => word.id === newWord.id)
        let newWords;
        if (wordIndex !== -1) {
            newWords = [...words.slice(0, wordIndex), newWord, ...words.slice(wordIndex + 1)]
        } else {
            newWords = [newWord, ...words]
        }
        setWords(newWords)
    }

    const deleteWord = (wordID) => {
        setWords(words.filter(word => word.id !== wordID));
    }
    const context = {words, setWords, createOrUpdateWord, deleteWord}
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

