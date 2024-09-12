import EventCB from "../_event/Event";
export default function Event({ params }: { params: { id: string } }) {
  console.log("loggggggggggg");
  return <EventCB id={params.id} />;
}
