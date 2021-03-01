import React from 'react';


const PlantCard = (props) => {
    const {id , nickname, species, h2oFrequency} = props;


        return (
            <div>
                <h2>{nickname.toUpperCase()}</h2>
                <div>
                    <button>Water Me!</button>
                    <p>{h2oFrequency} days</p>
                    <p>{species}</p>
                    {console.log(id)}
                    <small>ID : {id}</small>
                </div>
            </div>
        );
        }


export default PlantCard;