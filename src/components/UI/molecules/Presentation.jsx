import React from 'react'
import Title from '../atoms/Title'
import Paragraph from '../atoms/Paragraph'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsTextLeft, BsChevronDoubleUp } from 'react-icons/bs'

const Presentation = () => {
  const textInputName = React.createRef()
  const textInputPower = React.createRef()

  function handleClickName (e) {
    e.preventDefault()
    const val = textInputName.current.value
    window.localStorage.clear()
    window.localStorage.setItem('inputName', val)
    window.localStorage.setItem('inputNameStatus', true)
    window.location.reload()
  }
  function handleClickPower (e) {
    e.preventDefault()
    const val = textInputPower.current.value
    window.localStorage.clear()
    window.localStorage.setItem('inputPower', val)
    window.localStorage.setItem('inputPowerStatus', true)
    window.location.reload()
  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>
              <BsTextLeft className='h1' /> <br />
              <Title label='Pesquise agora seus maiores Hérois pelo Nome: ' />
              <Paragraph label='Tudo sobre seu herói favorito em um click!' />
              <div>
                <input className='form-control' placeholder='exemplo: superman' ref={textInputName} /> <br />
                <button className='btn btn-dark' onClick={handleClickName}>
                  Buscar
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <BsChevronDoubleUp className='h1' /> <br />
              <Title label='Pesquise agora seus maiores Hérois por Número:' />
              <Paragraph label='Conhecer mais sobre seus hérois nunca foi tão fácil!' />

              <input className='form-control' placeholder='Número do Heroi:' type='number' min='1' max='731' ref={textInputPower} /><br />

              <button className='btn btn-dark' onClick={handleClickPower}>
                Buscar
              </button>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Presentation
