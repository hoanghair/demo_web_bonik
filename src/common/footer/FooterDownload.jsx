import React from "react";

const FooterDownload = ({ icon, data, name }) => {
  return (
    <div className={`FooterDownload__${name} FooterDownload`}>
      {icon}
      <div className="FooterDownload__item">
        {data.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </div>
    </div>
  );
};

export default FooterDownload;
