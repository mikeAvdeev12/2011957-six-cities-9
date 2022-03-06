import {Fragment, useState, MouseEvent} from 'react';
import Card from '../card/card';
import {OffersArray} from '../../types/offers';

type CardListScreenProps = {
  offers: OffersArray;
}

function CardList({offers}: CardListScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(false);
  // console.log(useState())
  const mouseOverHandler = (event: MouseEvent<HTMLInputElement>) => {
    if (event.target) {setActiveCard(activeCard);}
  };

  return (
    <Fragment>
      {offers.map((offer) => {
        const key = offer.id;

        return (
          <div key={key} onMouseOver={mouseOverHandler}>
            <Card offer={offer}/>
          </div>
        );
      })}
    </Fragment>
  );
}

export default CardList;
