import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './components/Container'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <Container className="App">
      hi
      <Container style={{color: "green"}}>
        hello
      </Container>
    </Container>
  )
}

export default App
