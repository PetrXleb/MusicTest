import React from "react";

const VariantComponent = ({ index, text, checkAnswer }) => {
  //
  const handleClick = () => {
    checkAnswer();
  };
  //
  return (
    <p className={"variant"} onClick={handleClick}>
      {text}
    </p>
  );
};

export default VariantComponent;
