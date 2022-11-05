import React, {useState} from "react";
import { Container } from "@mui/system";
import WordSlider from "../../card/CardSlider";
import WordsTable from "../../wordTable/Table";
import wordsData from './words';

function Main() {
    const [words, setWords] = useState(wordsData)
    function createOrUpdateWord(newWord) {
        const wordIndex = words.findIndex(word => word.id === newWord.id)
        let newWords;
        if (wordIndex) {
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
        <div>
            <WordSlider words={words} createOrUpdate={createOrUpdateWord}/>
            <Container>
                <WordsTable words={words} 
                            createOrUpdate={createOrUpdateWord} 
                            deleteWord={deleteWord} 
                />                
            </Container> 
        </div>
    );
}

export default Main