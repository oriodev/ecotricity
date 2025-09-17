// Components
import DecorativeBar from "@/components/DecorativeBar";

// Packages
import Image from "next/image";

// Types
import { ReactNode } from "react";

/**
 * Renders top header including logo, page title, and decorative bar.
 * @returns ReactNode
 */
const Header = (): ReactNode => {
  return (
    <div className="w-full flex flex-col items-center gap-3">

      {/* Logo and page title */}
      <div className="w-full flex flex-col items-center gap-3 p-5">
        <Image
          src={'/elements/title.svg'}
          alt="ecolibrium"
          width={400}
          height={200}
        />
        <p>Resource Data Archive</p>
      </div>

      {/* Purely decorative SVG */}
      <DecorativeBar />
    </div>
  )
}

export default Header;