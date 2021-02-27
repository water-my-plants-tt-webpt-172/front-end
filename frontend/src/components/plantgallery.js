import React, { Component } from 'react';
import PlantCard from './plantCard';

class PlantGallery extends Component {
    static defaultProps = {
        usersPlants: [
            { id: 1, nickname: 'Pearly', species: 'curio' },
            { id: 2, nickname: 'Grumpy', species: 'cactus' },
            { id: 3, nickname: 'Spike', species: 'air' }
        ]
    };

    render() {
        return (
            <div>
                {this.props.usersPlants.map((plant) => (
                    <PlantCard nickname={plant.nickname} species={plant.species} />
                ))}
            </div>
        )
    }
}

export default PlantGallery;
