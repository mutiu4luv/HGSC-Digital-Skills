import React, { useEffect, useState } from "react";

import "./Footer.css";

const Footer = () => {
  const [copyrightText, setCopyrightText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const copyrightString =
      " Copyright 2024 HGSC² Digital Skills. All Rights Reserved.";
    let i = 0;

    const typeWriter = () => {
      if (i < copyrightString.length) {
        setCopyrightText(copyrightString.substring(0, i + 1));
        i++;
        setIsTyping(true);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setCopyrightText("");
          i = 0;
        }, 2000);
      }
    };

    const typingInterval = setInterval(typeWriter, 50); // Adjust typing speed (lower for faster)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div>
      <footer className="church-footer">
        <div className="footer-content">
          <div className="footer-info">
            {/* <i className="fa-solid fa-church"></i>{" "} */}
            <div
              style={{
                color: "white",
                fontSize: "25px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              className="navbar-logo"
            >
              <a href="/">
                HGSC² Digital Skills
                {/* <img src={logo} alt="Logo" className="navbar-logo-image" /> */}
              </a>
            </div>
            <p>Follow us on our social media platforms below.</p>
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.linkedin.com/company/hgsc%C2%B2-community/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61553370504723&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/message/UBJLJZJGN4ESE1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Information:</h3>
            <ul>
              <li>
                <i className="fa-solid fa-phone"></i> Phone:
                <a href="tel:+2349071651329">+2349071651329</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i> Email:
                <a href="mailto:bennypresh42@gmail.com">
                  bennypresh42@gmail.com
                </a>
              </li>
              <li>
                <i className="fa-solid fa-map-marker-alt"></i> Address: Coker,
                Surulere, Lagos state. Nigeria
              </li>
            </ul>
          </div>
          <div className="footer-designed-by">
            <h3> Designed by:</h3>
            <ul>
              <li>
                <i className="fa-solid fa-phone"></i> Phone:
                <a href="tel:+2347031911306">+2347031911306</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i> Email:
                <a href="mailto:chidiemmamadu@gmail.com">
                  chidiemmamadu@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <span className={isTyping ? "typewriter typing" : "typewriter"}>
            {copyrightText}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
