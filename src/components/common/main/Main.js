import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import {useLoaderData} from 'react-router-dom';
import WordSlider from "../../pages/card/CardSlider";
import WordsTable from "../../pages/wordTable/Table";

export async function loader({ request }) {
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words/", {
        signal: request.signal,
    });
    const initialWords = await response.json();
    return {initialWords};
}

export default function Main() {
    const {initialWords} = useLoaderData();
    const [words, setWords] = useState(initialWords);
    
    console.log(words);

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
