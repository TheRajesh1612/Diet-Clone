import React from 'react'

const ProfessionalBodies = () => {
  return (
    <>
    <div class="Professional-container">
        <div class="title" style={{fontFamily: "Cinzel"}}>PROFESSIONAL BODIES</div>
        <div class="subtitle" style={{fontFamily: "Poppins"}}>DIET is an Institutional Member of</div>
        <div className="graduate-image style-icon">
            <img src="/assests/homePage/graduated.svg" alt="Graduated-svg" />
        </div>
        <div class="grid" >
            <div class="box"><a href="#"><h3 style={{fontFamily:"Poppins"}}>IEEE</h3><br/><p style={{fontFamily:"Poppins"}}>Institute of Electrical and Electronics Engineers</p></a></div>
            <div class="box"><a href="#"><h3 style={{fontFamily:"Poppins"}}>CSI</h3><br/><p style={{fontFamily:"Poppins"}}>Computer Society of India</p></a></div>
            <div class="box"><a href="#"><h3 style={{fontFamily:"Poppins"}}>IETE</h3><br/><p style={{fontFamily:"Poppins"}}>Institution of Electronics & Telecommunication Engineers</p></a></div>
            <div class="box"><a href="#"><h3 style={{fontFamily:"Poppins"}}>ISTE</h3><br/><p style={{fontFamily:"Poppins"}}>Indian Society For Technical Education</p></a></div>
            <div class="box"><a href="#"><h3 style={{fontFamily:"Poppins"}}>IEI</h3><br/><p style={{fontFamily:"Poppins"}}>Institute of Engineers India</p></a></div>
            <div class="box"><a href="#"><h3 style={{fontFamily:"Poppins"}}>IIC</h3><br/><p style={{fontFamily:"Poppins"}}>Institution Innovation Council</p></a></div>
            <div class="box"><a href="#"><h3 style={{fontFamily:"Poppins"}}>ACM</h3><br/><p style={{fontFamily:"Poppins"}}>Association for Computing Machinery</p></a></div>
            <div class="box"><a href="#"><h3 style={{fontFamily:"Poppins"}}>IET</h3><br/><p style={{fontFamily:"Poppins"}}>Institution of Engineering and Technology</p></a></div>
        </div>
    </div>
    </>
  )
}

export default ProfessionalBodies