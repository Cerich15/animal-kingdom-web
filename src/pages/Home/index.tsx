import React from 'react'
import Container from '../../components/Container/index';
import Nav from '../../components/Nav';
import styles from "./.module.css"
import animalKingdomLogo from "../../assets/animal-kingdom.png"

const Home: React.FC = () => {
  return (
    <Container className={styles['home-pane']}>
        <Nav className={styles['nav-items-pane']}>
            <img src={animalKingdomLogo} alt=''/>
            <h5>Cat names</h5>
            <h5>Dog breeds</h5>
        </Nav>
    </Container>
  )
}

export default Home