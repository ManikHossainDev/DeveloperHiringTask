
import Cartdealis from "@/components/Pages/Cart/cartDealis";
import Allproductscarousel from "@/components/Pages/Product/Allproductscarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart | Zavisoft",
  description:
    "Review your selected products, update quantities, and proceed to checkout securely.",
};

const Page = () => {
  return (
    <div>
        <Cartdealis />
      <div className="py-[40px]">
        <Allproductscarousel />
      </div>
    </div>
  );
};

export default Page;