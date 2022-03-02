import {Link} from 'react-router-dom';

function Error(): JSX.Element {
  return (
    <h1 className="place-card__name" style={{marginTop: '250px', textAlign: 'center'}}>
      404 Not Found
      <br/>
      <Link to="/">
        <span style={{color: 'green', textDecoration: 'underline'}}>go to main</span>
      </Link>
    </h1>
  );
}

export default Error;
