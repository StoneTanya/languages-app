import React, {useState, useEffect} from "react";
import { Container } from "@mui/system";
import WordSlider from "../../card/CardSlider";
import WordsTable from "../../wordTable/Table";
import styles from "./main.module.scss";


function Main() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [words, setWords] = useState([]);
    useEffect(() =>{
        fetch(`http://itgirlschool.justmakeit.ru/api/words/`)
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

    // const filteredWords = words.filter(word => {
    //     return word.russian.toLowerCase().includes(value.toLowerCase)
    // })

    return (
        <div className={styles.back__main}>
            <Container>
            <WordSlider words={words} createOrUpdate={createOrUpdateWord}/>
            </Container> 
            <Container>
                <WordsTable words={words} 
                            createOrUpdate={createOrUpdateWord} 
                            deleteWord={deleteWord}
                            // filteredWords={filteredWords} 
                />                
            </Container> 
        </div>
    );
}

export default Main