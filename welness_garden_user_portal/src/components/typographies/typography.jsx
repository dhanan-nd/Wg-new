import { Typography, styled } from "@mui/material";


export const SectionTitle = styled(Typography)(({ theme, color ,uppercase}) => ({
    color:theme?.palette?.[color]?.main?theme?.palette?.[color]?.main:theme.palette.primary.main,
    textAlign:"center",
    '@media(max-width:600px)': {
        fontSize: 22
    },
    textTransform:uppercase?'uppercase':"none"
}));

export const SubText = styled(Typography)(({ theme, color }) => ({
    color:theme?.palette?.[color]?.main?theme?.palette?.[color]?.main:theme.palette.primary.main,
    fontSize:"16px",
    fontWeight:"400px",
    textAlign:"center",
    '@media(max-width:600px)': {
        fontSize:"12px"
    }
}));

export const TopHeaderText = styled(Typography)(({ theme }) => ({
    color: theme.palette.textSecondary.main,
    fontFamily: theme.fontFamily.primary,
    fontWeight: 500,
    fontSize: 15,
    '@media(max-width:600px)': {
        fontSize: 15
    }
}))