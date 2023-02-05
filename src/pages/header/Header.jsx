import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './header.module.scss';
import { StyledEngineProvider } from '@mui/material/styles';
import logo from "./rocket.png";
import { Link } from 'react-router-dom';

const pages = ['Home', 'FlashCards', 'Dictionary'];
const title = ['RAPID \n ENGLISH']

export default function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <StyledEngineProvider injectFirst>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Box className={styles.logo__box}>
                            <img className={styles.logo} src={logo} alt="logo" />
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }}>
                            <Typography className={styles.title}
                                variant="h6" noWrap component="a" href="/"
                                sx={{ mr: 8, ml: 5, display: 'flex' }}>
                                {title}
                            </Typography>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit">
                                <MenuIcon />
                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left'
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}>
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography className={styles.content} textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Typography className={styles.title}
                            noWrap component={Link} to="/"
                            sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
                            Rapid English
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button className={styles.content} component={Link} to="/flashcards">
                                FlashCards
                            </Button>
                            <Button className={styles.content} component={Link} to="/dictionary">
                                Dictionary
                            </Button>
                            <Button className={styles.content} component={Link} to="/">
                                Home
                            </Button>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </StyledEngineProvider>
    );
};


