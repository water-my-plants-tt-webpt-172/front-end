import React, { Component, useEffect } from 'react';
import PlantCard from './plantcard';

const PlantGallery = (props) => {
    useEffect(() => {
        props.getPlants();
    })

    return (
        <div className="plantgalcontainer">
            {props.isLoading ?
                <p className="isLoading">Loading...</p>
                :
                props.plants.map((plant) => (
                        <PlantCard plant={plant} />
                    ))
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        isLoading: state.user,
        plants: state.plants,
        error: state.error,
        success: state.success
    }
}

const mapDispatchToProps = { getPlants };

export default connect(mapStateToProps, mapDispatchToProps)(PlantGallery);

