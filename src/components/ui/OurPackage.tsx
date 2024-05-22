import { getAllPackageData } from "../../data/packageData";
import { TService } from "../../types/types.global";
import PackageCard from "../../utils/PackageCard";

const OurPackage = () => {
  const services = getAllPackageData();

  return (
    <div className="mt-20">
      <h1 className="text-3xl hind-siliguri-bold text-center">
        আমাদের <span className="text-[#FC4F4F]">প্যাকেজ তালিকা</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mt-10">
        {services.map((service: TService) => (
          <PackageCard service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default OurPackage;
