import dynamic from "next/dynamic";
import Loading from "@/app/loading";
const AboutFC = dynamic(() => import("./_about"), { loading: Loading });
export default function About() {
  return <AboutFC />;
}
