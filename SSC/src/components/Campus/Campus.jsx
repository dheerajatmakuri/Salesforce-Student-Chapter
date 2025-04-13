import React from 'react'
import './Campus.css'
import utd1 from '../../assets/utd1.png'
import utd2 from '../../assets/utd2.png'
import utd3 from '../../assets/utd3.png'
import utd4 from '../../assets/utd4.png'
import utd5 from '../../assets/utd5.png'
import utd6 from '../../assets/utd6.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus' id='gallery'> {/* ✅ Added id for scroll target */}
        <div className="gallery-1">
            <img src={utd1} alt="" />
            <img src={utd2} alt="" />
            <img src={utd3} alt="" />
        </div>
        <div className="gallery-2">
            <img src={utd4} alt="" />
            <img src={utd5} alt="" />
            <img src={utd6} alt="" />
        </div>
        <a href="https://www.linkedin.com/in/sscatutd/" target="_blank" rel="noopener noreferrer">
            <button className='btn dark-btn'>See More Here <img src={white_arrow} alt="" /></button>
        </a>
    </div>
  )
}

export default Campus
