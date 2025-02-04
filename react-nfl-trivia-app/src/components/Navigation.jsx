import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <header>
        <nav>
            <ul className="nav-bar">
              <Link to= "/">
                <li className ="nav-item">Play Nfl Trivia</li>
              </Link>
              <Link to= "/analyst">
              <li className ="nav-item">Create NFL Analyst</li>
              </Link>
              <Link to= "/badges">
              <li className ="nav-item">Badges</li>
              </Link>
              <Link to= "/about">
              <li className ="nav-item">About Me</li>
              </Link>
            </ul>
        </nav>
    </header>
  )
}
