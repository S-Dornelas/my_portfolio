import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        primary: {
            main: '#232323',
            contrastText: '#fff', 
        },
        secondary: {
            main: '#4f8e3e',
        },
        text: {
            primary: '#000', 
            secondary: '#fff', 
        },
    },
    typography: {
        fontFamily: [
            'Segoe UI',           
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;
