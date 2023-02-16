import "./Gallery.css";
import { useState } from "react";
import {AiFillCloseSquare} from "react-icons/ai"
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"


const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);


    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
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
        <div>
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