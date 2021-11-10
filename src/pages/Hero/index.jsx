import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { selectFecha } from '../../actions/fecha/select'
const ACCESS_TOKEN = '3875372609247663'
const DOMAIN = 'https://www.superheroapi.com/api.php/'

const Hero = () => {
  const [id, setId] = useState(null)
  const [value,setValue]=useState('')
  const dispatch = useDispatch()

  const history = useHistory()

  // useEffect(() => {
  //   getHeros()
  // }, [])
  // ENDPOINT - API - SERVICIO - PATH
  const getHeros = async () => {

    try {
      const response = await fetch(`${DOMAIN}${ACCESS_TOKEN}/${id}`)
      // , {
      //   body: {
      //     nombre: 'Juan',
      //     edad: 20,
      //     ciudad: 'Lima'
      //   },
      //   headers: {},
      //   method: 'POST',
      // }
      
      const hero = await response.json()
      history.push(`/hero/${hero.id}?hero=${hero.name}&image=${hero.image.url}&full-name=${hero.biography['full-name']}`)
      console.log('response', hero)
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleChange = (e) => {
    const { target : { value } } = e
    setId(value)
  }
  const handleChangeValue = (e) => {
    e.preventDefault()
    const { target : { value } } = e
    dispatch(selectFecha(value))
  }
  
  return (
    <div>
      <input type="text" onChange={handleChange} /><br />
      <button onClick={getHeros} >Buscar</button><br /><br />
      Hero
      <br />
      <br />
      <input type="text" onChange={handleChangeValue} />
    </div>
  )
}

export default Hero
