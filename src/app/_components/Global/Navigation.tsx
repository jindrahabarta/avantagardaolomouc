import React from "react";
import Button from "./Button";

const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 w-screen flex justify-center rounded-b-3xl border-b border-black/20 shadow-md">
      <div className="w-full">
        <nav className="w-full flex justify-between items-center px-4 py-2">
          <p>LOGO</p>
          <ul className="flex gap-2">
            <li>lakjsdfljasdf</li>
            <li>lakjsdfljasdf</li>
            <li>lakjsdfljasdf</li>
          </ul>

          <Button text="Navštiv nás" link="#" variant={1}></Button>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
