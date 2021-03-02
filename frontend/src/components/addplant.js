import React, { Component, useState } from 'react';



function AddPlant(props) {
    
    const plants = props;
    
    const[state, setState] = useState({ nickname: '', species: '' });
    //need  to pass id prop

    const onInputChange = e => {
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
      };
  

    // addSpeciesHandler = (e) => {
    //     setState({ species: e.target.value })
    // }

    // addNameHandler = (e) => {
    //     setState({ nickname: e.target.value })
    // }

    //should addSpecies & addName be combined? 

    submitHandler = (e) => {
        e.preventDefault();
        alert(`Your ${state.species} plant, ${state.nickname} was successfully added to your plant gallery`)
    }

    //maybe get rid of confirmation alert or add a confirmation component later?

        return (
            <form onSubmit={this.submitHandler}>
                <label>
                    Please select Plant Species:
                    <select value={state.species} onChange={onInputChange}>
                        <option value='succulent'>Succulent</option>
                        <option value='cactus'>Cactus</option>
                        <option value='tropical'>Tropical</option>
                        <option value='air'>Air Plant</option>
                        <option value='curio'>Curio</option>
                        <option value='orchid'>Orchid</option>
                    </select>
                </label>
                    <input type='text'
                    placeholder='Nickname' 
                    value={state.nickname} 
                    onChange={onInputChange} />
                <input type='submit' value="Submit" />
            </form>
        );
    }

export default AddPlant