import React from 'react'
import birdGang from '../assets/birdGangImg.jpg'
import birds from '../assets/birdsImg.jpg'
import iggles from '../assets/igglesImg.jpg'

export default function About() {
  return (
    <div className="about-container">
        <div className="about-title">About the Author</div>
            <p>
            Hi, I’m Moe! 
            </p>
            <p>
                I’m a software engineer with a background in IT, data analysis, and recruitment. With an MBA from North Carolina A&T State University. I’ve built a ton of projects using JavaScript, C++, SQL, and React.
            </p>
        <div className="about-title">Why I Created This</div>
            <p>
                This trivia game is for the sports geeks the ones who listen to sports radio from <b>6 AM to 6 PM</b>, who have way too many sports podcasts in their queue, and who think they know it all… or just want to learn more. 
            </p>
            <p>
            I've spent years debating sports with friends, yelling at analysts on TV, and digging into stats like it's my second job. This trivia game is my way of bringing that same energy to everyone who loves the game as much as I do.
            </p>
            <p>
                But this isn’t just your basic trivia expect the unexpected with wild questions and a little smack talk built in. 
            </p>
            <p>
            <b>Think you know the NFL? Prove it!</b>  
            </p>
        <div className="about-title">🚀🏈🔥Favorite Teams</div>
            <p>The Iggles</p>
            <img className="eagles-img" src={birdGang} alt="image of an eagle" />
            <p>The Birds</p>
            <img className="eagles-img" src={birds} alt="image of birds" />
            <p>Bird Gand</p>
            <img className="eagles-img" src={iggles} alt="image of an eagle" />
        <div className="about-title">📌Lets Connect</div>
        <p>
            <a href="https://www.linkedin.com/in/moeholder/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
        </p>
        <p>
            <a href="https://mdholder74.github.io/MoePortfolioWebpage/" target="_blank" rel="noopener noreferrer">💻 Portfolio</a>
        </p>
    </div>

  )
}
