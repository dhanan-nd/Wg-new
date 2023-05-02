
import { SectionTitle, TopHeaderText } from "../../components/typographies/typography"
import { useTheme, Box, Stack, Typography, useMediaQuery, Container } from "@mui/material"
import { SecondaryButton } from "../../components/buttons/buttons";
import { BannerContainer, ContainerBox, MainHeader } from "../../components/box/box";
import './header.css'
import LanguageIcon from '@mui/icons-material/Language';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import headerLogo from '../../assets/images/headerLogo.svg'
import { Banner } from "../../components/banner/banner";
import bannerImag from '../../assets/images/banner.jpg'
import { useState } from "react";
import { MenuDrawer } from "../../components/drawer/menuDrawer";
const DeskTopHeader = () => {
    return (
            <Stack direction={"row"} spacing={4} display="flex" alignItems={"center"} >
                <Typography>Pain Program</Typography>
                <Typography>Wellness Program</Typography>
                <Typography>Blog</Typography>
                <Typography>Our Story</Typography>
                <SecondaryButton variant="contained" color="buttonPrimary"  sx={{height:54}} >Get in touch </SecondaryButton>
            </Stack>
    )
}

const MobileHeader = () => {
    const [drawerOpen,setDrawerOpen]= useState(false)
    return (
            <Box marginRight={2} >
                <MenuOutlinedIcon  onClick={()=>setDrawerOpen(true)}  />
                <MenuDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
            </Box>
    )
}


export const Header = () => {
    const isSmallScreen = useMediaQuery('(max-width:1000px)');
    const theme = useTheme()
    console.log(theme,"theme")
    return (
        <Box>
            <ContainerBox position="header"  >
                <Box className="top-header-container" >
                    <Stack direction={"row"} spacing={2} >
                        <Stack direction={"row"} spacing={0.5} >
                            <LanguageIcon sx={{color:"white"}}/>
                            <TopHeaderText>English</TopHeaderText>
                        </Stack>
                        <Stack direction={"row"} spacing={0.5} >
                            <PlaceOutlinedIcon sx={{color:"white"}}/>
                            <TopHeaderText>India</TopHeaderText>
                        </Stack>
                    </Stack>
                </Box>
            </ContainerBox>
            <MainHeader>
            <Box>
                <img src={headerLogo} alt="wellness-garden-logo" className="header_logo" />
            </Box>
            {isSmallScreen ? <MobileHeader /> : <DeskTopHeader />}</MainHeader>
            <BannerContainer>
            <Banner url={bannerImag} />
            </BannerContainer>
        </Box>

    )
}



