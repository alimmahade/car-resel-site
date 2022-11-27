import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="divider"></div>
      <footer className="footer p-10 bg-neutral text-neutral-content place-items-center">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Help center</Link>
          <Link className="link link-hover">Get started</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <Link to="/about" className="link link-hover">
            24 avenu, Basundhara, Dhaka
          </Link>
        </div>
        <div>
          <span className="footer-title">Get News Letter</span>
          <Link className="link link-hover">
            <textarea className="textarea" placeholder="Email"></textarea>
          </Link>
        </div>
      </footer>
      <div className="divider"></div>
      <p className="pb-5">© 2022, CarBari All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
