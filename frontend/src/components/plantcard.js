import React from "react";
import IsWatered from "./isWatered";
import * as style from "./styledcomp";

const PlantCard = (props) => {
  const { id, nickname, species, h2oFrequency } = props;
  const isWatered = Date.parse('2021-02-28');
  //   const colorChange (){
  //     h2oFrequency <= 0 ? true : false
  //   };

  return (
    <div>
      <style.Card>
        <IsWatered 
          id={id}
          nickname={nickname}
          species={species}
          h2oFrequency={h2oFrequency}
          isWatered={isWatered}
          />
        <style.CardImg src="https://images.unsplash.com/photo-1520565538411-e641b5cc7843?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        <small>ID : {id}</small>
        <style.P>{nickname}</style.P>
        <style.P>{species}</style.P>
        {/* {console.log(id)} */}
        <style.P>{h2oFrequency} days</style.P>
        <style.WaterReset>
         Water Plant
        </style.WaterReset>
      </style.Card>
    </div>
  );
};

export default PlantCard;
