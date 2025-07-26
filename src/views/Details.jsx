import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styles from './CssViews/Detail.module.css'
import { format } from 'date-fns'
import useEventsResults from '../state/events-results'



const Details = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({})
  const [error, setError] = useState({})
  const [isLoading, setIsloading] = useState(true)
  const {data} = useEventsResults()
  
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`)
        const data = await response.json()
        setEventData(data)
        setIsloading(false)
      } catch (error) {
        console.log(error);
        setEventData({})
        setIsloading(false)
      }
    }
    fetchEventData()
  }, [])

  if (isLoading && Object.keys(eventData) === 0) {
    return <div>Cargando Evento...</div>
  }
  if (Object.keys(error) > 0) {
    return <div>Ha ocurrido un error</div>
  }

  return (
    <div className='styles.container'>
      <div className='styles.mainInfoContainer'>
        <img src={eventData.images?.[0].url} alt={eventData.name} className={styles.eventImage} />
        <h4 className={styles.eventName}>{eventData.name}</h4>
        <p className={styles.eventInfo}>{eventData.info}</p>
        {eventData.dates?.start.dateTime
          ? <p className={styles.eventDate}>{format(new Date(eventData.dates?.start.dateTime), 'd LLLL yyyy H:mm')}hrs</p>
          : null}

      </div>
      <div className={styles.seatInfoContainer}>
        <h6 className={styles.seatMapTitle}>Mapa del evento</h6>
        <img src={eventData.seatmap?.staticUrl} alt="SeatMap" />
        <p className={styles.eventPleaseNote}>{eventData.pleaseNote}</p>
      </div>
      <a className={styles.linkTickets} href={eventData.url}>Ir por tus boletos</a>
    </div>
  )
}

export default Details
