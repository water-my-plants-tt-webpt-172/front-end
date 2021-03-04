import React, { useEffect, useState } from 'react';
import { speciesTypeOptions } from './speciesoptions'
import { editPlant } from '../api/actions'
import { connect } from 'react-redux'
import _ from 'lodash'

const EditPlant = (props) => {
    
    props.
    const [state, setState] = useState({ nickname: '', species: '', h2oFrequency: '1' });
    const [species, setSpecies] = useState({ species: '', h2oFrequency: '' })


    useEffect(() => {
        setState({
            ...state,
            species : species.species,
            h2oFrequency : species.h2oFrequency
        })
    },[species])

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
        props.addPlant(state);
        setState({ nickname: '', species: '', h2oFrequency: '1' });
        setSpecies({ species: '', h2oFrequency: '' })
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
                placeholder={state.h2oFrequency}
                onChange={onInputChange} />
            <input type='submit' value="Submit" />
        </form>
    );
}
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
