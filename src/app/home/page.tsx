import dynamic from "next/dynamic";
import Loading from "@/app/loading";

const HomeFC = dynamic(() => import("./_home"), { loading: Loading });
const Home = () => {
  return <HomeFC />;
};
export default Home;
