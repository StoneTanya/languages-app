import React from "react";
import { Typography, Box, Link } from '@mui/material';
import { Container } from "@mui/system";
import styles from "./footer.module.scss"
import { StyledEngineProvider } from '@mui/material/styles';

function Copyright() {
    return (
        <Typography className={styles.content} variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link className={styles.content} color="inherit" href="#">
                Tanya Kameneva
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <StyledEngineProvider injectFirst>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '45vh' }}>
                <Box component="footer"
                    sx={{
                        display: { xs: 'flex', md: 'flex' }, flexDirection: 'column', justifyItems: 'center',
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[400]
                                : theme.palette.grey[800],
                    }}
                >
                    <Box sx={{ display: { xs: 'flex', md: 'flex' }, flexDirection: 'column', justifyItems: 'center' }}>
                        <Container maxWidth="sm">
                            <Copyright />
                        </Container>
                        <Typography className={styles.title}
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}> Rapid English </Typography>
                        <Typography className={styles.content}>Learning English Together</Typography>
                    </Box>
                </Box>
            </Box>
        </StyledEngineProvider>
    );
}



