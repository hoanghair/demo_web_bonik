import React from "react";
import { Link } from "react-router-dom";

import FooterItem from "./FooterItem";
import logo from "../assets/images/logo.svg";
import FooterDownload from "./FooterDownload";
import './Footer.scss'

const Footer = () => {
  const aboutUS = [
    {
      title: "About Us",
      item: [
        "Careers",
        "Our Stores",
        "Our Cares",
        "Terms & Conditions",
        "Privacy Policy",
      ],
      className: "aboutUS",
    },
    {
      title: "Customer Care",
      item: [
        "Help Center",
        "How to Buy",
        "Track Your Order",
        "Corporate & Bulk Purchasing",
        "Returns & Refunds",
      ],
      className: "customerCare",
    },
    {
      title: "Contact Us",
      item: [
        "70 Washington Square South, New York, NY 10012, United States",
        "Email: uilib.help@gmail.com",
        "Track Your Order",
        "Phone: +1 1123 456 780",
        <>
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-google"></i>
          <i class="fa-brands fa-square-instagram"></i>
        </>,
      ],
      className: "contactUs",
    },
  ];

  const download = [
    {
      name: "googlePlay",
      icon: <i class="fa-brands fa-google-play"></i>,
      data: ["Get it on", "Google Play"],
    },
    {
      name: "ios",
      icon: <i class="fa-brands fa-app-store-ios"></i>,
      data: ["Download on the", "App Store"],
    },
  ];

  return (
    <section className="Footer ">
      <div className="container f_flex wrapper1">
        <div className="Footer__download">
          <Link to="/" className="Footer__download-logo">
            <img src={logo} alt="" />
          </Link>
          <p className="Footer__download-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet.
          </p>
          <div className="Footer__download-item f_flex">
            {download.map((value, index) => {
              return (
                <FooterDownload
                  key={index}
                  name={value.name}
                  icon={value.icon}
                  data={value.data}
                />
              );
            })}
          </div>
        </div>

        {aboutUS.map((value, index) => {
          return (
            <FooterItem
              key={index}
              title={value.title}
              data={value.item}
              name={value.className}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Footer;
