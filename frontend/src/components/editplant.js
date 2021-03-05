import React, { useEffect, useState } from 'react';
import { speciesTypeOptions } from './speciesoptions'
import { editPlant } from '../api/actions'
import { connect } from 'react-redux'
import _ from 'lodash'

const EditPlant = (props) => {
    
    let plant = (props.plant).split(',');
    console.log(plant)
    const [state, setState] = useState({nickname: plant[1], species: plant[2], h2oFrequency: plant[3] , user_id: parseInt(localStorage.getItem('id'))});
    const [species, setSpecies] = useState({ species: '', h2oFrequency: '' })
    console.log(state)

    useEffect(() => {
        setState({
            ...state,
            species : species.species,
            h2oFrequency : species.h2oFrequency
        })
    },[species])

    useEffect(() => {
        plant = (props.plant).split(',');
        setState({nickname: plant[1], species: plant[2], h2oFrequency: plant[3] , user_id: parseInt(localStorage.getItem('id'))})
    },[props.plant])

    const onInputChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };


    const onSpeciesChange = e => {
        const [selectedSpecies] = speciesTypeOptions.filter((item) => {
            return item.species == e.target.value;
        })
        setSpecies(selectedSpecies)
        console.log(species)
    }


    const submitHandler = (e) => {
        e.preventDefault();
        props.editPlant(plant[0], state);
    }

    //maybe get rid of confirmation alert or add a confirmation component later?

    return (
        <form onSubmit={submitHandler}>
            <select name="species" onChange={onSpeciesChange}>
                <option value=''>Select Species Type</option>
                {speciesTypeOptions.map((speciesH2o) => (
                    <option
                        value={speciesH2o.species}>
                        {speciesH2o.species}
                    </option>
                ))}
            </select>
            <input type='text'
                name="nickname"
                placeholder='Nickname'
                onChange={onInputChange} />
            <input type='text'
                name="h2oFrequency"
                placeholder={"Water Frequency (in days) :" + state.h2oFrequency}
                onChange={onInputChange} />
            <input type='submit' value="Submit" />
        </form>
    );
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        plants: state.plants,
        error: state.error,
        success: state.success,
    };
};

const mapDispatchToProps = { editPlant };

export default connect(mapStateToProps, mapDispatchToProps)(EditPlant);
