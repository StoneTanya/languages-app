import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#962e47',
        },
        secondary: {
            main: '#e83f7b',
        },
        error: {
            main: red.A400,
        },
    },

    components: {
        // Name of the component
        Card: {
            defaultProps: {
                backgroundColor: "#edca8f80",
            },
        },
    },
    
});

export default theme;