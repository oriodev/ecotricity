// API
import { getResources } from "@/api/resources.api";

// COMPONENTS
import Header from "@/components/Header";
import Resource from "@/components/Resource";
import UtilButton from "@/components/UtilButton";
import Footer from "@/components/Footer";

// PACKAGES
import { BiDownload, BiSelectMultiple } from "react-icons/bi";

export default async function Home() {

  // Fetch resources
  const resources = await getResources();

  return (
    <div className="w-full flex flex-col items-center">
      <Header />

      {/* Main Component Section */}
      <div className="w-2/3 flex flex-col gap-5 mt-15">
        {/* Selection Buttons */}
        <div className="flex gap-5">
          <UtilButton text="Select All" icon={BiSelectMultiple} />
          <UtilButton text="Download Selected" icon={BiDownload} />
        </div>

        {/* Renders resources */}
        <div className="w-full flex flex-col gap-7">
          {
            resources.map(resource => (
              <Resource key={resource.name} name={resource.name} description={resource.description} url={resource.url} />
            ))
          }
        </div>
      </div>

      <Footer />

    </div>
  );
}
