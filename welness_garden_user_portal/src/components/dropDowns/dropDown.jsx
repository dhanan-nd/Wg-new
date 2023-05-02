import { Select, styled, FormControl, MenuItem, Menu, Stack, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
const StyledDropDown = styled(Select)(({ theme }) => ({
    width: 137,
    height: 39,
    borderRadius: 2,
    textTransform: "none",
    boxShadow: 'none',
    backgroundColor: theme.palette.textSecondary.main,
    ".MuiSelect-icon": {
        color: theme.palette.buttonSecondary.main,
        fontSize: 30,
    },
    ".MuiMenu-paper": {
        border: "1px solid black",
        borderRadius: 2
    },
    ".MuiSelect-select": {
        color: theme.palette.buttonSecondary.main,
        paddingTop: "15px",
        paddingRight: "40px",
        fontFamily: theme.fontFamily.primary,
    },
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    {
        border: 0,
    },
    '@media(max-width:420px)': {
        width: 90
    }
}));


export const Dropdown = ({ items, icon, defaultValue }) => {

    return (
        <FormControl>
            <Stack direction={"row"}>
                {icon}
                <StyledDropDown
                    IconComponent={ExpandMoreIcon}
                    defaultValue={defaultValue}
                >
                    {
                        items?.map((item) => (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))
                    }
                </StyledDropDown>
            </Stack>
        </FormControl>
    )
}




