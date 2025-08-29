import React from 'react'
import './Card.css'

export function CardBox({ card }) {
  return (
    <div className="cardBox" aria-label={card.name}>
      <div className="profileRow">
        <img src={card.image} alt={card.name} className="profileImg" />
        <div className="infoCol">
          <div className="cardName">{card.name}</div>
          <div className="tagColumn">
            {card.tags.map((tag) => (
              <span key={tag.name} className="tag">
                <img src={tag.image} alt={tag.name} className="tagImg" />
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
