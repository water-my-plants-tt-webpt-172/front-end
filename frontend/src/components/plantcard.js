import React from 'react';


const PlantCard = (props) => {
    const plant = props
        return (
            <div>
                <h2>{plant.nickname.toUpperCase()}</h2>
                <div>
                    <button>Water Me!</button>
                    <p>X days</p>
                    <p>{plant.species}</p>
                </div>
            </div>
        );
        }


export default PlantCard;