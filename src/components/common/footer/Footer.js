import React from "react";
import { Typography, Box, Link } from '@mui/material';
import { Container } from "@mui/system";


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Tanya Kameneva
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '30vh',
            }}
        >
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[400]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Copyright />
                </Container>
                <Box sx={{ display: { xs: 'flex', md: 'flex' }, flexDirection: 'column', justifyItems: 'center' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
            >Rapid English
            </Typography>
            <Typography>Learning Eng Together</Typography>
            </Box>
            </Box>

        </Box>
    );
}

export default Footer

