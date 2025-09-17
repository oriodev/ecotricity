import { getResources } from "@/api/resources.api";

export default async function Home() {

  // Fetch resources
  const resources = await getResources();

  return (
    <div>
      <p>Ecotricity</p>

      {/* Renders resources */}
      <div>
        {
          resources.map(resource => (
            <div key={resource.name}>
              <h3>{resource.name}</h3>
              <p>{resource.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
