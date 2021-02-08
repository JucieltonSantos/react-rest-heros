import React from 'react'
import Card from 'react-bootstrap/Card'
import { BsFillAwardFill, BsShieldShaded, BsLightningFill, BsHeartFill, BsChevronDoubleUp, BsChevronContract } from 'react-icons/bs'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

const HeroCard = ({ hero }) => {
  const [modalShow, setModalShow] = React.useState(false)
  function CenterModal (props) {
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {'Nome: ' + hero.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Jumbotron className='p-3 mb-2 bg-dark text-white'>
            <h4>Aparência:</h4>
            <p>
              {'Cor dos Olhos: ' + hero.appearance['eye-color']}
            </p>
            <p>
              {'Gênero: ' + hero.appearance.gender}
            </p>
            <p>
              {'Cor do cabelo: ' + hero.appearance['hair-color']}
            </p>
            <p>
              {'Raça: ' + hero.appearance.race}
            </p>
          </Jumbotron>
          <Jumbotron className='p-3 mb-2 bg-success text-white'>
            <h4>Biografia:</h4>
            <p>
              {'Primeira aparência: ' + hero.biography['first-appearance']}
            </p>
            <p>
              {'Editora: ' + hero.biography.publisher}
            </p>
            <p>
              {'Local de nascimento: ' + hero.biography['place-of-birth']}
            </p>
            <p>
              {'Nome Completo: ' + hero.biography['full-name']}
            </p>
          </Jumbotron>
          <Jumbotron className='p-3 mb-2 bg-info text-white'>
            <h4>Trabalho:</h4>
            <p>
              {'Trabalho: ' + hero.work.base}
            </p>
            <p>
              {'Ocupação: ' + hero.work.occupation}
            </p>
          </Jumbotron>
          <Jumbotron className='p-3 mb-2 bg-primary text-white'>
            <h4>Conexões:</h4>
            <p>
              {'Grupo Afiliado: ' + hero.connections['group-affiliation']}
            </p>
            <p>
              {'Parentes: ' + hero.connections.relatives}
            </p>
          </Jumbotron>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={props.onHide}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    )
  }
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={hero.image.url} />
        <Card.Body>
          <Card.Title>{hero.name}</Card.Title>
          <Card.Text>
            {hero.biography.aliases}
          </Card.Text>
          <Card.Text>
            <BsFillAwardFill /> {'Inteligência: ' + hero.powerstats.intelligence} <br />
            <BsShieldShaded /> {'Força: ' + hero.powerstats.strength} <br />
            <BsLightningFill /> {'Velocidade: ' + hero.powerstats.speed} <br />
            <BsHeartFill /> {'Durabilidade: ' + hero.powerstats.durability} <br />
            <BsChevronDoubleUp /> {'Poder: ' + hero.powerstats.power} <br />
            <BsChevronContract /> {'Combate: ' + hero.powerstats.combat}
          </Card.Text>

          <Button variant='dark' onClick={() => setModalShow(true)}>
            Ver Mais
          </Button>

          <CenterModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Card.Body>
      </Card>
    </>
  )
}
export default HeroCard
