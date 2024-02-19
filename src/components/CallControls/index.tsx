"use client";

import { FiMic } from "react-icons/fi";
import { FiMicOff } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import { FiVideoOff } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";
import { FiPhoneOff } from "react-icons/fi";
import IconButton from "../IconButton";

const CallControls: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <IconButton
        icon={<FiMic />}
        disabledStatusIcon={<FiMicOff />}
        onClick={(isActive: boolean) =>
          console.log(`Button was clicked: ${isActive}`)
        }
      />
      <IconButton
        icon={<FiVideo />}
        disabledStatusIcon={<FiVideoOff />}
        onClick={(isActive: boolean) =>
          console.log(`Button was clicked: ${isActive}`)
        }
      />
      <IconButton
        icon={<FiMonitor />}
        onClick={(isActive: boolean) =>
          console.log(`Button was clicked: ${isActive}`)
        }
      />
      <IconButton
        icon={<FiPhoneOff />}
        onClick={(isActive: boolean) =>
          console.log(`Button was clicked: ${isActive}`)
        }
        isHighlightIcon
      />
    </div>
  );
};

export default CallControls;

