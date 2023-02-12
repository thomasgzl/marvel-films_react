import { useSelector, useDispatch } from 'react-redux'
import { setDisplayMoreInfos } from './actions/actions'

const InfoBtn = ({characId}) => {
    let displayMoreInfos = useSelector((state) => state.rootReducer.displayMoreInfos)
    const dispatch = useDispatch();

    const getMoreInfos = () => { 
        displayMoreInfos = { 
          display: true, 
          characId: characId
        }
        dispatch(setDisplayMoreInfos(displayMoreInfos));
      };

  return (
    <button type="button" onClick={getMoreInfos}>
        More infos
    </button>
  );
};
export default InfoBtn;
