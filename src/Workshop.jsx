import React from "react";
import GeometricPoker from './assets/Black Yellow Geometric Poker Club Logo 1.png';
import GreenPoker from './assets/Green Poker Chipes Casino Facebook Post (3) 6.png';
import King from './assets/Red and Gold Modern Casino Night Flyer 3.png';
import Queen from './assets/Red and Gold Modern Casino Night Flyer (1) 1.png';

const workshops = [
  {
    title: "Design Deck",
    description1: `
      UI/UX workshops are collaborative sessions where designers, developers, 
      and stakeholders come together to improve the user experience of a product 
      or service.
    `,
    description2: `
      These workshops can be used to brainstorm new ideas, solve existing problems, 
      and test new designs.
    `,
    coordinator: "Akash 90803 52052",
    image: Queen,
    suit: "♣",
    rank: "Q",
    chipImage: GreenPoker,
    badgeImage: GeometricPoker,
  },
];

const Workshops = () => {
  return (
    <div className="workshops-container">
      {workshops.map((workshop, index) => (
        <div key={index} className="workshop-card">
          <h2 className="workshop-title">Workshops</h2>
          <div className="card">
            {/* Rank & Suit - Top Left */}
            <div className="card-corner top-left">
              <span className="rank">{workshop.rank}</span>
              <span className="suit">{workshop.suit}</span>
            </div>

            <div className="card-border">
              <img src={workshop.image} alt={workshop.title} className="card-image" />
              <div className="card-content">
                <h3>{workshop.title}</h3>
                <li className="description">{workshop.description1}</li>
                <li className="description">{workshop.description2}</li>
                <p className="coordinator">Co-Ordinator - {workshop.coordinator}</p>
              </div>
            </div>

            {/* Rank & Suit - Bottom Right */}
            <div className="card-corner bottom-right">
              <span className="rank">{workshop.rank}</span>
              <span className="suit">{workshop.suit}</span>
            </div>

            <img src={workshop.badgeImage} alt="Badge" className="badge" />
            <img src={workshop.chipImage} alt="Poker Chip" className="chip" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workshops;
