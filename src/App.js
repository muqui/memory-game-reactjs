import React, {useState, useEffect} from 'react';
import './App.css';
import { Card } from './components/Card';
import {images} from './import';

function App() {
  const [cards, setCards] = useState([]);
  const [firstCard, setfirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disableCards, setDisableCards] = useState([]);
  const shuffleArray =(array) => {
    for(let i = array.length -1; i >0; i--){
      let j = Math.floor(Math.random()* (i+1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  useEffect(()=>{
    shuffleArray(images);
    setCards(images)
  }, [])
  useEffect(()=>{
   
    checkForMatch();
  }, [secondCard])
  const flipCard = (name, number) =>{
    
    if ( firstCard.name === name && firstCard.number === number){
      return 0;
    }
    if(!firstCard.name){
      setfirstCard({name, number});
      
    } else if(!secondCard.name){
      setSecondCard({name, number})
      
    }
    return 1;
  }
  const checkForMatch = () =>{
    if(firstCard.name && secondCard.name){
      console.log()
      const match = firstCard.name === secondCard.name;
      match ? disableCard() : unflipCards()
    }
  }
    const disableCard = () =>{
      setDisableCards([firstCard.number, secondCard.number])
      resetCards();
    }
    const unflipCards = () => {
      
      setUnflippedCards([firstCard.number, secondCard.number])
      
      
      resetCards();
    }
    const resetCards = () =>{
      setfirstCard({});
      setSecondCard({});
    }
  
  return (
    
          <div className="app">
            <div className='cards-container'>
            {
              cards.map((card, index) =>(
                <Card 
                name={card.player} 
                number={index} 
                frontFace={card.src} 
                flipCard = {flipCard}
                unflippedCards ={unflippedCards}
                disableCards ={disableCards}
                />))
              
            }
           
            
            </div>
          
    </div>
   

  );
}

export default App;
