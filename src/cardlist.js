import React from 'react';
import { Robots } from './robot.js';
import Card from './card.js';



const Cardlist = ({ Robots }) => {
    return (
        <div>
            {

                Robots.map((user, i) =>
                {
                    return (
                    <Card
                        name={Robots[i].name}
                        profession={Robots[i].profession}
                        age={Robots[i].age}
                        />
                        )
                })
             }
        
        </div>

        );
}
export default Cardlist
    