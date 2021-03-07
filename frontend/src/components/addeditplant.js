import React, { useEffect, useState } from "react";
import AddPlant from "./addplant";
import EditPlant from "./editplant";
import * as style from "./styledcomp";


const AddEditPlant = (props) => {
  const { plants } = props;
  const [addOrEdit, setAddOrEdit] = useState(true);
  //Add == TRUE && Edit == False
  const [dropDownOption, setDropDownOption] = useState("add");

  useEffect(() => {
    if (dropDownOption === "add") {
      setAddOrEdit(true);
    } else setAddOrEdit(false);
  }, [dropDownOption]);

  const onInputChange = (e) => {
    setDropDownOption(e.target.value);
  };

  return (
    <div>
      <style.ModalUser>
        <p>{localStorage.getItem('username')}</p>
      </style.ModalUser>
      <form>
        <style.FormFlexColumn>
          <label>
            Current Plant Inventory:
            <select onChange={onInputChange}>
              <option value={"add"}>Select plant to edit</option>
              {plants.map((plant) => (
                <option value={[plant.id, plant.nickname, plant.species, plant.h2oFrequency]}>
                  {plant.id} : {plant.nickname}
                </option>
              ))}
            </select>
          </label>
        </style.FormFlexColumn>
        {addOrEdit ? <AddPlant /> : <EditPlant plant={dropDownOption} />}
      </form>
    </div>
  );
};

export default AddEditPlant;