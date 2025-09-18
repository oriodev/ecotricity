// PACKAGES
import Link from "next/link";
import { ReactNode } from "react";
import { BiDownload } from "react-icons/bi";

interface ResourceProps {
  name: string;
  description: string;
  url: string;
}

/**
 * Returns display for single data resource with 
 * title, description, and download button.
 * 
 * @param name: string
 * @param description: string
 * @param url: string
 * @returns ReactNode
 */
const Resource = ({ name, description, url}: ResourceProps): ReactNode => {

  return (
    <div className="w-full flex justify-between gap-5 pb-3 border-b-2 border-b-solid">
      
      {/* Checkbox and Text */}
      <div className="flex gap-4 items-center">
        {/* Checkbox */}
        {/* TODO: MAKE THIS A REAL CHECKBOX */}
        <div className="w-5 h-5 bg-slate-300">
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <h3 className="text-xl">{name}</h3>
          <p className="text-md">{description}</p>
        </div>
      </div>

      {/* Download Button */}
      <div>
        <Link 
          href={url}
          className="
            flex items-center gap-2 p-4 border-3 border-white bg-ecotricity rounded-md 
            hover:bg-white hover:border-3 hover:border-ecotricity duration-300 ease-in ease-out
          "
        >
          <BiDownload size={22} />
          <p className="text-lg">Download</p>
        </Link>
      </div>
    </div>
  )
}

export default Resource;