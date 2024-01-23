import React, {useState} from 'react'

function Search({onSearch}) {
    const [searchString, setSearchString] = useState("");

    const handleChange = (evt) => {
        setSearchString(evt.target.value);
        // console.log(evt.target.value);
        // console.log("searchString", searchString);
    }

  return (
    <div className='w-25 d-flex'>
        <input className='form-control'
            placeholder='Search by email'
            onChange={handleChange} value={searchString}
        />
        <button className='btn btn-success ms-2' onClick={() => onSearch(searchString)}>Search</button>
    </div>
  )
}

export default Search