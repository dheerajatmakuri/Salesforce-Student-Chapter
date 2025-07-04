import React from 'react'
import './Campus.css'
import utd1 from '../../assets/pic8.png'
import utd2 from '../../assets/pic4.png'
import utd3 from '../../assets/pic3.png'
import utd4 from '../../assets/pic10.png'
import utd5 from '../../assets/pic7.png'
import utd6 from '../../assets/pic2.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus' id='gallery'> {/* ✅ Added id for scroll target */}
        <div className="gallery-1">
            <div className="image-container">
                <img src={utd1} alt="UTD campus" />
            </div>
            <div className="image-container">
                <img src={utd2} alt="UTD campus" />
            </div>
            <div className="image-container">
                <img src={utd3} alt="UTD campus" />
            </div>
        </div>
        <div className="gallery-2">
            <div className="image-container">
                <img src={utd4} alt="UTD campus" />
            </div>
            <div className="image-container">
                <img src={utd5} alt="UTD campus" />
            </div>
            <div className="image-container">
                <img src={utd6} alt="UTD campus" />
            </div>
        </div>
        {/* <a href="https://www.linkedin.com/in/sscatutd/" target="_blank" rel="noopener noreferrer">
            <button className='btn dark-btn'>See More Here <img src={white_arrow} alt="" /></button>
        </a> */}
    </div>
  )
}

export default Campus