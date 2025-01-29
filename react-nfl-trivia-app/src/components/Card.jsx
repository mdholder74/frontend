import React from 'react'

export default function Card() {
  return (
    <>
        <div>
            <h2>Question 1</h2>
            <p>Playing as: John Doe</p>
            <p>What is the name of the NFL team in Las Vegas?</p>
        </div>
        <div>
            <h2>Answers</h2>
            <ul>
                <li>Las Vegas Raiders</li>
                <li>Las Vegas Knights</li>
                <li>Las Vegas Aces</li>
                <li>Las Vegas Lights</li>
            </ul>
        </div>
        <div>
            <button>Next Question</button>
            <p>progress bar</p>

        </div>
    </>
  )
}
