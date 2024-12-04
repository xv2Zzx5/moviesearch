import React from 'react'
import "./Search.css"
import { useState } from 'react'
function Search(props) {
  const[name,setName] = useState("")
  return (
    <div className='searchfilm'>
      <input className = "searchInput" placeholder='search for movies and more' type = "text" onChange = {(event) => setName(event.target.value)} value = {name}/>   
      <button disabled = {props.loading} className='searchbutton' onClick = {() => props.onSearch(name.toLowerCase().trim())}>search</button>
    </div>
  )
}

export default Search