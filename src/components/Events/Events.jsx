import React from 'react'
import useEventsData from '../../hooks/useEventsData'
import EventItem from './EventItem';
import { useNavigate } from 'react-router';

const Events = ({ searchTerm, events }) => {
  const navigate = useNavigate()
  const handleEventItemClick = (id) => {
    navigate(`/details/${id}`)
  }

  const renderEvents = () => {
    
    let eventsFilter = events;
    searchTerm.length > 0 && (eventsFilter = eventsFilter.filter(item => item.name.toLocaleLowerCase().includes(searchTerm)))
    
    return eventsFilter.map(event =>
      <EventItem
        key={`event-item-${event.id}`}
        name={event.name}
        info={event.info}
        image={event.images[0].url}
        id={event.id}
        onEventClick={handleEventItemClick}
      />
    )

  }
 //error && <div>Ha ocurrido un error</div>
  return (
    <div>
      {renderEvents()}
    </div>
  )
}

export default Events
