import { useState } from "react";

const LIKED_EVENTS_STORAGE_KEY = 'likedEvents'
const checkIsLike = (eventId = []) => {
    const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY));
    return likedEvents.includes(eventId)
}

const useLikeEvents = (eventId) => {
    const [isLike, setIsLike] = useState(checkIsLike(eventId))

    const toggleEventLike = () => {
        const likeEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
        console.log(likeEvents);
        
        const eventIndex = likeEvents.indexOf(eventId)
        if (eventIndex !== -1) {
            likeEvents.splice(eventIndex, 1);
            setIsLike(false)
        } else {
            likeEvents.push(eventId)
            setIsLike(true);
        }

        localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likeEvents));
    }
    return {
        isLike,
        toggleEventLike
    }
};
export default useLikeEvents;