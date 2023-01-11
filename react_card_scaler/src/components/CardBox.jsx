import './CardBox.css';

const CardBox= ({children}) =>{
    return <div className='cardBox'>
        <p>
            {children}
        </p>
        </div>
}

export default CardBox;