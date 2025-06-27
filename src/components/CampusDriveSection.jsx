import React from 'react'

const CampusDriveSection = () => {
  return (
    <>
    <div className="on-campus-drive">
        <div className="on-campus-title">
        <div className="title"><h2>ON-CAMPUS DRIVES</h2></div>
        <div className="graduate-image drive-icon">
            <img src="/assests/homePage/graduated.svg" alt="Graduated-svg" />
        </div>
        </div>
        <div className="companies">
            <div className="hp drive">
            <a href="https://www.hp.com/us-en/shop"><img src="/assests/homePage/hp.svg" alt="Google" /></a>
            </div>
            <div className="tata drive">
            <a href="https://www.tatamotors.com/"><img src="/assests/homePage/tata.svg" alt="Google" /></a>
            </div>
            <div className="infosys drive">
            <a href="https://www.infosys.com/"><img src="/assests/homePage/infosys.svg" alt="Google" /></a>
            </div>
            <div className="google drive">
               <a href="https://www.google.com/about/careers/applications/" target='blank'><img src="../public/assests/homePage/google.svg" alt="Google" /></a>
            </div>
        </div>
    </div>
    </>
  )
}

export default CampusDriveSection