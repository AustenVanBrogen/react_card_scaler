import './Card.css';
import React, {useState} from 'react';
function Card({cardID, cardText}){

    const[cardStyle, setCardStyle] = useState(cardID);

    const changeStyle = () =>{
        if(cardStyle != 'centerStyle'){
            setCardStyle('centerStyle');
        }
        else{
            setCardStyle(cardID);
        }

    }

    return <div className={cardStyle} onClick={changeStyle}>
            <p> {cardText} </p>
        </div>
}

export default Card;