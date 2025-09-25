// API
import { getResources } from "@/api/resources.api";

// COMPONENTS
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourceTable from "@/components/ResourceTable";

export default async function Home() {

  const resources = await getResources();

  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <ResourceTable resources={resources} />
      <Footer />
    </div>
  );
}
