import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-wrapper min-[900px]:flex justify-between items-center py-5 bg-black text-white px-10">

        <p>{currentYear} All Rights Reserved</p>

        <div className="flex gap-3 underline">
          <p>Primary Policy</p>
          <p>Terms of Use</p>
        </div>

        <div className="icons flex gap-4">
        <FaLinkedin  size={32}  />
        <FaFacebookSquare  size={32}/>
        <FaGithub size={32}/>
        </div>
      </div>
    </>
  );
};

export default Footer;
