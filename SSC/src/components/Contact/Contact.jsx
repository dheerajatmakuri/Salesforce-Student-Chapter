import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail.png";
import phone_icon from "../../assets/phone.png";
import location_icon from "../../assets/location.png";
import linkedin_icon from "../../assets/linkedin.png"; // 🔄 Add this icon in your assets
import instagram_icon from "../../assets/instagram.png"; // 🔄 Add this icon in your assets
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> sscatutd@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" /> +1 (214)-899-8925
          </li>
          <li>
            <img src={location_icon} alt="" /> 800 W. Campbell Road, Richardson,
            TX, USA
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/salesforcestudentchapterutd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin_icon} alt="LinkedIn" /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sscatutd?igsh=N3lrZDd6YzFlYjRl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram_icon} alt="Instagram" /> Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Mobile Number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="3"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
