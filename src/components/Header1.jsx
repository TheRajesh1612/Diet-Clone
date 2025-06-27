import React from 'react'

const Header1 = () => {
  return (
    <>
    <div className="navSection">
        <div className="space"></div>
        <div className="header">
            <h1>DADI INSTITUTE OF ENGINEERING & TECHNOLOGY</h1>
            <h3>(An Autonomous Institute)</h3>
            <p>Approved by AICTE & Permanently affiliated to JNTU GV, Accredited by NAAC with 'A' Grade and Inclusion u/s 2(f) & 12(B) of UGC Act</p>
            <p>An ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 Certified Institute</p>
            <p>NH-16, Anakapalle, Visakhapatnam-531002, A.P., 9963694444</p>
        </div>

        <div className="logos">
        <div className="university">
            <img src="/assests/homePage/university-logo.png" alt="" />
        </div>

        <div className="naac-logo">
            <img src="../public/assests/homePage/NAAC-logo.jfif" alt="" />
        </div>
        </div>
    </div>
    </>
  )
}

export default Header1
