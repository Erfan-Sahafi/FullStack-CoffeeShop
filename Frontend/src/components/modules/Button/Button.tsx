import React from "react";

const Button = (props:any) => {
  return (
    <button className="w-28 bg-main text-center py-2 text-secondry rounded-3xl shadow-button mt-8">
      {props.text}
    </button>
  );
};

export default Button;
