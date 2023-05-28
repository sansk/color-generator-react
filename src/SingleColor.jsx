import React from "react";

export const SingleColor = ({ index, color }) => {
  console.log(index);
  console.log(color);
  return (
    <article
      className={index > 4 ? "color color-light" : "color"}
      style={{ backgroundColor: `#${color.hex}` }}>
      <p>
        Type: {color.type} - {color.weight}%
      </p>
      <p>HEX: #{color.hex}</p>
      <p>RGB: {color.rgb}</p>
      <p>Alpha: {color.alpha}</p>
    </article>
  );
};
