import React from 'react'

export default function Analyst() {
  return (
    <div>
      <div class="analyst-container">
          <h2 className ="analyst-header">Create A NFL Analyst</h2>
          <div class="form">
              <label>NAME</label>
              <select>
                  <option value="" disabled selected>choose wisely</option>
                  <option>The Scoop Master</option>
                  <option>The Comeback King</option>
                  <option>The Playbook Professor</option>
                  <option>The Scheme King</option>
                  <option>The Hype Machine</option>
                  <option>The Monday Morning Coach</option>
              </select>
          </div>
          <div class="form">
              <label>PERSONALITY TRAITS</label>
              <select>
                  <option value="" disabled selected>choose wisely</option>
                  <option>Statistician</option>
                  <option>Passionate</option>
                  <option>Articulate</option>
                  <option>Confident</option>
                  <option>Charismatic</option>
                  <option>Annoying</option>
              </select>
          </div>
          <div class="form">
              <label>CLOTHING STYLE</label>
              <select>
                  <option value="" disabled selected>choose wisely</option>
                  <option>The Classic Broadcaster (Suit and Tie)</option>
                  <option>The Former Player (Button-up, Jeans, Sneakers)</option>
                  <option>The Trendsetter (Designer Jackets, Tailored Pants, Oxfords)</option>
                  <option>The Tank Top (Black Tank Top, Rolex, Gold Chain, Blue Jeans, Sneakers)</option>
              </select>
          </div>
          <div class="form">
              <label>NFL KNOWLEDGE</label>
              <select>
              <option value="" disabled selected>choose wisely</option>
                  <option>Reporter</option>
                  <option>Former Player</option>
                  <option>Former Coach</option>
                  <option>I Love Football Guy</option>
              </select>
          </div>
          <div class="form">
              <label>FAVORITE TEAMS</label>
              <select>
                  <option value="" disabled selected>choose wisely</option>
                  <option>Dallas Cowboys</option>
                  <option>New England Patriots</option>
                  <option>Philadelphia Eagles</option>
                  <option>Pittsburgh Steelers</option>
                  <option>Kansas City Chiefs</option>
                  <option>Cincinnati Bengals</option>
                  <option>San Francisco 49ers</option>
                  <option>Green Bay Packers</option>
                  <option>Buffalo Bills</option>
                  <option>Baltimore Ravens</option>
              </select>
          </div>
          <button className= "save-btn" onclick="saveAnalyst()">Save Analyst</button>
        </div>
    </div>
  )
}
