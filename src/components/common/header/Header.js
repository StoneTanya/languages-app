import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./header.module.scss"
import { StyledEngineProvider } from '@mui/material/styles';
import logo from "./rocket.png";

const pages = ['Home', 'FlashCards', 'Dictionary'];
const title = ['RAPID \n ENGLISH']
function Header() {
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
                <Box sx={{ display: { xs: 'flex', md: 'flex' }, flexDirection: 'column'}}>
                    <Typography className={styles.title} 
                        variant="h6" noWrap component="a" href="/" 
                        sx={{mr: 6, display: { xs: 'none', md: 'flex' }}}>
                        {title}
                    </Typography>
                </Box>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
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
                    horizontal: 'left',
                }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography className={styles.content} textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <Typography className={styles.title}
                        variant="h5" noWrap component="a" href=""
                        sx={{mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1}}>
                TOGETHER
            </Typography>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button className={styles.content}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page}
                </Button>
                ))}
            </Box>

            </Toolbar>
        </Container>
    </AppBar>
    </StyledEngineProvider>
    );
};  


export default Header