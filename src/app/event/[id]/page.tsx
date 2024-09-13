import dynamic from "next/dynamic";
import Loading from "@/app/loading";
const EventCB = dynamic(() => import("../_event/Event"), { loading: Loading });
export default function Event({ params }: { params: { id: string } }) {
  return <EventCB id={params.id} />;
}
