import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';

import { setLoading, setLoadCharacters, setDisplayMoreInfos } from './actions/actions'

import ListCards from './ListCards';
import SearchInput from './SearchInput';
import fetchCharacters from './utils/fetchCharacters';

const App = () => {
  // const [loading, setLoading] = useState(false);
  // const [listData, setListData] = useState([]);

  // Redux
  const loading = useSelector((state) => state.rootReducer.loading)
  const listData = useSelector((state) => state.rootReducer.listData)
  const dispatch = useDispatch();

  const searchData = (value) => {
    dispatch(setLoading(true));
    fetchCharacters(value).then((response) => {
      dispatch(setLoadCharacters(response));
      dispatch(setLoading(false));
    });
  };

  return (
    <div className="main">
      <SearchInput searchData={searchData} />
      <ListCards listData={listData} loading={loading} />
    </div>
  );
};

export default App;
