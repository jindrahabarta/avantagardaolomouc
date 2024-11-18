import React from "react";

interface props {
  variant: number;
  text: string;
  link: string;
  className?: string;
}

const Button = ({ text, variant, link, className }: props) => {
  if (variant === 1)
    return (
      <button
        type="button"
        aria-label={text + link}
        className={`border-orange-500 bg-orange-500 border-2 rounded-3xl ${className}`}
      >
        <div className="py-2 px-10 text-xl font-semibold  text-white">
          {text}
        </div>
      </button>
    );
};

export default Button;
