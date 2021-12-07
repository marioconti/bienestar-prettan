import React from "react";
import "./Welcome.css";
export const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="glass-container">
        <h1>¡Welcome to PRETTAN USA!</h1>
        <p>
          We are happy to announce that we are officially selling in the USA!
          PRETTAN is dedicated to looking after your well-being and health,
          bringing you quality natural origin products available through 
          <span>
            <a
              href="https://www.amazon.com.mx/s?me=A6KPL46OPBDX8&marketplaceID=A1AM78C64UM0Y8"
              target="_blank"
            >
            {""} Amazon {""}
            </a>
          </span>
           marketplace!
        </p>
      </div>
    </div>
  );
};
