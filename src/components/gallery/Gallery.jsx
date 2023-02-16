import "./Gallery.css";
import { useState } from "react";
import {AiFillCloseSquare} from "react-icons/ai"
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"
import IMG1 from "../../assests/cocoa1.jpg"
import IMG2 from "../../assests/cocoa2.jpg"
import IMG3 from "../../assests/cocoa3.jpeg"
import IMG4 from "../../assests/cocoa4.jpg"
import IMG5 from "../../assests/cocoa5.jpg"


const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);


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
        },
        {
            src: IMG1
        },
        {
            src: IMG2
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 6 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 6 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };

    return (
        <div className="gal">
            <h1>Our Gallery</h1>
            <>
                {
                    <div className="hotelContainer">
                        {open && (
                            <div className="slider">
                                <AiFillCloseSquare
                                    // icon={faCircleXmark}
                                    className="close"
                                    onClick={() => setOpen(false)}
                                />
                                <BsFillArrowLeftCircleFill
                                    // icon={faCircleArrowLeft}
                                    className="arrow"
                                    onClick={() => handleMove("l")}
                                />
                                <div className="sliderWrapper">
                                    <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                                </div>
                                <BsFillArrowRightCircleFill
                                    // icon={faCircleArrowRight}
                                    className="arrow"
                                    onClick={() => handleMove("r")}
                                />
                            </div>
                        )}
                        <div className="hotelWrapper">
                            <div className="hotelImages">
                                {photos?.map((photo, i) => (
                                    <div className="hotelImgWrapper" key={i}>
                                        <img
                                            onClick={() => handleOpen(i)}
                                            src={photo.src}
                                            alt=""
                                            className="hotelImg"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }
            </>
        </div>
    );
};

export default Hotel;