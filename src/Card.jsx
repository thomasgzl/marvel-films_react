import './Card.css';
import InfoBtn from './InfosBtn';
import { useSelector, useDispatch } from 'react-redux'

const Card = ({ characId, name, image, description, series }) => {

  const displayMoreInfos = useSelector((state) => state.rootReducer.displayMoreInfos)

  const imagePath =
    'https://upload.chatsdumonde.com/img_global/4-2109--/_medium-402787--.jpg';
  const fakeTitle = 'El super Gato';
  const fakeDesc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  return (
    <div className="card">
        <img className="cardImg" src={image || imagePath} alt={name} />
        <h2 className="cardTitle">{name || fakeTitle}</h2>
        <div className="cardDesc">{description || fakeDesc}</div>
        {(series.length && displayMoreInfos.characId === characId)  ?
          <ul>
          {series.map((serie) => <li>{serie}</li>)}
          </ul> 
        : <div>No series</div>}
        <InfoBtn characId={characId} />
    </div>
  );
};
export default Card;
