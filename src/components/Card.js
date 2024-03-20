import React, {useEffect, useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import backFace from '../images/pregunta.png'

export const Card = ({name,number,frontFace, flipCard, unflippedCards, disableCards}) => {
    const [isFlipped, SetIsFlipped] = useState(false);
    const [hasEvent, setHasEvent] = useState(true);

    useEffect(()=>{
       
        if(unflippedCards.includes(number)){
          setTimeout(()=> SetIsFlipped(false), 700)
        }
              
    }, [unflippedCards]);

    useEffect(()=>{
      if(disableCards.includes(number)){
        setHasEvent(false);
      }

    },[disableCards])

    const handleClick = e =>{
        const value =  flipCard(name, number);
        
        if(value != 0){
          SetIsFlipped(!isFlipped)
        }
       
        
    }
  return (
    <div className='col-3 p-0 mb-2 mb-sm-0'>
        <ReactCardFlip isFlipped={isFlipped} >
            <img className='img-fluid' src={backFace} alt='back-face' onClick={hasEvent ? handleClick : null}/>
            <img className='img-fluid'  src ={frontFace}  alt = 'front-face' onClick={hasEvent ? handleClick : null} />
        </ReactCardFlip>
    </div>
  )
}
