// PACKAGES
import Link from "next/link";
import { ReactNode } from "react";
import { BiDownload } from "react-icons/bi";

interface DownloadButtonProps {
  url: string;
}

/**
 * A download button that takes in a URL and opens it on click
 * @param url: string;
 * @returns ReactNode
 */
const DownloadButton = ({ url }: DownloadButtonProps ): ReactNode => {
  return (
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
  )
}

export default DownloadButton;