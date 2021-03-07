
import React, { useEffect, useState } from 'react';
import { speciesTypeOptions } from './speciesoptions'
import { editPlant, deletePlant } from '../api/actions'
import { connect } from 'react-redux'
import * as style from "./styledcomp";

const EditPlant = (props) => {
    
    let plant = (props.plant).split(',');
    console.log(plant)
    const [state, setState] = useState({nickname: plant[1], species: plant[2], h2oFrequency: plant[3] , user_id: parseInt(localStorage.getItem('id'))});
    const [species, setSpecies] = useState({ species: '', h2oFrequency: '' })


  const onInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setState({
      ...state,
      species: species.species,
      h2oFrequency: species.h2oFrequency,
    });
    console.log(state)
  }, [species]);

    useEffect(() => {
        plant = (props.plant).split(',');
        setState({nickname: plant[1], species: plant[2], h2oFrequency: plant[3] , user_id: parseInt(localStorage.getItem('id'))})
    },[props.plant])

    const onSpeciesChange = (e) => {
        const [selectedSpecies] = speciesTypeOptions.filter((item) => {
          return item.species == e.target.value;
        });
        setSpecies(selectedSpecies);
      };

    const submitHandler = (e) => {
        e.preventDefault();
        props.editPlant(plant[0], state);
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        props.deletePlant(plant[0])
    }
    
  return (
    <div>
      <style.FormFlexColumn>
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
        <style.InputButton type="button" value="Submit" onClick={submitHandler} />
          <div>
                <style.InputButton type="button" value="Delete Plant" onClick={deleteHandler}/>
          </div>
      </style.FormFlexColumn>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    plants: state.plants,
    error: state.error,
    success: state.success,
  };
};

const mapDispatchToProps = { editPlant, deletePlant };

export default connect(mapStateToProps, mapDispatchToProps)(EditPlant);
