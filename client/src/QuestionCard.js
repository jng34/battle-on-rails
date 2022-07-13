import {React, useState} from 'react'
import questions from './questions.json'


function QuestionCard() {
    const [guess, setGuess] = useState(null)

    const questionsArr = questions.questions
    const randomNum = Math.floor(Math.random()*questionsArr.length + 1)
    const randomQuestion = questionsArr.filter((q) => q.id === randomNum)
    const prompt = randomQuestion[0].prompt
    const answerChoices = randomQuestion[0].choices
    const correctAns = randomQuestion[0].answer
    

    function handleSelectAns(e) {
        setGuess(parseInt(e.target.value))
    }
    
    function handleAnswerChoice(e) {
        e.preventDefault();
        guess === correctAns ? alert('Correct!') : alert('Incorrect.') 
    }
    
    
  return (
        <div>
            <div className="card" style={{width: "50rem", margin: "auto"}}>
                <div className="card-header">
                    Question 
                </div>
                <div className="card-body">
                    <p className="card-title text-start">{prompt}</p>
                    <br />
                    <div className="text-start">
                        <form onSubmit={handleAnswerChoice}>
                            <input type="radio" name='1' value="0" onClick={handleSelectAns}/> &nbsp;
                            <label htmlFor="answer">{answerChoices[0]}</label><br />
                            <input type="radio" name='1' value="1" onClick={handleSelectAns}/> &nbsp;
                            <label htmlFor="answer">{answerChoices[1]}</label><br />
                            <input type="radio" name='1' value="2" onClick={handleSelectAns}/> &nbsp; 
                            <label htmlFor="answer">{answerChoices[2]}</label><br />
                            <input type="radio" name='1' value="3" onClick={handleSelectAns}/> &nbsp; 
                            <label htmlFor="answer">{answerChoices[3]}</label><br /><br />
                            <button type="submit" className="btn btn-secondary">Submit Answer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default QuestionCard