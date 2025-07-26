import { useState } from 'react';
import eventsData from '../data/events.json'
// Hook para hacer una llamada a la API y guardarlo en tu estado local
const useEventsData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState()

    //Load API code
    const fetchEvents = async (params) => {
        try {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=US${params?.length ? params:""}`)
            const data = await response.json();
            setData(data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        }
    }
    // setTimeout(() => {
    // try {
    // setData(eventsData)
    // setIsLoading(false)
    // } catch (error) {
    // setError(error)
    // }
    // }, 4000);

    return {
        events: data?._embedded?.events || [],
        page: data?.page || {},
        isLoading,
        error,
        fetchEvents
    };
}

export default useEventsData;