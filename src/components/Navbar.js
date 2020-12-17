import React from 'react'
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
Avater,
Divider,
Typography,
Box,
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
} from "@material-ui/icons"

export const Navbar = () => {
    return (
        <Box component="nav">
            <AppBar>
                <Toolbar>
                    <ArrowBack/>
                </Toolbar>
            </AppBar>
        </Box>
    )
};


export default Navbar;