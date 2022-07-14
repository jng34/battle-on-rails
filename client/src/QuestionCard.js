import React, { useEffect, useState } from 'react'
import questions from './questions.json'


function QuestionCard({ answerStatus, setAnswerStatus, damage }) {
    const [guess, setGuess] = useState(null)
    const [question, setQuestion] = useState("")
    const [correctAns, setCorrectAns] = useState(null)
    const [answerChoices, setAnswerChoices] = useState([])

    useEffect(() => {
        const questionsArr = questions.questions
        const randomNum = Math.floor(Math.random()*questionsArr.length + 1)
        const randomQuestion = questionsArr.filter((q) => q.id === randomNum)
        const choices = randomQuestion[0].choices
        const prompt = randomQuestion[0].prompt
        const answer = randomQuestion[0].answer
        setQuestion(prompt)
        setCorrectAns(answer)
        setAnswerChoices(choices)
    }, [answerStatus])



    function handleSelectAns(e) {
        setGuess(parseInt(e.target.value))
    }
   
    
    function handleAnswerChoice(e) {
        e.preventDefault();
        if (guess === correctAns) {
            alert('Correct!')
            setAnswerStatus(!answerStatus)
        } else {
            damage() //fix conflict with timer countdown 
            alert('Incorrect. You took damage!') 

        }
    }
    
    
  return (
        <div>
            <div className="card" style={{width: "50rem", margin: "auto"}}>
                <div className="card-header">
                    Question 
                </div>
                <div className="card-body">
                    <p className="card-title text-start">{question}</p>
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