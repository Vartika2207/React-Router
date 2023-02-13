import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Some event',
    },
    {
      id: 'e2',
      title: 'Another event',
    },
    {
        id: 'e3',
        title: 'Other event',
      }
  ];

function EventsPage() {
    return (
        <>
           <h1>Events page</h1>
            <ul>
                {DUMMY_EVENTS.map((event) => (
                    <li key={event.id}>
                        <Link to={event.id}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default EventsPage;