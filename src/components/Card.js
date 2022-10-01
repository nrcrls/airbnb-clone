import star from '../assets/star.png';

function Card({ img, rating, reviewCount, location, title, description, price }) {
  return (
    <div className='card'>
      <img className="card-photo" src={img} alt="suit" />
      <div className='card-stats'>
        <img className="card-star" src={star} alt="star" />
        <span>{rating}</span>
        <span>({reviewCount}) • </span>
        <span>{location}</span>
      </div>
      <p><span className="bold">{title}</span></p>
      <p>{description}</p>
      <p><span className="bold">¥{price}</span> per day</p>
    </div>
  );
}

export default Card;
