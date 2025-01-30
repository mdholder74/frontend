import React from 'react'
import trophyAward from "../assets/trophyAward.jpg";
import medalAward from "../assets/medalAward.jpg";
import ribbonAward from "../assets/ribbonAward.jpg";


export default function Badges() {
  return (
    <div className="badges-container">
        <div className = "badge-title-1">The Champ</div>
        <img className= "badge-img" src={trophyAward} alt="trophyAward" />
        <div className = "badge-title-2">The All-Pro</div>
        <img className= "badge-img" src={medalAward} alt="medalAward" />
        <div className = "badge-title-3">The Fumble Master</div>
        <img className= "badge-img" src={ribbonAward} alt="ribbonAward" />
    </div>
  )
}
