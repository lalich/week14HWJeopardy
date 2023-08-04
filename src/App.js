import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const App = ()=> {

  const [score, setScore] = useState(0)
  const [answer, setAnswer] = useState(null)
  const [revQ, setQ] = useState(false)
    const scoreU = () => {
      setScore(score + 100)
    }
    const scoreD = () => {
      setScore(score - 100)
    }
    const scoreR = () => {
      setScore(0)
    }
    const Score = () => {
    }
    const showTheQ = () => {
      setQ(!revQ)
    }
    const rtq = async () => {
      const url = 'http://jservice.io/api/random'
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data) 
        setAnswer(data[0])
        setQ(false)
       
      } catch (error) {
        console.error('need more time?')
      }
      }
    
  return (
    
    <div className="App">
      <h1>This is how we Jeopardy!</h1>
        <h2>Score: {score}</h2>
        <button onClick={scoreU}>Correct</button>
        <button onClick={scoreD}>Incorrect</button>
        <button onClick={scoreR}>Reset da Game</button>
        <br /><br /> <br />
        <h5>Let us Jeopardy</h5>
      <button onClick={rtq}>Random Trivia Question</button>
        {answer && (<div>
          <h5>Category: {answer.category.title}</h5>
        <h5>Points: {answer.value}</h5>

        <h3>Answer: {answer.question}</h3>
        <br />
        <button onClick={showTheQ}>Click to Reveal Question</button>
          {revQ && (
            <div className='popup'>
              <h5>Question:{answer.answer}</h5>
              </div>
          )}
          </div>
         )}
   
       
    </div>
  );
}

export default App;
