import React from 'react'
import MainCarousel from '../mainSlider/MainSlider'
import "./HomePage.css"

const Homepage = () => {
    return (
        <div className='homepage'>
            <MainCarousel />
            <div className='welcome'>
                <h1>About Us</h1>

                <div className="welcome-text">
                    <h1>TUWOL COCOA TRADING COMPANY</h1>
                    <p>Our history dates back to 1948, however, our operation as it is today was incorporated in 2002, with formation and transition period between 1999-2002.
                        We emanated from R.A. Adeniji Enterprises, a prominent cocoa producer and supplier to many international buyers for more than 50 years.
                        We have continued this knowledge and skills successfully from the farms to many of our clients; many of whom are cocoa processors and chocolate producers globally.</p>
                    <button>More About Us</button>
                </div>
            </div>
            <div className='services'>
                <h1>Services</h1>
                <div className="service-box">
                    <div className="serv">
                        <h3>AGRICULTURAL PRODUCE</h3>
                        <p>
                            Tuwol’s strategy has been to focus exclusively on its’ core competence which is marketing
                            of agricultural produce, mainly Cocoa beans targeting the top end of Local
                            & International
                            markets. We are mainly located in Benin, one of the major cocoa producing area in Nigeria,
                            this has given us a niche among our pairs
                            . We have an all-round yearly supply of cocoa with high quality in respective of season
                            or weather
                            with an annual tonnage of 5,000 – 10,000 tons of cocoa..
                        </p>
                    </div>

                    <div className="serv">
                        <h3>WAREHOUSING</h3>
                        <p>
                            We have a very spacious, ventilated and condusive warehouse located in our main office
                            in benin state, one of the major cocoa producing area in Nigeria.

                        </p>
                    </div>
                    <div className="serv">
                        <h3>LOGISTICS</h3>
                        <p>
                            We are fully represented across lengta, this has necessitated us to classify
                            these locations into zones. Our warehouses are located in all the zones across Nigeria with its main warehouse in Lagos.
                            Lagos warehouse is located
                            on Lagos –Apapa expressway, its proximity to Nigeria’s major seaport gives it an added advantage to shipping.
                        </p>

                    </div>
                </div>

            </div>

            {/* gallery */}


            <div className='services'>
                <h1>From Our Gallery</h1>
                <div className="gallery-box">
                    <div className="gallery .box1">
                        warehosusing
                    </div>
                    <div className="gallery .box2">
                        logistic
                    </div>
                    <div className="gallery .box3">
                        Agricultural service
                    </div>
                    <div className="gallery .box3">
                        Agricultural service
                    </div><div className="gallery .box3">
                        Agricultural service
                    </div><div className="gallery .box3">
                        Agricultural service
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage