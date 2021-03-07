import React, { useEffect, useState } from "react";
import { speciesTypeOptions } from "./speciesoptions";
import { addPlant } from "../api/actions";
import { connect } from "react-redux";
import * as style from "./styledcomp";

function AddPlant(props) {
  const [state, setState] = useState({
    nickname: "",
    species: "",
    h2oFrequency: "1",
    user_id: parseInt(localStorage.getItem("id"))
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
      return item.species === e.target.value;
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
      <style.FormFlexColumn>
        <label>
          Add new plant to gallery:
          <style.ModalFormSelect name="species" onChange={onSpeciesChange}>
            <option value="">Select Species Type</option>
            {speciesTypeOptions.map((speciesH2o) => (
              <option value={speciesH2o.species}>{speciesH2o.species}</option>
            ))}
          </style.ModalFormSelect>
        </label>
        <style.ModalFormInput
          type="text"
          name="nickname"
          placeholder="Enter Plant Nickname"
          onChange={onInputChange}
        />
        <style.WaterFormLabel>
          Recommended Watering Frequency:
          <style.ModalFormInput
            type="text"
            name="h2oFrequency"
            placeholder={state.h2oFrequency}
            onChange={onInputChange}
          />
          <style.InputButton type="button" value="Submit" onClick={submitHandler} />
        </style.WaterFormLabel>
      </style.FormFlexColumn>
    </div>
  );
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        isLoading: state.isLoading,
        plants: state.plants,
        error: state.error,
        success: state.success,
    };
};

const mapDispatchToProps = { addPlant };

export default connect(mapStateToProps, mapDispatchToProps)(AddPlant);

// addSpeciesHandler = (e) => {
//     setState({ species: e.target.value })
// }

// addNameHandler = (e) => {
//     setState({ nickname: e.target.value })
// }
