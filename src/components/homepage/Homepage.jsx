import React from 'react'
import MainCarousel from '../mainSlider/MainSlider'
import "./HomePage.css"
import { Link } from 'react-router-dom'
import IMG1 from "../../assests/cocoa1.jpg"
import IMG2 from "../../assests/cocoa2.jpg"
import IMG3 from "../../assests/cocoa3.jpeg"
import IMG4 from "../../assests/cocoa4.jpg"
import IMG5 from "../../assests/cocoa5.jpg"

const Homepage = () => {
    return (
        <div className='homepage'>
            <MainCarousel />
            <div className='welcome'>
                <h1>About Us</h1>

                <div className="welcome-text">
                    <h1>TUWOL COCOA TRADING COMPANY</h1>
                    <p>founded in 2010 but our history goes far behind.
                        founder was formely an employee of starlinks global and ideal limited,
                        a prominent cocoa producer and supplier to many international buyers for more than 50 years.
                        We have continued with knowledge, and experience from being an employee to being one of the major
                        supplier of cocoa in last 10years.</p>
                    <Link to="/about"><button>More About Us</button></Link>
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
                    {/* <div className="serv">
                        <h3>LOGISTICS</h3>
                        <p>
                            We are fully represented across lengta, this has necessitated us to classify
                            these locations into zones. Our warehouses are locate
                            d in all the zones across Nigeria with its main warehouse in Lagos.
                            Lagos warehouse is located
                            on Lagos –Apapa expressway,
                             its proximity to Nigeria’s major seaport gives it an added advantage to shipping.
                        </p>

                    </div> */}
                </div>

            </div>

            {/* gallery */}


            <div className='services'>
                <h1>From Our Gallery</h1>
                <div className="gallery-box">
                    <div className="gallery .box1">
                        <img src={IMG1} alt="" />
                    </div>
                    <div className="gallery .box2">
                        <img src={IMG5} alt="" />
                    </div>
                    <div className="gallery .box3">
                        <img src={IMG2} alt="" />
                    </div>
                    <div className="gallery .box3">
                        <img src={IMG3} alt="" />
                    </div><div className="gallery .box3">
                        <img src={IMG4} alt="" />
                    </div><div className="gallery .box3">
                        <img src={IMG5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage