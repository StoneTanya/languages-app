import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#263238',
        },
        secondary: {
            main: '#546e7a',
        },
        error: {
            main: red.A400,
        },
    },    
});

export default theme;