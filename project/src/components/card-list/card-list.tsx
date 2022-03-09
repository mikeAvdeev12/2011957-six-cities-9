import {Fragment, useState} from 'react';
import Card from '../card/card';
import {OffersArray} from '../../types/offers';

type CardListScreenProps = {
  offers: OffersArray;
}

function CardList({offers}: CardListScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(-1);
  // eslint-disable-next-line no-console
  console.log(activeCard);
  const mouseOutHandler = () => setActiveCard(-1);

  return (
    <Fragment>
      {offers.map((offer) => {
        const key = offer.id;

        return (
          <div key={key} onMouseEnter={() => setActiveCard(key)} onMouseLeave={mouseOutHandler}>
            <Card offer={offer} />
          </div>
        );
      })}
    </Fragment>
  );
}

export default CardList;
