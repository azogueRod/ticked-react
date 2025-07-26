import styles from './eventStyle.module.css'
import star from '../../assets/star.svg'
import heart from '../../assets/heart.svg'
import useLikeEvents from '../../hooks/useLikedEvents'

const EventItem = ({info, name, image, id, onEventClick}) => {

  const {isLike, toggleEventLike} = useLikeEvents(id)

  const handleSeeMoreClick = (e)=>{
  e.stopPropagation();
  onEventClick(id)
}

const handleStartClick = ()=> {
toggleEventLike();
}

  return (
    <div className={styles.eventItemContainer}>
      <div className={styles.imageContain}>
          <img src={isLike ? star : heart} alt="Start button" className={styles.starImage} onClick={handleStartClick}/>
        <img src={image} alt={name} width={300} height={200} />
      </div>
        <div className={styles.infoContainer}>
      <h4 className={styles.eventName}>{name}</h4>
      <p className={styles.eventInfo}>{info}</p>
      <button  onClick={(e)=>handleSeeMoreClick(e,id)} className={styles.seeMoreBtn}>
        {/* <Link to={`/details/${id}`}> */}
        {/* Ver mas */}
        {/* </Link> */}
        Ver mas
        </button>
        </div>
    </div>
  )
}

export default EventItem
