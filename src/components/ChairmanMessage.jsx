import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight} from '@fortawesome/free-solid-svg-icons'

const ChairmanMessage = () => {
  return (
    <>
<div class="chairman-container">
    <div class="left">
        <img src="../public/assests/homePage/chairman.jpg" alt="Chairman"/>
        <div className="chairman-name">
            <h3>SRI DADI RATNAKAR</h3>
            <p style={{color: "red"}}>CHAIRMAN</p>
        </div>
    </div>
    <div class="right">
        <div className="Chairman-content">
        <h2 style={{fontFamily: "Cenzil, serif"}}>CHAIRMAN'S MESSAGE</h2>
        <p style={{fontFamily: "Poppins"}}>Education is the most powerful tool to bring desirable changes in our personality and also to bring positive changes in our society. It is the only medium which enables you to move from darkness to brightness. It is indeed very heartening to witness that our Dadi Institute of Engineering and Technology has carved a name.</p>
        <a href="#" class="button" style={{fontFamily: "Poppins"}}><FontAwesomeIcon className='ic' icon={faCircleChevronRight} style={{color: "whitesmoke",}} /> Read More</a>
        </div>
    </div>
</div>
</>
  )
}

export default ChairmanMessage