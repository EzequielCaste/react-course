import React, {useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ( { setCategories } ) => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSumbit = ( e ) => {
    e.preventDefault();

    if( inputValue.trim().length > 2) {
      setCategories(prev => [ inputValue, ...prev])
      setInputValue('')
    }
  }
  return (
    <form onSubmit={handleSumbit}>      
      <input 
        onChange={handleInputChange}
        type="text"
        value={inputValue}
       />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}