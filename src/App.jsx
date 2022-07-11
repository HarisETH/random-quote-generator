import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'





function App() {
  let BaseURL = 'https://api.adviceslip.com/advice';
  const [quote, setQuote] = useState();


  const fetchQuotes = async () =>{
    

    await axios.get(BaseURL)
    .then((response)=>{
      setQuote(response.data.slip.advice)
      console.log(response)
    })
    .catch((error) =>{
      setQuote(error)
    })
  }

  useEffect(() => {
    fetchQuotes()
  }, [])
  
  
  
  
  return (
    <div className='app h-screen w-full'>
       <div className="glass">
       {quote}
       </div>
    </div>
  )
}

export default App
