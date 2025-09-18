// PACKAGES
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface UtilButtonProps {
  text: string;
  icon: IconType;
}

/**
 * Renders a utility/selection button with text and an icon.
 * 
 * @param text: string
 * @param icon: IconType
 * @returns ReactNode
 */
const UtilButton = ({ text, icon: Icon }: UtilButtonProps): ReactNode => {
  return (
    <div className="flex justify-center items-center gap-2 rounded-4xl ecotricity p-4">
      <Icon size={20} />
      <p className="text-md">{ text }</p>
    </div>
  )
}

export default UtilButton;