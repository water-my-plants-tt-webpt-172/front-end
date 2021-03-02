import React, { Component } from 'react';



class addplant extends Component {
    constructor(props) {
        super(props);
        this.state = { nickname: '', species: '' };
        this.id = '#';
        this.addSpeciesHandler = this.addSpeciesHandler.bind(this);
        this.addNameHandler = this.addNameHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    //need  to pass id prop


    addSpeciesHandler = (e) => {
        this.setState({ species: e.target.value })
    }

    addNameHandler = (e) => {
        this.setState({ nickname: e.target.value })
    }

    //should addSpecies & addName be combined? 

    submitHandler = (e) => {
        alert(`Your ${this.state.species} plant, ${this.state.nickname} was successfully added to your plant gallery`)
        e.preventDefault();
    }

    //maybe get rid of confirmation alert or add a confirmation component later?

    render() {

        return (
            <form onSubmit={this.submitHandler}>
                <label>
                    Please select Plant Species:
                    <select value={this.state.species} onChange={this.addSpeciesHandler}>
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
                    value={this.state.nickname} 
                    onChange={this.addNameHandler} />
                <input type='submit' value="Submit" />
            </form>
        );
    }
}

export default addplant