import React from "react";
import { useTypingEffect } from "../hooks/useTypeingEffect";
import './TypedText.css';

const TypedText = () => {
  const strings = [
    "Daring to be Different to win",
    "Driven by Vision, Defined by Action",
    "Dare to Begin."
  ];

  const text = useTypingEffect(strings, 200, 1500);

  return (
    <div className="h-12 w-full text-xl font-mono text-black bg-white p-4 flex justify-center items-center">
      {text}
      <span className="animate-pulse text-gray-600">|</span>
    </div>
  );
};

export default TypedText;
