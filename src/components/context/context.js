import React, { useState, useEffect, createContext } from "react";
import dataConstructor from '../../services/apiDataConstructor';

export const ApiContext = createContext();

export const ContextProvider = ({children}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [words, setWords] = useState([]);

    const apiData = new dataConstructor();

    useEffect(() => {
        apiData.getWordsData().then(
            (result) => {
                setIsLoaded(true);
                setWords(result);
            },
            (error) => {
                setIsLoaded(false);
                setError(error);
            }
        )
    }, []);

    const createOrUpdateWord = (newWord) => {
        const wordIndex = words.findIndex(word => word.id === newWord.id)
        let newWords;
        if (wordIndex !== -1) {
            newWords = [...words.slice(0, wordIndex), newWord, ...words.slice(wordIndex + 1)]
        } else {
            newWords = [newWord, ...words]
        }
        setWords(newWords);
    }

    const deleteWord = (wordID) => {
        setWords(words.filter(word => word.id !== wordID));
    }

    const values = { words, setWords, error, setError, isLoaded, setIsLoaded, createOrUpdateWord, deleteWord };

    return (
        <ApiContext.Provider value={values}>
            {children}
        </ApiContext.Provider>
    )
}

