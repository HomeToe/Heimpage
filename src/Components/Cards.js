import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import mcLaren from '../images/mclaren.jpeg';
import NFL from '../images/nflphoto.jpeg'
import F1Fantasy from '../images/f1fantasy.jpeg'
import NFLFantasy from '../images/nflfantasy.jpeg'

function Cards() {
  return (
    <div className='cards'>
        <h2>Watch live</h2>
        <div className="cards__container">
            <div className="cards__wrapper"> 
                <ul className="cards__items">
                    <CardItem 
                    src={mcLaren}
                    text='Watch F1 Live'
                    label='F1 Live'
                    path='https://f1tv.formula1.com/'
                    /> 
                     <CardItem 
                    src={NFL}
                    text='Watch NFL Live'
                    label='NFL Live'
                    path='https://www.nflgamepass.com/'
                    /> 
                </ul>
            </div>
        </div>
        <h2 className='title'>Play Fantasy </h2>
        <div className="cards__container">
            <div className="cards__wrapper"> 
                <ul className="cards__items">
                    <CardItem 
                    src={F1Fantasy}
                    text='Play F1 Fantasy'
                    label='F1 Fantasy'
                    path='/https://fantasy.formula1.com/en/'
                    /> 
                     <CardItem 
                    src={NFLFantasy}
                    text='Play NFL Fantasy'
                    label='NFL Fantasy'
                    path='https://fantasy.nfl.com/'
                    /> 
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;
