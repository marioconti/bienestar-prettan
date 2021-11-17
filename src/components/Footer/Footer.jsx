import "./Footer.css";
import React from "react";

export const Footer = () => {
  return (
    <div className="footer-container">
      <h3 className="marca"> © 2021 - Prettán </h3>
      <div class="e-commerce">
        <a
          className="svg"
          href="https://www.facebook.com/BienestarconPrettan/"
          target="_blank"
        >
          <i
            className="fab fa-facebook-square"
            style={{ fontSize: 30 + "px" }}
          ></i>
        </a>
        <a
          className="svg"
          href="https://www.instagram.com/prettanmexico/?hl=en"
          target="_blank"
        >
          <i
            class="fab fa-instagram-square"
            style={{ fontSize: 30 + "px" }}
          ></i>
        </a>
        <a
          className="svg"
          href="https://www.youtube.com/channel/UCzRnVDScAvo6GaXmGV62jyQ"
          target="_blank"
        >
          <i className="fab fa-youtube" style={{ fontSize: 30 + "px" }}></i>
        </a>
      </div>
    </div>
  );
};
