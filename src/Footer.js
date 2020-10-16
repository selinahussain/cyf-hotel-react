import React from "react";

const Footer = ({ info }) => {
  return (
    <footer className="footer">
      <ul className="footer-list container d-md-flex justify-content-between mx-auto">
        {info.map((infoItem, index) => (
          <li key={index} className="text-right">
            {infoItem}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
