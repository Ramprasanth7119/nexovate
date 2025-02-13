import React from "react";
import GeometricPoker from './assets/Black Yellow Geometric Poker Club Logo 1.png';
import GreenPoker from './assets/Green Poker Chipes Casino Facebook Post (3) 6.png';
import King from './assets/Red and Gold Modern Casino Night Flyer 3.png';
import Queen from './assets/Red and Gold Modern Casino Night Flyer (1) 1.png';


const workshops = [
  {
    title: "Design Deck",
    description:
      "UI/UX workshops are collaborative sessions where designers, developers, and stakeholders come together to improve the user experience of a product or service. These workshops can be used to brainstorm new ideas, solve existing problems, and test new designs.",
    coordinator: "Akash 90803 52052",
    image: Queen,
    suit: "♣",
    rank: "Q",
    chipImage: GreenPoker,
    badgeImage: GeometricPoker,
  },
  {
    title: "UX/UI Workshop",
    description:
      "AR/VR workshops introduce participants to Augmented Reality (AR) and Virtual Reality (VR) technologies. These workshops cater to a wide range of audiences, from beginners eager to explore the basics to professionals looking to enhance their AR/VR development skills.",
    coordinator: "Akash 90803 52052",
    image: King,
    suit: "♦",
    rank: "K",
    chipImage: GeometricPoker,
    badgeImage: GreenPoker,
  },
];

const Workshops = () => {
  return (
    <div className="flex flex-col items-center bg-green-900 py-10 gap-20">
      {workshops.map((workshop, index) => (
        <div key={index} className="relative w-72 text-center">
          <h2 className="text-white text-2xl font-bold uppercase mb-4">Workshops</h2>
          <div className="relative bg-white rounded-lg p-4 shadow-lg">
            <div className="text-2xl font-bold absolute top-3 left-3">{workshop.rank}</div>
            <div className="text-2xl font-bold absolute top-3 right-3">{workshop.suit}</div>
            <img src={workshop.image} alt={workshop.title} className="w-full rounded-md" />
            <div className="mt-4 text-left px-2">
              <h3 className="text-lg font-bold">{workshop.title}</h3>
              <p className="text-sm mt-2">{workshop.description}</p>
              <p className="font-bold text-red-600 mt-2">Co-Ordinator - {workshop.coordinator}</p>
            </div>
            <img src={workshop.badgeImage} alt="Badge" className="w-16 absolute -bottom-6 left-0" />
          </div>
          <img src={workshop.chipImage} alt="Poker Chip" className="w-16 absolute -top-4 right-0" />
        </div>
      ))}
    </div>
  );
};

export default Workshops;
