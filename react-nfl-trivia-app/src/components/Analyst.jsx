import React from 'react'
import {useState} from 'react'

export default function Analyst() {
    const [analyst, setAnalyst] = useState({
        name: "",
        personality: "",
        clothingStyle: "",
        nflKnowledge: "",
        favoriteTeam: ""
    })

    //handle change function
    //this function will update the state of the analyst object when the user selects a value from the dropdown. The name attribute of the select element will be used as the key and the value of the select element will be used as the value
    const handleChange = (e) => {
        setAnalyst({
            ...analyst,
            [e.target.name]: e.target.value
        })
    }

    //Form Submission function
    //this function will send a POST request to the server with the analyst object as the body of the request. If the request is successful, the analyst state object will be reset to its initial state. If the request fails, an error message will be logged to the console
    const handleSubmit = async (e) => {
        e.preventDefault()//prevents the page from refreshing
        try {
            const response = await fetch('http://localhost:7000/api/trivia/analysts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(analyst)
            })
            const data = await response.json()
            
            if (response.ok) {//if the response is ok, the analyst state object is reset to its initial state
                setAnalyst({
                    name: "",
                    personality: "",
                    clothingStyle: "",
                    nflKnowledge: "",
                    favoriteTeam: ""
                })
            }
            else {
                throw new Error(`${data.message} (${response.status})`)
            }
            
        } 
        catch (error) {  
            console.error('Error creating analyst:', error)
    }
}
//handleEdit function
const handleEdit = async (id) => {
    try {
        const response = await fetch(`http://localhost:7000/api/trivia/analysts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(analyst)
        })
        const data = await response.json()
        
        if (response.ok) {
            setAnalyst({
                name: "",
                personality: "",
                clothingStyle: "",
                nflKnowledge: "",
                favoriteTeam: ""
            })
        }
        else {
            throw new Error(`${data.message} (${response.status})`)
        }
        
    } 
    catch (error) {  
        console.error('Error editing analyst:', error)
}

}

  return (
    <div>
      <div className="analyst-container">
        <h2 className="analyst-header">Create A NFL Analyst</h2>
        <form onSubmit={handleSubmit}>
            <div className="form">
                <label>NAME</label>
                <select name="name" onChange={handleChange}>
                    <option value="" disabled selected>choose wisely</option>
                    <option value="The Scoop Master">The Scoop Master</option>
                    <option value="The Scheme King">The Scheme King</option>
                    <option value="The Hype Machine">The Hype Machine</option>
                    <option value="The Monday Morning Coach">The Monday Morning Coach</option>
                </select>
            </div>
            <div className="form">
                <label>PERSONALITY</label>
                <select name="personality" onChange={handleChange}>
                    <option value="" disabled selected>choose wisely</option>
                    <option value="Statistician">Statistician</option>
                    <option value="Articulate">Articulate</option>
                    <option value="Charismatic">Charismatic</option>
                    <option value="Annoying">Annoying</option>
                </select>
            </div>
            <div className="form">
                <label>CLOTHING STYLE</label>
                <select name="clothingStyle" onChange={handleChange}>
                    <option value="" disabled selected>choose wisely</option>
                    <option value="The Classic Broadcaster">The Classic Broadcaster (Suit and Tie, Polished shoes)</option>
                    <option value="The Former Player">The Former Player (Button-up, Jeans, Watch, Sneakers)</option>
                    <option value="The Trendsetter">The Trendsetter (Designer Jackets, Tailored Pants, Oxfords)</option>
                    <option value="The Tank Top">The Tank Top (Black Tank Top, Rolex, Gold Chain, Blue Jeans, Sneakers)</option>
                </select>
            </div>
            <div className="form">
                <label>NFL KNOWLEDGE</label>
                <select name="nflKnowledge" onChange={handleChange}>
                    <option value="" disabled selected>choose wisely</option>
                    <option value="Reporter">Reporter</option>
                    <option value="Former Player">Former Player</option>
                    <option value="Former Coach">Former Coach</option>
                    <option value="I Love Football Guy">I Love Football Guy</option>
                </select>
            </div>
            <div className="form">
                <label>FAVORITE TEAM</label>
                <select name="favoriteTeam" onChange={handleChange}>
                    <option value="" disabled selected>choose wisely</option>
                    <option value="Dallas Cowboys">Dallas Cowboys</option>
                    <option value="New England Patriots">New England Patriots</option>
                    <option value="Philadelphia Eagles">Philadelphia Eagles</option>
                    <option value="Pittsburgh Steelers">Pittsburgh Steelers</option>
                    <option value="Kansas City Chiefs">Kansas City Chiefs</option>
                    <option value="Cincinnati Bengals">Cincinnati Bengals</option>
                    <option value="San Francisco 49ers">San Francisco 49ers</option>
                    <option value="Green Bay Packers">Green Bay Packers</option>
                    <option value="Buffalo Bills">Buffalo Bills</option>
                    <option value="Baltimore Ravens">Baltimore Ravens</option>
                </select>
            </div>
                <button type="submit" className="submit-btn">Submit</button>
        </form>
        </div>
        <div>
            <div className="analyst-card">
            <h2 className="analyst-header">Meet Your NFL Analyst</h2>
                <p className ="analyst-trait">NAME🖤</p>
                <p className ="selection-trait">{analyst.name}</p>
                <p className ="analyst-trait">PERSONALITY🎙️</p>
                <p className ="selection-trait">{analyst.personality}</p>
                <p className ="analyst-trait">CLOTHING STYLE👕 </p>
                <p className ="selection-trait">{analyst.clothingStyle}</p>
                <p className ="analyst-trait">NFL KNOWLEDGE💡</p>
                <p className ="selection-trait">{analyst.nflKnowledge}</p>
                <p className ="analyst-trait">FAVORITE TEAM🏈</p>
                <p className ="selection-trait">{analyst.favoriteTeam}</p>
                <button type="submit" className="edit-btn">Edit</button>
                <button type="submit" className="delete-btn">Delete</button>
            </div>
        </div>
    </div>
  )
}
