import { Form, useNavigate, useNavigation, useActionData, json, redirect } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {

  // this data is ruturned at routes>events.js for backend validation
  const data = useActionData();

  const navigate = useNavigate();

  const navigation = useNavigation(); 

  // tells that action of submitting which was triggered is still active
  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      { data && data.error && <ul>
        {Object.values(data.error).map(err => (
           <li key={err}>{err}</li>
           ))}
         </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input 
           id="title" 
           type="text" 
           name="title" 
           required
           defaultValue={ event ? event.title : ''}
          />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input 
           id="image" 
           type="url" 
           name="image" 
           required
           defaultValue={ event ? event.image : ''}
          />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input 
           id="date" 
           type="date" 
           name="date" 
           required 
           defaultValue={ event ? event.date : ''}
          />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea 
           id="description" 
           name="description" 
           rows="5" 
           required 
           defaultValue={ event ? event.description : ''}
          />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting..' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;


export async function action({ request, params}) {

  const method = request.method;

  // req obj contain form data
  const data = await request.formData();

  // get() method to get access to diff input field value that were submitted
  const eventData = {
      title: data.get('title'),
      image: data.get('image'),
      date: data.get('date'),
      description: data.get('description'),
  }

  let url = 'http://localhost:8080/events';

  if(method === 'PATCH') {
    //editing event
    const eventId = params.eventId;
    url = 'http://localhost:8080/events/' + eventId;
  }

  //sending req to backend, execute in browser not on server
  const response = await fetch(url, {
      method: method,
      header: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData),
  });

  // status===422 is set on server side
  if(response.status === 422) {
      return response;
  }

  if (!response.ok) {
      throw json({ message: 'Could not save event.' }, { status: 500 });
    }
    return redirect('/events');
}