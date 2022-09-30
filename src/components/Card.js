import suit from '../assets/suit.jpg';
import star from '../assets/star.png';

function Card() {
  return (
    <div className='card'>
      <img className="card-photo" src={suit} alt="suit" />
      <div className='card-stats'>
        <img className="card-star" src={star} alt="star" />
        <span>5.0</span>
        <span>(6) • </span>
        <span>Meguro</span>
      </div>
      <p><span className="bold">The perfect suit for a pitch!</span></p>
      <p>This black ensemble will have the crowd mesmerized.</p>
      <p><span className="bold">¥2,000</span> per day</p>
    </div>
  );
}

export default Card;
