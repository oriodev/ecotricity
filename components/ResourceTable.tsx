'use client'

// COMPONENTS
import Resource from "@/components/Resource";
import UtilButton from "@/components/UtilButton";

// TYPES
import { Resource as ResourceType } from "@/types";

// PACKAGES
import { ReactNode, useState } from "react";
import { BiDownload, BiSelectMultiple } from "react-icons/bi";

interface ResourceTableProps {
  resources: ResourceType[];
}

/**
 * A component that renders a table of resources and handles multiple selection
 * @param resources: Resource[] 
 * @returns ReactNode
 */
const ResourceTable = ({ resources }: ResourceTableProps ): ReactNode => {

  // MULTIPLE SELECTION LOGIC

  const [selectedResources, setSelectedResources] = useState<ResourceType[]>([]);
  const addResource = (resource: ResourceType) => setSelectedResources(prev => [resource, ...prev]);
  const removeResource = (resource: ResourceType) => setSelectedResources(prev => prev.filter(res => res.id !== resource.id));

  /**
   * Checks whether a resource is in selected resources and adds or removes it
   * @param resource 
   */
  const onCheck = (resource: ResourceType): void => {
    const resourceSelected = selectedResources.includes(resource);
    resourceSelected ? removeResource(resource) : addResource(resource);
  }

  /**
   * Adds all resources to selected resources
   */
  const selectAllResources = (): void => {
    selectedResources.length === resources.length 
      ? setSelectedResources([]) 
      : setSelectedResources(resources);
  }

  /**
   * Downloads all resources in selected resources
   */
  const downloadAllResources = () => {
    selectedResources.forEach(res => (
      // this is the easiest, rather than the most elegant, solution 
      // to a surprisingly complex problem
      window.open(res.url, res.name)
    ))

    setSelectedResources([]);
  }

  return (
      <div className="w-2/3 flex flex-col gap-5 mt-15">
        {/* Selection Buttons */}
        <div className="flex gap-5">
          <UtilButton
            text="Select All"
            icon={BiSelectMultiple} 
            activeText="Unselect All"
            active={selectedResources.length === resources.length}
            onClick={selectAllResources}
          />

          <UtilButton
            text="Download Selected"
            icon={BiDownload}
            disabled={selectedResources.length === 0}
            onClick={downloadAllResources} 
          />
        </div>

        {/* Renders resources */}
        <div className="w-full flex flex-col gap-7">
          {
            resources.map(resource => (
              <Resource 
                key={resource.name}
                resource={resource}
                onCheck={onCheck}
                selected={selectedResources.includes(resource)} 
              />
            ))
          }
        </div>
      </div>
  )
}

export default ResourceTable;