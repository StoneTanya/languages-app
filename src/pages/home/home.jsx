import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Button } from '@mui/material';
import { Container } from "@mui/system";
import { ReactComponent as MainImage } from './mainImage.svg';
import style from "./home.module.scss";
import { StyledEngineProvider } from '@mui/material/styles';

const slogan = 'Learn \n English Language \n with flashcards'

function Home() {
    let navigate = useNavigate();

    const goToCards = () => {
        navigate("/flashcards");
    };
    return (
        <>
            <Container sx={{
                display: 'flex',
                flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'
            }}>
                <Box>
                    <StyledEngineProvider injectFirst>
                        <Typography className={style.slogan} sx={{ fontSize: 'h3.fontSize' }}>
                            {slogan}
                        </Typography>
                        <Button className={style.slogan} sx={{ mt: 4 }} variant="outlined" size="large" onClick={goToCards} >Let’s Learn</Button>
                    </StyledEngineProvider>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <MainImage />
                </Box>
            </Container>
        </>
    );
}

export default Home;
