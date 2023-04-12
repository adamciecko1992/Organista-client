import { Box, useTheme } from "@mui/material"

export const Footer = () => {
    const theme = useTheme();
    return (
        <Box sx={{minHeight:"10vh", backgroundColor:theme.palette.primary.main}}> 
            Footer
        </Box>
    )
}