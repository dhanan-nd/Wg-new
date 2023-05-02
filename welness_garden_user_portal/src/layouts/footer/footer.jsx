import { ContainerBox, BannerBox, TextBox } from "../../components/box/box"
import bannerImg from "../../assets/images/banner.jpg"
import { Stack } from "@mui/material"
import { SectionTitle, SubText } from "../../components/typographies/typography"


export const Footer = () => {
    return (
        <>
            <BannerBox url={bannerImg} sx={{ height: 293 }} >
                <TextBox>
                    <Stack spacing={1} >
                        <SectionTitle variant="primaryTitle" color="textSecondary" sx={{ fontSize: 30 }} >Wellness Garden</SectionTitle>
                        <SubText variant="primaryTitle" color="textSecondary" >Back pain can range from a dull, constant ache to a sudden, sharp pain.</SubText>
                    </Stack>
                </TextBox>
            </BannerBox>
            <ContainerBox position="footer" >
                <SubText variant="primaryTitle" color="textSecondary" >Back pain can range from a dull, constant ache to a sudden, sharp pain.</SubText>
            </ContainerBox>
        </>

    )
}