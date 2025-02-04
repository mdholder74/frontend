import React from 'react'
import {useState} from 'react'

export default function Analyst() {
    const [analyst, setAnalyst] = useState({
        name: "",
        personality: "",
        clothingStyle: "",
        nflKnowledge: "",
        favoriteTeams: ""
    })

    //handle change function
    const handleChange = (e) => {
        setAnalyst({
            ...analyst,
            [e.target.name]: e.target.value
        })
    }

    //submit form function
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
            console.log(data)
        } 
        catch (error) {  
            console.error('Error creating analyst:', error)
    }
}

  return (
    <div>
      <div className="analyst-container">
        <h2 className="analyst-header">Create A NFL Analyst</h2>
        <div className="form">
            <label>NAME</label>
            <select name="name">
                <option value="" disabled selected>choose wisely</option>
                <option value="The Scoop Master">The Scoop Master</option>
                <option value="The Scheme King">The Scheme King</option>
                <option value="The Hype Machine">The Hype Machine</option>
                <option value="The Monday Morning Coach">The Monday Morning Coach</option>
            </select>
        </div>
        <div className="form">
            <label>PERSONALITY</label>
            <select name="personality">
                <option value="" disabled selected>choose wisely</option>
                <option value="Statistician">Statistician</option>
                <option value="Articulate">Articulate</option>
                <option value="Charismatic">Charismatic</option>
                <option value="Annoying">Annoying</option>
            </select>
        </div>
        <div className="form">
            <label>CLOTHING STYLE</label>
            <select name="clothingStyle">
                <option value="" disabled selected>choose wisely</option>
                <option value="The Classic Broadcaster">The Classic Broadcaster (Suit and Tie, Polished shoes)</option>
                <option value="The Former Player">The Former Player (Button-up, Jeans, Watch, Sneakers)</option>
                <option value="The Trendsetter">The Trendsetter (Designer Jackets, Tailored Pants, Oxfords)</option>
                <option value="The Tank Top">The Tank Top (Black Tank Top, Rolex, Gold Chain, Blue Jeans, Sneakers)</option>
            </select>
        </div>
        <div className="form">
            <label>NFL KNOWLEDGE</label>
            <select name="nflKnowledge">
                <option value="" disabled selected>choose wisely</option>
                <option value="Reporter">Reporter</option>
                <option value="Former Player">Former Player</option>
                <option value="Former Coach">Former Coach</option>
                <option value="I Love Football Guy">I Love Football Guy</option>
            </select>
        </div>
        <div className="form">
            <label>FAVORITE TEAMS</label>
            <select name="favoriteTeams">
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
            <button className="save-btn">Save Analyst</button>
        </div>
    </div>
  )
}
