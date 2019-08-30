import styles from './NearbyCard.css';
import React from 'react';
import StarRatings from 'react-star-ratings'

class NearbyCard extends React.Component {
  constructor(props) {
    super(props);

  }
  // arbitrary change1
  render() {
    const { placeDetails } = this.props;
    const avgRating = placeDetails.ratings.reduce((review, accum) => accum + review) / placeDetails.ratings.length;
    return (
      <div className={styles.placeCard}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={placeDetails.image}></img>
        </div>
        <h4 className={styles.roomType}>{placeDetails.roomType.toUpperCase()} · {placeDetails.location.toUpperCase()}</h4>
        <div className={styles.title}>{placeDetails.title}</div>
        <p className={styles.price}>${placeDetails.price}/night</p>
        <span className={styles.ratings}>
          <StarRatings
            rating={avgRating}
            numberOfStars={5}
            starDimension='12px'
            starSpacing='0px'
            starRatedColor='#358488'
          />
          {' '}{placeDetails.ratings.length}</span>
      </div>
    )
  }

}

export default NearbyCard;
