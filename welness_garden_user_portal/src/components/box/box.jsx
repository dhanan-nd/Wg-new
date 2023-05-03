import { Box, Container, Stack, styled } from "@mui/material";



export const ContainerBox = styled(Box)(({ theme ,position}) => ({
    backgroundColor: theme.palette.primary.main,
    width: "auto",
    height: 30,
    display: "flex",
    justifyContent: position==="header"?"flex-end":"flex-start",
    alignItems: "center",
}));

export const MainHeader = styled(Container)(({ theme }) => ({
    height: 90,
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: '1800px !important',
}))


export const StyledContainer = styled(Container)(({ theme }) => ({
    maxWidth: '1700px !important',
    position:"relative"
}))



export const BannerBox = styled(Box)(({ theme, url }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "auto",
    height: 416,
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    '@media(max-width:600px)': {
        height: 243,
    },
    justifyContent: "center",
    position: "relative"

}));

export const TextBox = styled((Box))(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
}))


export const RowStack = styled((Stack))(({theme})=>({
    display:"flex",
    flexDirection:"row"
}))
