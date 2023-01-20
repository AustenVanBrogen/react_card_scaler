import './Card.css';
import React, {useState, useEffect} from 'react';
function Card({numID, cardID, cardText, passedFunction, currentCard}){

    const[cardStyle, setCardStyle] = useState(cardID);

    useEffect(() =>{
        // console.log(`The card at the center is now ${currentCard}`);
        changeStyle();
    }, [currentCard]);

    const handleClick = () => {
        //console.log(numID);
        passedFunction(numID);
    }
    
    const changeStyle = () =>{
        if(currentCard === numID && cardStyle != 'centerStyle'){
            setCardStyle('centerStyle');
        }
        else{
            setCardStyle(cardID);
        }

    }

    return <div className={cardStyle} onClick={handleClick}>
            <p> {cardText} </p>
        </div>
}

export default Card;