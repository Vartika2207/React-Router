import { json, useParams, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
    // this hook gives access to currently active route parameters
    // const params = useParams();

    const data = useRouteLoaderData('event-detail');
    return (
        <>
           <h1>Event detail page</h1>
           {/* <h1>{params.eventId}</h1> */}
           <EventItem event={data.event}/>
        </>
    );
};

export default EventDetailPage;

export async function loader({request, params}) {
    // using param argument can get access to all route parameter value
    const id = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + id);

    if(!response.ok) {
        throw json(
            {message: 'Could not fetch details for selectde event'},
            {status: 500}
        );
    }
    else {
        return response;
    }
}