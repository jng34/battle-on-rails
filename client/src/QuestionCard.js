import React from 'react'
import questions from './questions.json'

function QuestionCard() {

    const questionsArr = questions.questions
    const randomNum = Math.floor(Math.random()*questionsArr.length + 1)
    console.log(questionsArr)
    console.log(randomNum)
    const randomQuestion = questionsArr.filter((q) => q.id === randomNum)
    const prompt = randomQuestion.prompt
    const answerChoices = randomQuestion.choices
  return (
        <div>
            <div className="card">
                <div className="card-header">
                    Question 
                </div>
                <div className="card-body">
                    <p className="card-title">{prompt}</p>
                    <p className="card-text">{answerChoices}</p>
                </div>
            </div>
        </div>
  )
}

export default QuestionCard