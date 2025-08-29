import React from 'react'
import { cardData } from './data.js'
import { CardBox } from './Card.jsx'

export default function App() {
  return (
    <div className="card-list-container">
      {cardData.map((card) => (
        <CardBox key={card.id} card={card} />
      ))}
    </div>
  )
}
