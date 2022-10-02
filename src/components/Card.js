function Card({ img, rating, reviewCount, location, title, description, price, unavailable, recent }) {
  const star = process.env.PUBLIC_URL + '/assets/star.png'
  let badgeText
  if (unavailable) {
    badgeText = "UNAVAILABLE"
  } else if (recent) {
    badgeText = "NEW"
  }

  return (
    <div className='card'>
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-photo" src={process.env.PUBLIC_URL + `/assets/${img}`} alt="outfit" />
      <div className='card-stats'>
        <img className="card-star" src={star} alt="star" />
        <span>{rating}</span>
        <span>({reviewCount}) • </span>
        <span>{location}</span>
      </div>
      <p><span className="bold card-title">{title}</span></p>

      <p><span className="bold">¥{price}</span> per day</p>
    </div>
  );
}

export default Card;
