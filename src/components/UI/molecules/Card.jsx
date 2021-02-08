import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HeroCard from '../atoms/HeroCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Card = () => {
  const [heros, setHeros] = useState([])
  const promises = []
  const localStorageNameStatus = window.localStorage.getItem('inputNameStatus')
  const localStoragePowerStatus = window.localStorage.getItem('inputPowerStatus')
  const localStorageName = window.localStorage.getItem('inputName')
  const localStoragePower = window.localStorage.getItem('inputPower')

  useEffect(() => {
    if (localStorageNameStatus) {
      promises.push(
        axios.get('https://superheroapi.com/api/213721397121515/search/' + localStorageName).then(response => response.data)
      )
      Promise.all(promises).then((res) => {
        if (!res[0].error) {
          setHeros(res[0].results)
        } else {
          window.alert('resultado não encontrado 1')
        }
      })
    }
  }, [localStorageName])

  useEffect(() => {
    if (localStoragePowerStatus) {
      axios.get('https://superheroapi.com/api/213721397121515/' + localStoragePower).then(response => {
        if (!response.data.error) {
          setHeros([response.data])
        } else {
          window.alert('resultado não encontrado 2')
        }
      })
    }
  }, [localStoragePower])

  useEffect(() => {
    if (!localStorageName && !localStoragePower) {
      for (let i = 1; i < 9; i++) {
        promises.push(
          axios.get('https://superheroapi.com/api/213721397121515/' + i).then(response => response.data)
        )
      }
      Promise.all(promises).then((res) => {
        setHeros(res)
      })
    }
  }, [])
  return (
    <Container>
      <Row>
        {heros.map((hero, index) => (
          <Col md={4} key={index} className='mt-4'>
            <HeroCard hero={hero} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Card
