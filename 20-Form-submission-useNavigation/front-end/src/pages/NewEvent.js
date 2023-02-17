import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

function NewEventPage() {
    return (
        <>
           <EventForm/>
        </>
    );
};

export default NewEventPage;

export async function action({ request, params}) {
    // req obj contain form data
    const data = await request.formData();

    // get() method to get access to diff input field value that were submitted
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    }


    //send req to backend, execute in browser not on server
    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData),
    });

    if (!response.ok) {
        throw json({ message: 'Could not save event.' }, { status: 500 });
      }
      return redirect('/events');
}