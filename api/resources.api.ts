'use server'

import { FullResource, Resource } from "@/types";

/**
 * Fetches resources from NESO's public API. Returns a modified version of each resource
 * containing only the properties relevant for the application.
 * 
 * @returns Promise<Resource[]>
 */
export const getResources = async (): Promise<Resource[]> => {

  // Fetches resources from NESO's public API
  const response = await fetch('https://api.neso.energy/api/3/action/package_show?id=embedded-wind-and-solar-forecasts');
  const data = await response.json();
  const fullResources: FullResource[] = data.result.resources;

  // Returns only the relevant properties
  const resources: Resource[] = fullResources.map((resource: FullResource) => ({
      id: resource.id,
      name: resource.name,
      description: resource.description,
      url: resource.url
  }))

  return resources;
}