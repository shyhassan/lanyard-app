import { useState } from 'react';
import './index.css';
import LanyardCard from './components/LanyardCard';
import { cards } from './assets';



function App() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Member');
  const [submitted, setSubmitted] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">

      {/* Input Form */}
      <div className="flex flex-col gap-4 w-full max-w-sm mb-8">
        <input
          type="text"
          placeholder="Enter your name"
          className="border p-2 rounded shadow"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="border p-2 rounded shadow"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Admin</option>
          <option>Member</option>
          <option>Guest</option>
        </select>

        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => setSubmitted(true)}
        >
          Generate Lanyard
        </button>
      </div>

      {/* Card Selection */}
      {/* <div className="grid grid-cols-3 gap-4 mb-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="cursor-pointer border p-2"
            onClick={() => setSelectedCard(card)}
          >
            <img src={card.src} alt={card.title} />
            <p className="text-xs text-center">{card.title}</p>
          </div>
        ))}
      </div> */}
      {/* {submitted && selectedCard && (
        <LanyardCard
          name={name}
          role={role}
          selectedCard={selectedCard}
        />
      ) */}

      <div className="grid grid-cols-3 gap-4 mb-6">
  {cards.map((card, i) => (
    <div
      key={i}
      onClick={() => setSelectedCard(card)}
      className={`cursor-pointer border p-2 rounded transition-all duration-200 ${
        selectedCard?.title === card.title
          ? "border-blue-500 ring-2 ring-blue-400 scale-105"
          : "border-gray-300 hover:border-blue-300"
      }`}
    >
      <img src={card.src} alt={card.title} />
      <p className="text-xs text-center mt-1">{card.title}</p>
    </div>
  ))}
</div>

    {selectedCard && (
  <LanyardCard
    name={name}
    role={role}
    selectedCard={selectedCard} // pass the selected card object
  />
)}



    </div>
  );


  
}

export default App;