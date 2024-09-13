import dynamic from "next/dynamic";
import Loading from "@/app/loading";
const NewFc = dynamic(() => import("./_newAndEvent"), { loading: Loading });
export default function New() {
  return <NewFc />;
}
