import React, { useEffect, useState } from "react";
import { speciesTypeOptions } from "./speciesoptions";
import { editPlant } from "../api/actions";
import { connect } from "react-redux";
import _ from "lodash";
import * as style from "./styledcomp";

const EditPlant = (props) => {
  const [state, setState] = useState({
    nickname: "",
    species: "",
    h2oFrequency: "1",
  });
  const [species, setSpecies] = useState({ species: "", h2oFrequency: "" });

  useEffect(() => {
    setState({
      ...state,
      species: species.species,
      h2oFrequency: species.h2oFrequency,
    });
  }, [species]);

  const onInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSpeciesChange = (e) => {
    const [selectedSpecies] = speciesTypeOptions.filter((item) => {
      return item.species == e.target.value;
    });
    setSpecies(selectedSpecies);
    console.log(species);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.addPlant(state);
    setState({ nickname: "", species: "", h2oFrequency: "1" });
    setSpecies({ species: "", h2oFrequency: "" });
  };

  //maybe get rid of confirmation alert or add a confirmation component later?

  return (
    <div>
      <style.FormFlexColumn onSubmit={submitHandler}>
        <select name="species" onChange={onSpeciesChange}>
          <option value="">Select Species Type</option>
          {speciesTypeOptions.map((speciesH2o) => (
            <option value={speciesH2o.species}>{speciesH2o.species}</option>
          ))}
        </select>
        <style.ModalFormInput
          type="text"
          name="nickname"
          placeholder="Nickname"
          onChange={onInputChange}
        />
        <style.ModalFormInput
          type="text"
          name="h2oFrequency"
          placeholder={state.h2oFrequency}
          onChange={onInputChange}
        />
        <style.ModalFormInput type="submit" value="Submit" />
      </style.FormFlexColumn>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    isLoading: state.user,
    plants: state.plants,
    error: state.error,
    success: state.success,
  };
};

const mapDispatchToProps = { editPlant };

export default connect(mapStateToProps, mapDispatchToProps)(EditPlant);
