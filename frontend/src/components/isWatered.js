import React, { useEffect, useState } from "react";
import "./isWatered.css";

const IsWatered = (props) => {
  const waterStates = ["Needs Water", "Need to Water Soon", "Watered"];
  const [plant, setPlant] = useState({
    h2oFrequency: props.h2oFrequency,
    isWatered: props.isWatered,
  });
  
  const [watered, setWatered] = useState([waterStates[0], 'needsWater']);

  const waterHandler = (waterDateFromState, h2oFrequencyFromState) => {
    const h2oFrequencyInHours = h2oFrequencyFromState * 24;
    const waterDateInHours = waterDateFromState / 3600000;
    const currentTimeInHours = Date.now() / 3600000;
    const difference = currentTimeInHours - waterDateInHours;

    if (difference >= h2oFrequencyInHours) {
      setWatered([waterStates[0], "needsWater"]);
    } else if (
      difference < h2oFrequencyInHours &&
      h2oFrequencyInHours - difference <= 3
    ) {
      setWatered([waterStates[1], "needToWaterSoon"]);
    } else {
      setWatered([waterStates[2], "watered"]);
    }
  };

  useEffect(() => {
    waterHandler(Date.parse(plant.isWatered), plant.h2oFrequency);
  }, []);

  return (
    <div className={watered[1]} >
      <h2>{watered[0]}</h2>
    </div>
  );
};

export default IsWatered;
