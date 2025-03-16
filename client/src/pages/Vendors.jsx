import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../components/Carousel";
import Button from "../components/Button";

const Vendors = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/vendors");
        setVendors(response.data);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
    };
    fetchVendors();
  }, []);

  const carouselItems = vendors.map((vendor) => ({
    name: vendor.name,
    clicks: vendor.clicks,
    image: "/path-to-vendor-image.png",
  }));

  return (
    <div className="bg-amayaPeach min-h-screen p-8">
      <h1 className="text-5xl font-bold text-amayaBlue text-center mb-8">Vendors</h1>
      <div className="max-w-3xl mx-auto">
        <div className="bg-amayaYellow p-6 rounded-xl mb-6 text-center shadow-md">
          <p className="text-2xl text-black">Vendor Ads Fund This Site!</p>
          <p className="text-xl text-black">5 Vendors: ₹60,000/year | 10 Vendors: ₹105,000/year</p>
        </div>
        <Carousel items={carouselItems} />
        {vendors.map((vendor) => (
          <div key={vendor._id} className="bg-white p-6 rounded-xl shadow-md mb-4">
            <p className="text-2xl text-amayaBlue">{vendor.name} ({vendor.service})</p>
            <p className="text-xl text-black">Contact: {vendor.contact}</p>
            <p className="text-xl text-black">Type: {vendor.adType} | Clicks: {vendor.clicks}</p>
            <Button color="amayaBlue" onClick={() => alert("Simulated click!")}>Call Now</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;