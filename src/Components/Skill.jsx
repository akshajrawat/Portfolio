import React from "react";

const Skill = ({ name, icon }) => {
  return (
    <span className="text-xs px-2 py-1 flex items-center border border-[#ffffff51] rounded-full gap-1">
      <img className="h-[12px]" src={icon} alt="" />
      <p> {name}</p>
    </span>
  );
};

export default Skill;
