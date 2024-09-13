import dynamic from "next/dynamic";
import Loading from "@/app/loading";
const DetailProduct = dynamic(() => import("./_detail/Detail"), {
  loading: Loading,
});
export default function ProductDetail({ params }: { params: { id: string } }) {
  return <DetailProduct id={params.id} />;
}
