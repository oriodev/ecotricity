// PACKAGES
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface UtilButtonProps {
  text: string;
  icon: IconType;
  onClick: () => void;
  active?: boolean;
  activeText?: string;
  disabled?: boolean;
}

/**
 * Renders a utility/selection button with text and an icon.
 * Active and disabled modes are optional but supported.
 * 
 * @param text: string
 * @param icon: IconType
 * @param onClick: () => void;
 * @param active?: boolean;
 * @param activeText?: string;
 * @param disabled?: string;
 * @returns ReactNode
 */
const UtilButton = ({ text, icon: Icon, active = false, activeText, disabled = false, onClick }: UtilButtonProps): ReactNode => {

  return (
    <div 
      className={`
        flex justify-center items-center gap-2 rounded-4xl 
        ${
          disabled ? 'bg-slate-200 border-3 border-slate-200 text-slate-700 p-4'
          : (
            active ? 'bg-white p-4 border-3 border-ecotricity hover:cursor-pointer hover:bg-ecotricity hover:border-3 hover:border-white'
            : 'bg-ecotricity p-4 border-3 border-white hover:cursor-pointer hover:bg-white hover:border-3 hover:border-ecotricity'
          )
        } 
        duration-300 ease-in ease-out
      `}
      onClick={onClick}
    >
      <Icon size={20} />
      <p className="text-md">{ active ? activeText : text }</p>
    </div>
  )
}

export default UtilButton;