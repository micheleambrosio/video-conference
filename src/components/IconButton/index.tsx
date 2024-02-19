"use client";

import { useState } from "react";

interface Props {
  icon: React.ReactNode;
  onClick: (isActive: boolean) => void;
  disabledStatusIcon?: React.ReactNode;
  defaultValue?: boolean;
  isHighlightIcon?: boolean;
}

const IconButton: React.FC<Props> = ({
  icon,
  disabledStatusIcon,
  defaultValue,
  isHighlightIcon,
  onClick,
}) => {
  const [isActive, setIsActive] = useState(defaultValue ?? true);

  const handleClick = () => {
    setIsActive((prevStatus) => !prevStatus);
    onClick(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        isHighlightIcon
          ? "bg-red-500 hover:bg-red-600 px-10"
          : "bg-black hover:bg-gray-800"
      } text-white p-6 rounded-full text-xl`}
    >
      {isActive || !disabledStatusIcon ? icon : disabledStatusIcon}
    </button>
  );
};

export default IconButton;

