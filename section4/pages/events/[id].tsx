import { useRouter } from "next/router";

function Event() {
  const router = useRouter();
  const event = router.query;
  return <h1>this event is {event.id}</h1>;
}

export default Event;
