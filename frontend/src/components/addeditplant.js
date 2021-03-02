import React, { useEffect, useState } from "react";
import AddPlant from "./addplant"
import EditPlant from "./editplant";


const AddEditPlant = (props) => {
    const plants = props;

    const [addOrEdit, setAddOrEdit] = useState(true);
    //Add == TRUE && Edit == False
    const [dropDownOption, setDropDownOption] = useState('add');

    useEffect(() => {
        if (!dropDownOption === 'add') {
            setAddOrEdit(false);
        }
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
                  `${plant.id} : ${plant.nickname}`
                  </option>
            ))}
          </select>
        </form>
            {addOrEdit ?
                <AddPlant plants={plants} /> :
                <EditPlant plants={plants} />
            }
        </div>
    )
}

export default AddEditPlant;