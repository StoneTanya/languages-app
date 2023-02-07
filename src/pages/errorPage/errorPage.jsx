import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from './error.module.scss'
import { StyledEngineProvider } from '@mui/material/styles';
import { ReactComponent as ErrorImage } from './errorimg.svg';

export default function ErrorPage() {
    let navigate = useNavigate();

    const goHome = () => {
        navigate("");
    };

    return (
        <StyledEngineProvider injectFirst>
            <>
                <Box className={styles.container} id="error-page">
                    <Typography color="error" sx={{ fontSize: 'h3.fontSize' }}>Oops!</Typography>
                    <Typography color="white">Sorry, we can't fined this page! </Typography>
                    <Box>
                        <ErrorImage />
                    </Box>
                    <Button className={styles.button} sx={{ mt: 4 }} variant="contained" size="large" onClick={goHome}>Take me Home</Button>
                </Box>
            </>
        </StyledEngineProvider>
    );
}