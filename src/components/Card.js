import suit from '../assets/suit.jpg';

function Card() {
  return (
    <div className='card'>
      <img src={suit} className="card-photo" alt="suit" />
    </div>
  );
}

export default Card;
