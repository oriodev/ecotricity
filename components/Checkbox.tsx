// PACKAGES
import { ReactNode } from "react";

interface CheckboxProps {
    handleCheck: () => void;
    selected: boolean;
}

/**
 * A checkbox component with conditional styling and onClick handling
 * @param selected: boolean
 * @param handleCheck: () => void;
 * @returns ReactNode
 */
const Checkbox = ({ selected, handleCheck }: CheckboxProps ): ReactNode => {
  return (
    <div
      className={`w-5 h-5 hover:cursor-pointer ${selected ? 'bg-ecotricity' : 'bg-slate-300'}`}
      onClick={handleCheck}
    ></div>
  )
}

export default Checkbox;