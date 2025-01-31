import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Quiz() {
 
  const[question, setQuestion] = useState(null)

  const questionsSearch = async () => {
    try {
      const url = 'http://localhost:7000/questions/seed'
      const response = await fetch(url)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(`${data.message} (${response.status})`)
      }
    
      const questionsArrayData = data.questions[0]; // Get the first question

    setQuestion({
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

  useEffect(() => {
    questionsSearch()
  }, [])


  return (
    <>
    <div className="question-container">
        <div>
            <h2>Question 1</h2>
            <p><b>NFL Analyst:</b> John Doe</p>
            <p className ="question">{question?.question || "Loading question..."}</p>
        </div>
        <div className="answer-buttons">
        <button className="btn">{question?.options0 || "Loading..."}</button>
          <button className="btn">{question?.options1 || "Loading..."}</button>
          <button className="btn">{question?.options2 || "Loading..."}</button>
          <button className="btn">{question?.options3 || "Loading..."}</button>
        </div>
        <div>
            <button className = "next-btn">Next Question</button>
            <div className = "index">1 of 5 questions</div>
        </div>
        </div>
    </>
  )
}
