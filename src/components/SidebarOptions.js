import React from "react";

const SidebarOptions = ({ title, active }) => {
  return (
    <ul
      class={`${
        active && "text-blue-500 border-b-2 border-blue-100 bg-gray-100"
      } flex flex-col space-y-4 py-4 px-4 text-lg font-semibold hover:bg-gray-100
      cursor-pointer  `}
    >
      <li>{title}</li>
    </ul>
  );
};

export default SidebarOptions;
