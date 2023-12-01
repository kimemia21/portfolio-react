import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from './components/Top'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <Top/>
      <About/>
     
        
    </div>
  )
}

export default App
