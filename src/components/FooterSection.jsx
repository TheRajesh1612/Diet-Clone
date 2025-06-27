import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMobileScreenButton , faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillCopyrightCircle } from "react-icons/ai";
const FooterSection = () => {
  return (
    <>
    <footer>
    <div className="row">
    <div className="footer-content">
    <div className="last-links">
        <h4>Quick Links</h4>
        <div className="footer-links">
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">COURSES</a></li>
            <li><a href="#">GALLERY</a></li>
            <li><a href="#">ACADEMIC</a></li>
            <li><a href="#">ALUMNI</a></li>
            <li><a href="#">PLACEMENTS</a></li>
        </ul>
        <ul className='links2'>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">FACILITIES</a></li>
            <li><a href="#">CONTACT US</a></li>
            <li><a href="#">ENGG & MBA RESULTS</a></li>
            <li><a href="#">DIPLOMA RESULTS</a></li>
            <li><a href="#">DOWNLOADS</a></li>
        </ul>
        </div>
    </div>

        <div className="contact-us">
            <h4>Contact Us</h4>
            <p><FontAwesomeIcon icon={faLocationDot} style={{color: "#d1d1d1",}} />&nbsp;&nbsp;Dadi Institute of Engineering & Technology(DIET), National Highway 16, Anakapalle, Visakhapatnam-531002, A.P.</p>
            <p><FontAwesomeIcon icon={faPhone} style={{color: "#ededed",}} />&nbsp;&nbsp;(+91) 9963981111</p>
            <p><FontAwesomeIcon icon={faMobileScreenButton} style={{color: "#d6d6d6",}} />&nbsp;&nbsp;(+91) 9963694444</p>
            <p><FontAwesomeIcon icon={faEnvelope} style={{color: "#d4d4d4",}} />&nbsp;&nbsp;admissions@diet.edu.in</p>
        </div>

        <div className="location">
            <h4>We Are Here</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15205.244390429118!2d83.025575!3d17.682758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x612b3d4f4673eee!2sDadi%20Institute%20of%20Engineering%20%26%20Technology%20(A%20NAAC%20Accredited%20Institute)!5e0!3m2!1sen!2sin!4v1589958749828!5m2!1sen!2sin" frameborder="0" width={200} height={180} loading='lazy' title='Location Map'></iframe>
        </div>
        
        <div className="social-media">
            <div className="follow-us">
            <h4>Follow US</h4>
            <ul>
                <li><a href=""><BsInstagram /></a></li>
                <li><a href=""><FaYoutube /></a></li>
                <li><a href=""><FaFacebook /></a></li>
            </ul>
            </div>
        </div>
    </div>
    </div>
    <div className="rights">
        <div className="rights-description">
            <p>All rights reserved <AiFillCopyrightCircle />&nbsp;&nbsp;diet.edu.in</p>
        </div>
    </div>
    </footer>

    </>
  )
}

export default FooterSection