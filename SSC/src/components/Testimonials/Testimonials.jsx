import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/mahesh.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/anant.png";
import user_5 from "../../assets/ch1.png";


const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Mahesh Gorle</h3>
                  <span>Salesforce Student Chapter, UTD</span>
                </div>
              </div>
              <p>
                Joining the Salesforce Student Group helped me understand both technical and business aspects of the Salesforce ecosystem. It boosted my confidence.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Emily Smith</h3>
                  <span>Salesforce Student Chapter, UTD</span>
                </div>
              </div>
              <p>
                This club opened doors to mentorship from Salesforce professionals. I’ve built lasting connections and improved my skills in Admin and Flow Builder.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Anant Tyagi</h3>
                  <span>Salesforce Student Chapter, UTD</span>
                </div>
              </div>
              <p>
                From hands-on projects to career-focused workshops, this group has been a game-changer in my journey toward a Salesforce Consultant role.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Sarah Lee</h3>
                  <span>Salesforce Student Chapter, UTD</span>
                </div>
              </div>
              <p>
              UTD’s Salesforce chapter empowered me with practical skills, industry credentials, and invaluable connections.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_5} alt="" />
                <div>
                  <h3>Sai Chakradhar</h3>
                  <span>Salesforce Student Chapter, UTD</span>
                </div>
              </div>
              <p>
              Being part of the Salesforce Student Chapter at UTD has been a game-changer! The club offers great networking and hands-on learning.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
