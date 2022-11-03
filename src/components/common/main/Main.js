import React from "react";
import WordSlider from "../../card/CardSlider";
import WordsTable from "../../wordTable/tableOldVersion/Table";
import { Container } from "@mui/system";
import WordsTable2 from "../../wordTable/TableVersion2";

function Main() {
    return (
        <div>
            <WordSlider />
            <Container>
                <WordsTable2 />    
            </Container> 
            <Container>
                <WordsTable />
            </Container> 
        </div>
    );
}

export default Main