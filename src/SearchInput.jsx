import { useRef } from 'react';

const SearchInput = ({ searchData }) => {
  const inputRef = useRef('');
  const onclick = () => {
    searchData(inputRef.current.value);
  };
  return (
    <div className="inputContainer">
      <input ref={inputRef} type="text" />
      <button className="searchBtn" type="submit" onClick={onclick}>
        find
      </button>
    </div>
  );
};
export default SearchInput;
