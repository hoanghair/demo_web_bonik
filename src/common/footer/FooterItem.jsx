import React from "react";

const FooterItem = ({ title, data, name }) => {

  return (
    <div className={`FooterItem__${name} FooterItem`}>
      <h3>{title}</h3>
      <ul>
        {data.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default FooterItem;
