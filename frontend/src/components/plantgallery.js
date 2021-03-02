import React, { useEffect } from "react";
import { getPlants } from "../api/actions";
import { connect } from "react-redux";
import PlantCard from "./plantcard";
import Header from "./header";

const PlantGallery = (props) => {
  useEffect(() => {
    props.getPlants();
    console.log(props.plants);
  }, [props.isLoading]);

  return (
    <div className="plantgalcontainer">
      {props.isLoading === true ? (
        <p className="isLoading">Loading...</p>
      ) : (
        props.plants.map((plant) => (
          <PlantCard
            id={plant.id}
            nickname={plant.nickname}
            species={plant.species}
            h2oFrequency={plant.h2oFrequency}
          />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.user,
    plants: state.plants,
    error: state.error,
    success: state.success,
  };
};

const mapDispatchToProps = { getPlants };

export default connect(mapStateToProps, mapDispatchToProps)(PlantGallery);
