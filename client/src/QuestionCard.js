import React from 'react'
import questions from './questions.json'

function QuestionCard() {

    const questionsArr = questions.questions
    const randomNum = Math.floor(Math.random()*questionsArr.length + 1)

    console.log(questions.questions)

    const prompts = questions.questions.map((q) => (
        <p key={q.id}>{q.prompt}</p>
    ))
    const answerChoices = questions.questions.map(q => q.choices.map((ans) => (
        <p>{ans}</p>
    )))
  return (
    <div>
        {/* {prompts} */}
        {answerChoices}
    </div>
  )
}

export default QuestionCard