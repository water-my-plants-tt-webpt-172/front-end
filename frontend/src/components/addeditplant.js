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
    };

    return (
        <div>
        <form>
          <select onChange={onInputChange}>
            <option value={'add'}>Add New Plant</option>
            {plants.map((plant) => (
              <option value={plant.id}>
                  {plant.id} : {plant.nickname}
                  </option>
            ))}
          </select>
        </form>
            {addOrEdit ?
                <AddPlant /> :
                <EditPlant plantId={dropDownOption} />
            }
        </div>
    )
}

export default AddEditPlant;