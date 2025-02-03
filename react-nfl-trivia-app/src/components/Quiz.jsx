import React, { useState, useEffect } from 'react'

export default function Quiz() {
  const [index, setIndex] = useState(0)//index a state variable to keep track of the current question index. 0 represents the first question in a quiz (since arrays are zero-indexed).
  const[question, setQuestion] = useState(null)//question a state variable to store the current question data. null, meaning no data is available at the start of the quiz because the data is fetched asynchronously.
  const [questionsArray, setQuestionsArray] = useState([])//questionsArray a state variable to store the questions data fetched from the API. An empty array is used to store the questions data.
  
  //questionsSearch Function
  const questionsSearch = async () => {
    try {
      const url = 'http://localhost:7000/questions/seed'
      const response = await fetch(url)
      const data = await response.json()
      if (!response.ok) {
        throw new Error(`${data.message} (${response.status})`)//example of an error message: "Failed to fetch questions data. (404)"
      }
    
      setQuestionsArray(data.questions); //setQuestionsArray function to store the fetched questions data in the questionsArray state variable.
      setQuestion(data.questions[index]);//setQuestion function to store the current question data in the question state variable. The current question is fetched from the questionsArray state variable using the index state variable.
    }
    catch (error) {
      console.error('Error fetching questions data:', error)
    }
  }
  //checkAnswer Function
  const checkAnswer = (optionValue, e) => {//checkAnswer function to check if the selected answer is correct or not. The function takes two arguments: optionValue and e. optionValue is the value of the selected answer, and e is the event object.
    if (!question) return;//If there is no question data available, the function returns early.
    
    if (optionValue === question.answer.toString()) {
      e.target.classList.add('correct')
    } else {
      e.target.classList.add('wrong')
    }
  }
  //restColor Function
  const resetColor = () => {
    const buttons = document.querySelectorAll('.answer-buttons button')
    buttons.forEach(button => {
      button.classList.remove('correct')
      button.classList.remove('wrong')
    })
  }
  //nextQuestion Function
  const nextQuestion = () => {
    resetColor()//resetColor function to remove the correct and wrong classes from the answer buttons.
    setIndex((prevIndex) => {
      const nextIndex = prevIndex < questionsArray.length - 1 ? prevIndex + 1 : 0;
      setQuestion(questionsArray[nextIndex]); // Update question state
      return nextIndex;
    });
  };
  
  useEffect(() => {//useEffect hook to fetch the questions data when the component mounts.
    questionsSearch()//call the questionsSearch function to fetch the questions data.
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
          {question?.options?.map((option, index) => (
            <button key={index} onClick={(e) => checkAnswer(option, e)}>{option}</button>
          ))}
        </div>
        <div>
            <button onClick={nextQuestion} className="next-btn">Next Question</button>
            <div className="index">{index + 1} of {questionsArray.length} questions</div>
        </div>
    </div>
    </>

  ) 
}
