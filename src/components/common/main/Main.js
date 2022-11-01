import React from "react";
import WordSlider from "../../card/CardSlider";
import WordsTable from "../../wordTable/Table";
import { Container } from "@mui/system";

function Main() {
    return (
        <div>
            <WordSlider />
            
            <Container>
                <WordsTable />
            </Container> 

        </div>
    );
}

export default Main