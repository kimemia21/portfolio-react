import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from './components/Top'
import About from './components/About'
import MySkills from './components/MySkills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <Top/>
      <About/>
      <MySkills/>
     
        
    </div>
  )
}

export default App
