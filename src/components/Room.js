import './Room.css';
import { AiFillInfoCircle } from 'react-icons/ai';
import { FaBed } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { TbArrowsHorizontal } from 'react-icons/tb';

const Room = ({ setShowBookingDetails, room }) => {


  return (
    <div className="Room-card">
      <div className="card-header">{room.name}</div>
      <div className="card-img">
        <img src={room.image_url} />
      </div>
      <div className="card-more-info">
        <div className="more-info-detail">
          <FaBed style={{ fontSize: '20px', margin: '0 8px 0 0' }} />
          <p>
            {room.double_bed > 0
              ? `${room.double_bed} Подвійне ліжко`
              : room.single_bed > 0
              ? `${room.single_bed} Ліжко`
              : `${room.king_bed} Kingsize Ліжко`}
          </p>
        </div>
        <div className="more-info-detail">
          <BsFillPersonFill style={{ fontSize: '20px', margin: '0 8px 0 0' }} />
          <p>{`${room.max_person} Персони`}</p>
        </div>
        <div className="more-info-detail">
          <TbArrowsHorizontal style={{ fontSize: '20px', margin: '0 8px 0 0' }} />
          <p>{`${room.square} м.кв.`}</p>
        </div>
      </div>
      <div className="card-clarify">
        <div className="card-clarify-content">
          <h3>Заселення, вибране для цієї кімнати</h3>
          <div className="clarify-info">
            <div className="clarify-info-icons">
              <div className="clarify-info-adults-icons">
                <BsFillPersonFill style={{ fontSize: '20px', margin: '0 0 0 0' }} />
                <BsFillPersonFill style={{ fontSize: '20px', margin: '0 16px 0 0' }} />
                <p>{`${room.max_person} Персони`}</p>
              </div>
              <div className="clarify-info-beds">
                <FaBed style={{ fontSize: '20px', margin: '0 36px 0 0' }} />
                <p>
                  {room.double_bed > 0
                    ? `${room.double_bed} Подвійне ліжко`
                    : room.single_bed > 0
                    ? `${room.single_bed} Ліжко`
                    : `${room.king_bed} Kingsize Ліжко`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-rate">
        <div className="card-rate-img-and-button">
          <img src={room.image_url} />
        </div>
        <div className="card-rate-header-and-text">
          <h3>Rate</h3>
          <div className="header-and-text-text-with-icon">
            <AiFillInfoCircle style={{ margin: '0 4px 0 0' }} />
            <h4>Скасування бронювання безкоштовне</h4>
          </div>
        </div>
        <div className="total-price" id="price">
          <h4>Загальна вартість 1 ночі</h4>
          <h2>{`${room.price} грн`}</h2>
          <button id="priceBtn" onClick={() => setShowBookingDetails(true)}>
            Уточніть заселення
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;
