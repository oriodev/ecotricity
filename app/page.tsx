import { getResources } from "@/api/resources.api";
import Header from "@/components/Header";


export default async function Home() {

  // Fetch resources
  const resources = await getResources();

  return (
    <div className="w-full flex flex-col items-center">
      <Header />



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
