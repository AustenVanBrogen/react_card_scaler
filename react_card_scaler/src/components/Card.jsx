import './Card.css';
import React, {useState} from 'react';
function Card(){

    const[cardStyle, setCardStyle] = useState('cardStyle1');

    const changeStyle = () =>{
        if(cardStyle === 'cardStyle1'){
            setCardStyle('cardStyle2');
        }
        else{
            setCardStyle('cardStyle1');
        }
    }

    return <div className={cardStyle} onClick={changeStyle}>
            <p> Hello </p>
        </div>
}

export default Card;