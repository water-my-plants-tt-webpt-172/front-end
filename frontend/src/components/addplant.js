import React, { useEffect, useState } from 'react';
import { speciesTypeOptions } from './speciesoptions'
import { addPlant } from '../api/actions'
import { connect } from 'react-redux'
import _ from 'lodash'


function AddPlant(props) {
    

    const[state, setState] = useState({ nickname: '', species: '' , h2oFrequency: ''});

    const onInputChange = e => {
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
      };
  
    useEffect(() => {
        if(state.species !== ''){
        setState({
            ...state,
            h2oFrequency : (_.find(speciesTypeOptions, state.species)).h2oFrequency
        })}
    },[state.species])


    const submitHandler = (e) => {
        e.preventDefault();
        props.addPlant(state);
            alert(`Your ${state.species} plant, ${state.nickname} was successfully added to your plant gallery`)
    }

    //maybe get rid of confirmation alert or add a confirmation component later?

        return (
            <form onSubmit={submitHandler}>
                    <select name="species" value={state.species} onChange={onInputChange}>
                    {speciesTypeOptions.map((species) => (
                        <option value={species.species}>
                        `${species.species}`
                        </option>
                    ))}
                    </select>
                    <input type='text'
                    placeholder='Nickname' 
                    value={state.nickname} 
                    onChange={onInputChange} />
                <input type='submit' value="Submit"/>
            </form>
        );
    }
    const mapStateToProps = (state) => {
        return {
          isLoading: state.user,
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

    //should addSpecies & addName be combined? 