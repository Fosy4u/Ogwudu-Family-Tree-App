import React from 'react';
import Cardlist from './cardlist.js';
import './App.css';
import Searchbox from './searchbox.js';
import {Robots} from './robot.js';



class App extends React.Component {
    constructor() {
        super();
        this.state =
        {
            Robots: Robots,
            searchfield: ''
        }
    }

    onsearchchange = (event) => {
        this.setState({ searchfield: event.target.value })
   }
    
    render() {
        const filteredrobots = this.state.Robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
        <div className='tc'>
                <h1 className='tc' >OGWUDU FAMILY</h1>
                <p><Searchbox searchchange={this.onsearchchange} /></p>
                <div>
                    <Cardlist Robots={filteredrobots} />
            </div>
        </div>

        );

    }
    
}
 

export default App;
