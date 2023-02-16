import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IMG1 from "../../assests/cocoa1.jpg"
import IMG2 from "../../assests/cocoa2.jpg"
import IMG3 from "../../assests/cocoa3.jpeg"
import IMG4 from "../../assests/cocoa4.jpg"
import IMG5 from "../../assests/cocoa5.jpg"







const MainCarousel = () => {

    const photos = [
        {
            src: IMG1
        },
        {
            src: IMG2
        },
        {
            src: IMG3
        },
        {
            src: IMG4
        },
        {
            src: IMG5
        }
    ];

    const isNonMobile = useMediaQuery("(min-width:600px)");

    return (
        <Carousel
            autoPlay={true}
            autoFocus={true}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <IconButton
                    onClick={onClickHandler}
                    sx={{
                        backgroundColor: "chocolate",
                        position: "absolute",
                        top: "45%",
                        left: "7px",
                        color: "beige",
                        "&:hover": { color: "chocolate", backgroundColor: "beige" },
                        padding: "3px",
                        zIndex: "10",
                    }}
                >
                    <NavigateBeforeIcon sx={{ fontSize: 56 }} />
                </IconButton>
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
                <IconButton
                    onClick={onClickHandler}
                    sx={{
                        backgroundColor: "chocolate",
                        position: "absolute",
                        top: "45%",
                        right: "7px",
                        color: "beige",
                        "&:hover": { color: "chocolate", backgroundColor: "beige" },
                        padding: "3px",
                        zIndex: "10",
                    }}
                >
                    <NavigateNextIcon sx={{ fontSize: 56 }} />
                </IconButton>
            )}
        >
            {
                photos.map((photo, index) => (
                    <Box key={`carousel-image-${index}`}>
                        <img
                            src={photo.src}
                            alt={`carousel-${index}`}
                            style={{
                                width: "100%",
                                height: "600px",
                                objectFit: "cover",
                                backgroundAttachment: "fixed",
                            }}
                        />
                        <Box
                            color="white"
                            padding={isNonMobile ? "20px" : "10px 20px"}
                            borderRadius="3px"
                            textAlign="left"
                            backgroundColor="rgb(0, 0, 0, 0.4)"
                            position="absolute"
                            top={isNonMobile ? "35%" : "40%"}
                            left={isNonMobile ? "250px" : "0"}
                            right={isNonMobile ? undefined : "0"}
                            margin={isNonMobile ? undefined : "0 auto"}
                            // maxWidth={isNonMobile ? undefined : "200px"}
                        >
                            <Typography lineHeight="1.3"
                            width="850px"
                            fontWeight="bolder"
                             variant={isNonMobile ? "h4" : "h6"}>We take pride in being the most reliable cocoa trading company around</Typography>
                            <Typography
                                fontWeight="bold"
                                marginTop="10px"
                                color="chocolate"
                                sx={{ textDecoration: "underline" }}
                            >
                              scroll down to learn more about us
                            </Typography>
                        </Box>
                    </Box>
                ))}
        </Carousel>
    );
};

export default MainCarousel;