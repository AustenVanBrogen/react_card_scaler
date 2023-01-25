import './CardBox.css';
import Card from './Card.jsx';
import React, {useState} from 'react';

const CardBox= ({children}) =>{

    const [curCardInCenter, setCurCardInCenter] = useState(0);
    function passedFunction(number){
        if(curCardInCenter === number){
            setCurCardInCenter(0);
        }
        else{
            setCurCardInCenter(number);
        }        
      }

    return <div className='cardBox'>
        <div>
            <div>
            <Card className='cards' numID={1} cardID='cardStyle1' cardText='Hello' passedFunction={passedFunction} currentCard={curCardInCenter}></Card>
            <Card className='cards' numID={2} cardID='cardStyle2' cardText='Hello' passedFunction={passedFunction} currentCard={curCardInCenter}></Card>
          </div>
          <div>
            <Card className='cards' numID={3} cardID='cardStyle3' cardText='Hello' passedFunction={passedFunction} currentCard={curCardInCenter}></Card>
            <Card className='cards' numID={4} cardID='cardStyle4' cardText='Hello' passedFunction={passedFunction} currentCard={curCardInCenter}></Card>
          </div>
        </div>
        </div>
}

export default CardBox;