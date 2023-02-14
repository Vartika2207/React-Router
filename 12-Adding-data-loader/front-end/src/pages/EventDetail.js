import { useParams } from "react-router-dom";

function EventDetailPage() {
    // this hook gives access to currently active route parameters
    const params = useParams();

    return (
        <>
           <h1>Event detail page</h1>
           <h1>{params.eventId}</h1>
        </>
    );
};

export default EventDetailPage;