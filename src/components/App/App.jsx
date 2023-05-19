import { useState, useEffect } from 'react'
import './App.scss'
import Tweets from '../../pages/Tweets';

function App() {

  const [count, setCount] = useState(0)



  return (
    <>
     
        <Tweets/>
    
     
      
    </>
  )
}

export default App
