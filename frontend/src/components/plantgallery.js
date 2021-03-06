import React, { useEffect } from "react";
import { getPlants } from "../api/actions";
import { connect } from "react-redux";
import PlantCard from "./plantcard";
import Header from "./header";
import * as style from "./styledcomp";

const PlantGallery = (props) => {
  useEffect(() => {
    props.getPlants();
    console.log(props.plants);
  }, [props.madeChange]);

  console.log(props.madeChange);
  return (
    <style.HtmlBody>
      <style.Body>
        <Header plants={props.plants} />
        <style.PlantContainer>
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
        </style.PlantContainer>
      </style.Body>
      <style.Footer></style.Footer>
    </style.HtmlBody>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    plants: state.plants,
    error: state.error,
    success: state.success,
    madeChange: state.madeChange,
    user: state.user,
  };
};

const mapDispatchToProps = { getPlants };

export default connect(mapStateToProps, mapDispatchToProps)(PlantGallery);
