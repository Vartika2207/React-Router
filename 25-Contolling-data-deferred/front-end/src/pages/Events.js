import EventsList from '../components/EventsList';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';



function EventsPage() {
  // below is now a obj having events as key set in loader function
    const { events } = useLoaderData();

    // const events = data.events;
    return (
    <>
      {/* <EventsList events={events} /> */}
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading your data...</p>}>
        {/* Await wait for data to be there, and once data is there below dynamic value b/w tag is the output*/}
        {/*  */}
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents}/>}
        </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        // throw new Response(JSON.stringify({message: 'could not fetch events.'}), {status: 500});
        // json is utility provided by react-router, it creates a response object with json format
        throw json(
            {message: 'could not fetch events.'},
            {status: 500}
        );
      } else {
        // return response; refer below are now defer is used, hence this line will not work
        // manually parse
        const resData = await response.json();
        return resData.events;
      }
};

export function loader() {
    return defer({
      // storing loadEvents promise in events key
      events: loadEvents()
    });
};
