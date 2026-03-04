import { PageTitle } from "@/utils/utils";
import ServicesContent from "./ServicesContent";

export default function Services() {
  return (
    <div className="py-15">
      <div className="min-h-[20vh] md:min-h-[25vh]">
        <PageTitle title="Services" />
      </div>
      <ServicesContent />
    </div>
  );
}
