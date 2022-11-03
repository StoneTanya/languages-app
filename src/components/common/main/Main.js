import React, {useState} from "react";
import WordSlider from "../../card/CardSlider";
import WordsTable from "../../wordTable/tableOldVersion/Table";
import { Container } from "@mui/system";
import WordsTable2 from "../../wordTable/TableVersion2";
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

    return (
        <div>
            <WordSlider words={words} createOrUpdate={createOrUpdateWord} />
            <Container>
                <WordsTable2 words={words} createOrUpdate={createOrUpdateWord}  />
            </Container> 
            <Container>
                <WordsTable words={words} createOrUpdate={createOrUpdateWord} />
            </Container> 
        </div>
    );
}

export default Main