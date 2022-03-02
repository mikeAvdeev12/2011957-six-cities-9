import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function Error(): JSX.Element {
  return (
    <div>
      <h1 className="place-card__name" style={{marginTop: '250px', textAlign: 'center'}}>
        404 Not Found
      </h1>
      <br/>
      <Link to={AppRoute.Root}>
        <span style={{
          color: 'green',
          textDecoration: 'underline',
          textAlign: 'center',
          display: 'block',
        }}
        >go to main
        </span>
      </Link>
    </div>
  );
}

export default Error;
