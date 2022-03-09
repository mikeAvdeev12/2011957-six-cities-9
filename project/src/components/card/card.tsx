import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Offer} from '../../types/offers';
import {generatePath} from 'react-router-dom';

type CardScreenProps = {
  offer: Offer;
}

function Card({offer}: CardScreenProps): JSX.Element {
  const {isPremium, id, price, previewImage, title, rating, type} = offer;
  const ratingStar = {
    width: `${(rating / 5) * 100}%`,
  };

  return (
    <article className="cities__place-card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Root}>
          <img className="place-card__image" src={previewImage}
            width="260"
            height="200" alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingStar}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(`${AppRoute.Room}`, {id: `${id}`})}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() +
          type.slice(1)}
        </p>
      </div>
    </article>
  );
}

export default Card;
