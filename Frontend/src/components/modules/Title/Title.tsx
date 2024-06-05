import React from "react";

interface title {
  title: String;
  position: String|null;
}

const Title = ({ title, position }: title) => {
  return (
    <h2
      className={`text-coffee font-bold font-playfairDisplay text-[54px] ${
        position === "center" && "text-center"
      }`}
    >
      {title}
    </h2>
  );
};

export default Title;
