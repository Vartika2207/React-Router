import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {

  const fetcher = useFetcher();
  //   to get feedback
  const { data, state } = fetcher;

  useEffect(() => {
    if(state === 'idle' && data && data.message) {
        window.alert('Sign up successful!!');
    }
  }, [data, state]);

  return (
    <fetcher.Form 
       method="post" 
       className={classes.newsletter}
       action='/newsletter'
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;