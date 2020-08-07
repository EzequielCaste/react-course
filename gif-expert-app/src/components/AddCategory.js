import React, {useState} from 'react'

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState("Hola Mundo");

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSumbit = ( e) => {
    e.preventDefault();
    console.log("listo")
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
