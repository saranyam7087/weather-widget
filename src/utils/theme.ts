import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#3F8AE0'
        },
        secondary: {
            main: '#326eb3'
        }
    }
});

theme = responsiveFontSizes(theme);
export default theme;