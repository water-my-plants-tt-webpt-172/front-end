import React, { useEffect, useState } from 'react'

const IsWatered = (props) => {

    const waterStates = ['Needs Water', 'Need to Water Soon', 'Watered']
    const [plant, setPlant] = useState({h2oFrequency: props.h2oFrequency, isWatered : props.isWatered})
    const [watered, setWatered] = useState(waterStates[0])
    
    const waterHandler = (waterDateFromState, h2oFrequencyFromState) => {
        const h2oFrequencyInHours = h2oFrequencyFromState*24;
        const waterDateInHours = waterDateFromState/3600000;
        const currentTimeInHours = Date.now()/3600000;
        console.log(h2oFrequencyInHours)
        const difference = currentTimeInHours - waterDateInHours;

        if(difference >= h2oFrequencyInHours){
            setWatered(waterStates[0])
        }
        else if(difference < h2oFrequencyInHours && (h2oFrequencyInHours - difference) <= 12){
            setWatered(waterStates[1])
        }
        else {
            setWatered(waterStates[2])
        }
    }

    useEffect(() => {
        waterHandler(plant.isWatered, plant.h2oFrequency);
    },[])
    
    return (
       <div>
           <h2>{watered}</h2>
       </div>
    )
}

export default IsWatered