import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {OffersArray} from '../../types/offers';

type FavoritesScreenProps = {
  offers: OffersArray;
}

function Favorites({offers}: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.Root} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link to={AppRoute.Root} className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <h1 className="favorites__title">Saved listing</h1>
        {offers.map((offer) => {
          const ratingStar = {
            width: (offer.rating / 7) * 100,
          };

          return (
            <div key={offer.id} className="page__favorites-container container">
              <section className="favorites">
                <ul className="favorites__list">
                  <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{offer.city.name}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <article className="favorites__card place-card">
                        <div className="place-card__mark">
                          <span>{offer.isPremium
                            ?
                            <div className="place-card__mark">
                              <span>Premium</span>
                            </div>
                            : ''}
                          </span>
                        </div>
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <a href="#">
                            <img className="place-card__image" src={offer.previewImage}
                              width="150" height="110" alt="Place image"
                            />
                          </a>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">&euro;{offer.price}</b>
                              <span className="place-card__price-text">&#47;&nbsp;night</span>
                            </div>
                            <button
                              className="place-card__bookmark-button place-card__bookmark-button--active button"
                              type="button"
                            >
                              <svg className="place-card__bookmark-icon" width="18" height="19">
                                <use xlinkHref="#icon-bookmark"></use>
                              </svg>
                              <span className="visually-hidden">In bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={ratingStar}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <a href="#">{offer.title}</a>
                          </h2>
                          <p className="place-card__type">{offer.type.charAt(0).toUpperCase() +
                            offer.type.slice(1)}
                          </p>
                        </div>
                      </article>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          );
        })}
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
