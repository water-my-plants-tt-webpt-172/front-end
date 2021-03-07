import React, { useState } from "react";
import IsWatered from "./isWatered";
import * as style from "./styledcomp";
import { connect } from 'react-redux'
import { editPlant , updateIsWatered, waterThePlant } from '../api/actions'

const PlantCard = (props) => {
  const { id, nickname, species, h2oFrequency, isWatered } = props;
  console.log(isWatered)
  console.log(props.isWateredGlobal)
  const  waterPlant = () => {
    const dateHolder = new Date()
    props.updateIsWatered(dateHolder)
    console.log(props.isWateredGlobal)
    props.editPlant(id, {nickname : nickname, species : species, h2oFrequency : h2oFrequency, isWatered : props.isWateredGlobal})
    //{nickname : nickname, species : species, h2oFrequency : h2oFrequency, isWatered : props.isWateredGlobal}
  }

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
        <style.P>{nickname.toUpperCase()}</style.P>
        <style.P>{species.toUpperCase()}</style.P>
        {/* {console.log(id)} */}
        <style.P>Water Frequency : {h2oFrequency} days</style.P>
        <style.FormButton onClick={waterPlant}>Water Plant</style.FormButton>
        
      </style.Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    plants: state.plants,
    error: state.error,
    success: state.success,
    isWateredGlobal: state.isWatered
  };
};

const mapDispatchToProps = { editPlant, updateIsWatered, waterThePlant };

export default connect(mapStateToProps, mapDispatchToProps)(PlantCard);

