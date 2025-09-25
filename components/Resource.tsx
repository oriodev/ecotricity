'use client'

// TYPES
import { Resource as ResourceType } from "@/types";

// PACKAGES
import { ReactNode } from "react";
import Checkbox from "./Checkbox";
import DownloadButton from "./DownloadButton";

interface ResourceProps {
  resource: ResourceType
  onCheck: (resource: ResourceType) => void;
  selected: boolean;
}

/**
 * Returns display for single data resource with 
 * title, description, download button, and selection checkbox.
 * 
 * @param resource: Resource
 * @param onCheck: (resource: ResourceType) => void;
 * @param selected: boolean
 * @returns ReactNode
 */
const Resource = ({ resource, onCheck, selected}: ResourceProps): ReactNode => {
  const {name, description, url} = resource;

  const handleCheck = () => onCheck(resource);

  return (
    <div className="w-full flex justify-between gap-5 pb-3 border-b-2 border-b-solid">
      
      {/* Checkbox and Text */}
      <div className="flex gap-4 items-center">
        <Checkbox selected={selected} handleCheck={handleCheck} />

        {/* Text */}
        <div className="flex flex-col">
          <h3 className="text-xl">{name}</h3>
          <p className="text-md">{description}</p>
        </div>
      </div>

      {/* Download Button */}
      <DownloadButton url={url} />
    </div>
  )
}

export default Resource;