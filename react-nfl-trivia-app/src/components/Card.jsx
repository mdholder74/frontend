import React from 'react'

export default function Card() {
  return (
    <>
    <div className="question-container">
        <div>
            <h2>Question 1</h2>
            <p><b>NFL Analyst:</b> John Doe</p>
            <p className ="question">What is the name of the NFL team in Las Vegas?</p>
        </div>
        <div className="answer-buttons">
            <button className ="btn">A</button>
            <button className ="btn"> B</button>
            <button className ="btn">C</button>
            <button className ="btn">D</button>
        </div>
        <div>
            <button className = "next-btn">Next Question</button>
            <p>1/10</p>
        </div>
        </div>
    </>
  )
}
