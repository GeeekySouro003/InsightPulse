import React from "react";

const HButton = ({ white, className, children, ...rest }) => {
  const buttonStyles = {
    border: "none",
    color: white ? "#fff" : "#1A2130",
    backgroundImage: "linear-gradient(30deg, #0400ff, #4ce3f7)",
    borderRadius: "20px",
    backgroundSize: "100% auto",
    fontFamily: "inherit",
    fontSize: "17px",
    padding: "0.6em 1.5em",
    cursor: "pointer", // Ensuring the button shows a pointer cursor
  };

  const handleHover = (e) => {
    e.target.style.backgroundPosition = "right center";
    e.target.style.backgroundSize = "200% auto";
    e.target.style.webkitAnimation = "pulse 2s infinite";
    e.target.style.animation = "pulse512 1.5s infinite";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundPosition = "initial";
    e.target.style.backgroundSize = "100% auto";
    e.target.style.webkitAnimation = "none";
    e.target.style.animation = "none";
  };

  return (
    <button
      style={buttonStyles}
      className={`hover:text-text ${className}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseOut}
      {...rest}
    >
      {children}
    </button>
  );
};

export default HButton;

// CSS-in-JS styles (for reference):
const keyframes = {
  "@keyframes pulse512": {
    "0%": {
      boxShadow: "0 0 0 0 #05bada66",
    },
    "70%": {
      boxShadow: "0 0 0 10px rgb(218 103 68 / 0%)",
    },
    "100%": {
      boxShadow: "0 0 0 0 rgb(218 103 68 / 0%)",
    },
  },
};
