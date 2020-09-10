import React from 'react';

const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 p3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={'https://robohash.org/${probs.id}?200x200'} />
            <div>
                <h2> {props.name} </h2>
                <p> {props.profession} </p>
                <p> {props.age} </p>
                
            </div>
        </div>
    );
}
export default Card;