
import { Button, Drawer, styled } from '@mui/material';
import { useState } from 'react';


export const StyledMenuDrawer = styled(Drawer)(({ theme, color }) => ({
    ".MuiDrawer-paper": {
        width: 250
    }
}));

export const MenuDrawer = ({ drawerOpen,setDrawerOpen }) => {
    return (
        <>
            <StyledMenuDrawer
                anchor={"right"}
                open={drawerOpen}
            >
                <Button onClick={()=>{setDrawerOpen(false)}} >Close</Button>
            </StyledMenuDrawer>
        </>
    )
}