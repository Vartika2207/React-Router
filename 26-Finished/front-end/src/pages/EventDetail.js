import { Suspense } from "react";
import { Await, defer, json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

function EventDetailPage() {
    
    // since used defer hence here we get an obj
    const {event, events} = useRouteLoaderData('event-detail');
    
    return (
        <>
           <Suspense fallback={<p style={{textAlign: 'center'}}>Loading your data...</p>}>
            <Await resolve={event}>
                {(loadedEvent) => <EventItem event={loadEvent}/>}
            </Await>
           </Suspense> 

           <Suspense fallback={<p style={{textAlign: 'center'}}>Loading your data...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents}/>}
            </Await>
           </Suspense>
           <h1>Event detail page</h1>
        </>
    );
};

export default EventDetailPage;

async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id);

    if(!response.ok) {
        throw json(
            {message: 'Could not fetch details for selected event'},
            {status: 500}
        );
    }
    else {
        // manually parse
        const resData = await response.json();
        return resData.events;
    }
}

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

export async function loader({request, params}) {
    // using param argument can get access to all route parameter value
    const id = params.eventId;

    return defer({
        event: await loadEvent(id),
        events: loadEvents(),
    });
};


export async function action({params, request}) {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method,
    });

    if(!response.ok) {
        throw json(
            {message: 'Could not delete details for selected event'},
            {status: 500}
        );
    }
    else {
        return redirect('/events');
    }
};