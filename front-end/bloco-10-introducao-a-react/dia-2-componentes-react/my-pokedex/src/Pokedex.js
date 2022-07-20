import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        const { propApp } = this.props;
        return (
            <div className='pokedex'>
                {propApp.map(pokemon => <Pokemon key={pokemon.id} propPokedex={pokemon} />)}
            </div>
        );
    }
}

export default Pokedex;
