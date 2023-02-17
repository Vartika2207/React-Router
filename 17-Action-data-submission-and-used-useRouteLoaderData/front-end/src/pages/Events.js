import EventsList from '../components/EventsList';
import { useLoaderData, json } from 'react-router-dom';



function EventsPage() {
    const data = useLoaderData();

    const events = data.events;

    return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('https://react-http-43b44-default-rtdb.firebaseio.com/events');

        if (!response.ok) {
          // throw new Response(JSON.stringify({message: 'could not fetch events.'}), {status: 500});
          // json is utility provided by react-router, it creates a response object with json format
          throw json(
             {message: 'could not fetch events.'},
             {status: 500}
          );
        } else {
          return response;
        }
};
