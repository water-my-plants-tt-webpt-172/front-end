import React, { useEffect, useState } from "react";
import AddPlant from "./addplant"
import EditPlant from "./editplant";


const AddEditPlant = (props) => {
    const {plants} = props;
    console.log(plants)
    const [addOrEdit, setAddOrEdit] = useState(true);
    //Add == TRUE && Edit == False
    const [dropDownOption, setDropDownOption] = useState('add');

    useEffect(() => {
        console.log("Change to Dropdown: " + dropDownOption)
        if (dropDownOption === 'add') {
            setAddOrEdit(true);
        }
        else(setAddOrEdit(false))
        console.log("Value of add:" + addOrEdit)
    }, [dropDownOption])

    const onInputChange = e => {
        setDropDownOption(e.target.value)
        console.log(dropDownOption)
    };

    return (
        <div>
        <form>
          <select onChange={onInputChange}>
            <option value={'add'}>Add New Plant</option>
            {console.log(plants)}
            {plants.map((plant) => (
              <option value={[plant.id, plant.nickname, plant.species, plant.h2oFrequency]}>
                  {plant.id} : {plant.nickname}
                  </option>
            ))}
          </select>
        </form>
            {addOrEdit ?
                <AddPlant /> :
                <EditPlant plant={dropDownOption} />
            }
        </div>
    )
}

export default AddEditPlant;