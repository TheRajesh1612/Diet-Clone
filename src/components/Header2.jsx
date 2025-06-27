import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faHandshake, faBars ,faFolderOpen, faUsers, faBookOpenReader, faUserPen, faUsersRectangle, faCalendarDays, faCameraRetro, faBook, faIndianRupeeSign, faMapLocationDot, faUser, faFileLines, faCircleCheck, faDownload, faUserTie, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
const Header2 = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const navMenuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
                setIsMenuActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
  return (
    <>
    <div className="header2">
        <div className="diet-logo">
            <img src="../public/assests/homePage/diet-logo.jpg" alt="" />
        </div>

        <button class="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} style={{color: "black"}} />
        </button>

        <div className="icons">
            <div className='lists'>
                <div className="option">
                    <a href="#home">
                <FontAwesomeIcon className='ic1' icon={faHouse} style={{color: "rgb(255, 3, 3)",}} />
                   <p>Home</p> 
                    </a>
                </div>

                <div className="option">
                    <a href="#aboutUs">
                    <FontAwesomeIcon className='ic1' icon={faHandshake} style={{color: "rgb(255, 3, 3)",}}/>
                       <p>About Us</p> 
                    </a>
                </div>

                <div className="option">
                    <a href="#courses">
                    <FontAwesomeIcon className='ic1' icon={faFolderOpen} style={{color: "rgb(255, 3, 3)",}}/>
                        <p>Courses</p>
                    </a>
                    </div>


                  <div className="option">
                    <a href="#staff">
                    <FontAwesomeIcon className='ic1' icon={faUsers} style={{color: "rgb(255, 3, 3)",}}/>
                        <p> Staff</p>
                    </a>
                    </div>
               

                   <div className="option">
                    <a href="#academics">
                    <FontAwesomeIcon className='ic1' icon={faBookOpenReader} style={{color: "rgb(255, 3, 3)",}}/>
                        <p>Academics</p>
                    </a>
                    </div>

                   <div className="option">
                    <a href="#exam-cell">
                    <FontAwesomeIcon className='ic1' icon={faUserPen} style={{color: "rgb(255, 3, 3)",}}/>
                        <p>Exam Cell</p>
                    </a>
                    </div>

                <div className="option">
                    <a href="#facilities">
                    <FontAwesomeIcon className='ic1' icon={faUsersRectangle} style={{color: "rgb(255, 3, 3)",}}/>
                        <p>Facilities</p>
                    </a>
                    </div>

                <div className="option">
                    <a href="#events">
                    <FontAwesomeIcon className='ic1' icon={faCalendarDays} style={{color: "rgb(255, 3, 3)",}}/>
                       <p> Events</p>
                    </a>
                    </div>

                 <div className="option">
                    <a href="#gallery">
                    <FontAwesomeIcon className='ic1' icon={faCameraRetro} style={{color: "rgb(255, 3, 3)",}} />
                       <p> Gallery</p>
                    </a>
                    </div>

                    <div className="option">
                    <a href="#diet-memoir">
                    <FontAwesomeIcon className='ic1' icon={faBook} style={{color: "rgb(255, 3, 3)",}} />
                        <p>Diet Memoir</p>
                    </a>
                    </div>

                    <div className="option">
                    <a href="#iqac">
                    <FontAwesomeIcon className='ic1' icon={faBookOpenReader} style={{color: "rgb(255, 3, 3)",}} />
                        <p>IQAC</p>
                    </a>
                    </div>
                
                    <div className="option">
                    <a href="#naac">
                    <FontAwesomeIcon className='ic1' icon={faBook} style={{color: "rgb(255, 3, 3)",}} />
                        <p>NAAC</p>
                    </a>
                    </div>

                    <div className="option">
                    <a href="#online-payment">
                    <FontAwesomeIcon className='ic1' icon={faIndianRupeeSign} style={{color: "rgb(255, 3, 3)",}} />
                       <p> Online </p><p>Payment</p>
                    </a>
                    </div>

                    <div className="option">
                    <a href="#contactUs">
                    <FontAwesomeIcon className='ic1' icon={faMapLocationDot} style={{color: "rgb(255, 3, 3)",}} />
                        <p>Contact us</p>
                    </a>
                    </div>
            </div>
        </div>
    </div>

        <div class="sub-bar1">
            <span className='eamcet zoom-text'><strong>EAMCET Code:</strong> DIET</span>
            <div class="quick-links">
                <a className='zoom-text' href="http://103.138.0.69/ecap/"><FontAwesomeIcon  icon={faUser} style={{color: "white",}} />&nbsp;&nbsp;DIET Login</a>
                <a className='zoom-text' href="https://diet.edu.in/site_assets/pdf/ARI-C-17948.pdf"><FontAwesomeIcon icon={faFileLines} style={{color: "white",}} />&nbsp;&nbsp;ARIIA</a>
                <a className='zoom-text' href="https://diet.edu.in/site_assets/pdf/Innovation-and-entrepreneurship-policy.pdf"><FontAwesomeIcon icon={faFileLines} style={{color: "white",}} />&nbsp;&nbsp;NISP</a>
                <a className='zoom-text' href="https://diet.edu.in/site_assets/pdf/NIRF_2024.pdf"><FontAwesomeIcon icon={faFileLines} style={{color: "white",}} />&nbsp;&nbsp;NIRF</a>
                <a className='zoom-text' href="https://diet.edu.in/aicte/AICTE_Mandatory_disclosure_2024.pdf"><FontAwesomeIcon icon={faFileLines} style={{color: "white",}} />&nbsp;&nbsp;AICTE</a>
                <a className='zoom-text' href="#"><FontAwesomeIcon icon={faCircleCheck} style={{color: "white",}} />&nbsp;&nbsp;Admission Enquiry</a>
                <a className='zoom-text' href="#"><FontAwesomeIcon icon={faUser} style={{color: "white",}} />&nbsp;&nbsp;Alumni</a>
                <a className='zoom-text' href="#"><FontAwesomeIcon icon={faDownload} style={{color: "white",}} />&nbsp;&nbsp;Downloads</a>
                <a className='zoom-text' href="#"><FontAwesomeIcon icon={faUserTie}  style={{color: "white",}} />&nbsp;&nbsp;Placements</a>
                <a className='zoom-text' href="#"><FontAwesomeIcon icon="fa-brands fa-youtube" style={{color: "white",}} /> Youtube</a>
            </div>
        </div>

        <div className="sub-bar2">
            <div className="events">
                <p>News & Events</p>
            </div>
        </div>
       <div class="news-ticker">
        <span class="news-label"><p className='zoom-text'>Flash News:</p></span>
        <div class="flash-news">
            <marquee><FontAwesomeIcon icon={faCircleArrowRight} style={{color: "#721d1d",}} /> DIET has been awarded as "INDIA'S BEST ENGINEERING INSTITUTES 2023" with "AAA" rating by CAREERS 360. <FontAwesomeIcon icon={faCircleArrowRight} style={{color: "#721d1d",}} /> DIET Is an Autonomous Institute</marquee>
        </div>
 
    </div> 
    </>
  )
}

export default Header2