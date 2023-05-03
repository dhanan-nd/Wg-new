import { Stack, Box, useMediaQuery } from "@mui/material"
import { StyledContainer, TextBox, } from "../box/box"
import { SectionTitle, SubText } from "../typographies/typography"
import { PopularPackageCard } from "./popularPackageCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation]);

const popularPackage = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

import './popularPackage.css'
import { useState } from "react";
import { useEffect } from "react";
export const PopularPackage = () => {
    const [activeCardIndex, setActiveCardIndex] = useState(0)
    const [cardPerPage, setCardPerPage] = useState(5)
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    useEffect(()=>{
        isSmallScreen&&setCardPerPage(1.5)
    },[isSmallScreen])
    return (
        <>
            <StyledContainer >
                <TextBox sx={{ margin: 3 }} >
                    <Stack spacing={1} >
                        <SectionTitle variant="primaryTitle" color="primary" >Most Popular Package</SectionTitle>
                        <SubText variant="secondaryTitle" color="textPrimary" >Back pain can range from a dull, constant ache to a sudden, sharp pain</SubText>
                    </Stack>
                </TextBox>
                <Box>
                    <Swiper
                        navigation={{
                            prevEl: '.swiper-button-next',
                            nextEl: '.swiper-button-prev',
                        }}
                        spaceBetween={5}
                        slidesPerView={cardPerPage}
                        onSlideChange={(e) => { console.log(e, "activeIndex"), setActiveCardIndex(e.realIndex) }}
                        loop={true}
                    >
                        {
                            popularPackage?.map((each, index) => (
                                <SwiperSlide key={index}  >
                                    <PopularPackageCard data={each} active={index === activeCardIndex} />
                                </SwiperSlide>
                            ))
                        }
                        {/* Previous and next arrow buttons */}
                    </Swiper>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </Box>
            </StyledContainer>
        </>
    )
}




