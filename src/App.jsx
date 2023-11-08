import { useState } from 'react'
import { useEffect } from 'react'
import Header from './Header'
import Card from './Card'

function App() {

const [url, setUrl] = useState("")
const [url2, setUrl2] = useState("")
const [info, setInfo] = useState("")

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
        .then(res => res.json())
        .then(data =>  setUrl(data.sprites.front_default))
}, [])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/raichu/")
        .then(res => res.json())
        .then(data =>  setUrl2(data.sprites.front_default))
}, [])

useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
      .then(res => res.json())
      .then(data =>  setInfo(data))
}, [])

  return (
    <div>
      <Header url={url} url2={url2}/>
      <Card info={info} url={url}/>
    </div>  
  )
}

export default App
