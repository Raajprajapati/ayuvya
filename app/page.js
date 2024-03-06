"use client";
import Card from './Card.js';
import { useState } from "react";


export default function Home() {
  const [showCard, setShowCard] = useState(true);

  const toggle = ()=>{
    setShowCard(!showCard);
  }
  
  return (
    <main>
      
      {
        showCard ? 
        <Card toggle={toggle} /> : 
        <button onClick={toggle} className='btn'> Show Card</button>
      }
    </main>
  );
}
