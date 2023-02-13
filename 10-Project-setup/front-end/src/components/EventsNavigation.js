import { NavLink } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink href="/events" className={({ isActive}) => isActive ? classes.active : undefined} end>All Events</NavLink>
          </li>
          <li>
            <NavLink href="/events/new" className={({ isActive}) => isActive ? classes.active : undefined}>New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
