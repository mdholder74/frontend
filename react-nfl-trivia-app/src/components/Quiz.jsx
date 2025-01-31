import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Quiz() {

  // let [index, setindex] = useState(0)
  const[question, setQuestion] = useState(null)

  const questionsSearch = async () => {
    try {
      const url = 'http://localhost:7000/questions/seed'
      const response = await fetch(url)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(`${data.message} (${response.status})`)
      }
    
      const questionsArrayData = data.questions[0]; 

    setQuestion({
      questionNumber: questionsArrayData.questionNumber,
      question: questionsArrayData.question,
      options0: questionsArrayData.options[0],
      options1: questionsArrayData.options[1],
      options2: questionsArrayData.options[2],
      options3: questionsArrayData.options[3],
      answer: questionsArrayData.answer,
      })
    } 
    catch (error) {
      console.error('Error fetching questions data:', error)
    }
  }
  const checkAnswer = (optionValue, e) => {
    if (optionValue === question.answer.toString()) {
      e.target.classList.add('correct')
    } else {
      e.target.classList.add('wrong')
    }
  }


  useEffect(() => {
    questionsSearch()
  }, [])


  return (
    <>
    <div className="question-container">
        <div>
            <h2>Question {question?.questionNumber || "Loading question..."} </h2>
            <p><b>NFL Analyst:</b> John Doe</p>
            <p className ="question">{question?.question || "Loading question..."}</p>
        </div>
        <div className="answer-buttons">
          <button onClick={(e)=>{checkAnswer(question?.options0, e)}} className="btn">{question?.options0 || "Loading..."}</button>
          <button onClick={(e)=>{checkAnswer(question?.options1, e)}} className="btn">{question?.options1 || "Loading..."}</button>
          <button onClick={(e)=>{checkAnswer(question?.options2, e)}} className="btn">{question?.options2 || "Loading..."}</button>
          <button onClick={(e)=>{checkAnswer(question?.options3, e)}} className="btn">{question?.options3 || "Loading..."}</button>
        </div>
        <div>
            <button className = "next-btn">Next Question</button>
            <div className = "index">1 of 5 questions</div>
        </div>
        </div>
    </>
  )
}
