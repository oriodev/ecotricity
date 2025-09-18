// COMPONENTS
import { ReactNode } from "react";
import DecorativeBar from "./DecorativeBar";

/**
 * Returns a simple footer with a decorative svg 
 * to mimic the public facing website design.
 * @returns ReactNode
 */
const Footer = (): ReactNode => {
  return (
    <div className="w-full bg-lime-100 h-30 mt-20">
      <DecorativeBar />
    </div>
  )
}

export default Footer;