
import { Box, styled, Stack, useMediaQuery, } from "@mui/material";
import { SectionTitle, SubText } from "../typographies/typography";
import { PrimaryButton ,SecondaryButton} from "../buttons/buttons";
import HeadsetIcon from '@mui/icons-material/Headset';
import { Dropdown } from "../dropDowns/dropDown";
import { BannerBox ,TextBox} from "../box/box";






const ButtonBox = styled((Box))(({ theme }) => ({
    display: "flex",
    position: "absolute",
    bottom: "10%",
    width: "95%",
    justifyContent: "space-between",
    marginLeft: "40px",
    '@media(max-width:600px)': {
        marginLeft: 0,
        width: "99%",
        margin:2
    },

}))



const DeskTopButtonBox = ({ subPrograms }) => {
    return (
        <ButtonBox>
            <Stack display={"flex"} direction="row" spacing={2} >
                {
                    subPrograms?.map((subProgram) => (
                        <PrimaryButton key={subProgram} variant="contained" color="buttonSecondary" >{subProgram}</PrimaryButton>
                    ))
                }
            </Stack>
            <Stack direction={"row"} spacing={2} >
                <SecondaryButton variant="contained" color="headerButtonMain" >Recommendations</SecondaryButton>
                <SecondaryButton variant="contained" color="headerButtonSecondary" >Get in touch</SecondaryButton>
            </Stack>
        </ButtonBox>
    )
}

const MobileButtonBox = ({ subPrograms }) => {
    return (
        <ButtonBox >
            <Dropdown items={["Lower back", "Upper back","Middle back"]} defaultValue={"Upper back"} />
            <Stack direction={"row"} spacing={0.5} >
                <SecondaryButton variant="contained" color="headerButtonMain" >Recommendations</SecondaryButton>
                <SecondaryButton variant="contained" color="headerButtonSecondary" >
                    <HeadsetIcon />
                </SecondaryButton>
            </Stack>
        </ButtonBox>

    )
}


export const Banner = ({ url, text, subPrograms = ["Upper Back", "Lower Back", "Middle Back", "Upper Back", "Upper Back"] }) => {
    const isSmallScreen = useMediaQuery('(max-width:1100px)');
    return (
        <BannerBox url={url} >
            <TextBox>
                <Stack spacing={1} >
                    <SectionTitle variant="secondaryTitle" color="textSecondary"  >Back Pain</SectionTitle>
                    <SubText variant="secondaryTitle" color="textSecondary" >Back pain can range from a dull, constant ache to a sudden, sharp pain.</SubText>
                </Stack>
            </TextBox>
            {isSmallScreen ? <MobileButtonBox /> : <DeskTopButtonBox subPrograms={subPrograms} />}
        </BannerBox>
    )
}