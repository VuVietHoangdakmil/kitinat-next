import dynamic from "next/dynamic";
import Loading from "@/app/loading";
const ProductFC = dynamic(() => import("./_product/Product"), {
  loading: Loading,
});
const Product = () => {
  return <ProductFC />;
};
export default Product;
