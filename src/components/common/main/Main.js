import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import WordSlider from "../../card/CardSlider";
import WordsTable from "../../wordTable/Table";

export default function Main() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/}`)
        .then(response => response.json()) 
        .then (
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

    function createOrUpdateWord(newWord) {
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

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
    return (
            <Routes>
            <Route path="flashcards" element={<WordSlider words={words} />} />
            <Route path="dictionary" element={<WordsTable words={words} 
                            createOrUpdate={createOrUpdateWord} 
                            deleteWord={deleteWord}
                />}
                />                
        </Routes>
    );
    }
}
