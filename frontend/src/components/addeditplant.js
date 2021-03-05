import React, { useEffect, useState } from "react";
import AddPlant from "./addplant";
import EditPlant from "./editplant";
import * as style from "./styledcomp";

const AddEditPlant = (props) => {
  const { plants } = props;
  console.log(plants);
  const [addOrEdit, setAddOrEdit] = useState(true);
  //Add == TRUE && Edit == False
  const [dropDownOption, setDropDownOption] = useState("add");

  useEffect(() => {
    console.log("Change to Dropdown: " + dropDownOption);
    if (dropDownOption === "add") {
      setAddOrEdit(true);
    } else setAddOrEdit(false);
    console.log("Value of add:" + addOrEdit);
  }, [dropDownOption]);

  const onInputChange = (e) => {
    setDropDownOption(e.target.value);
  };

  return (
    <div>
      <style.ModalUser>
        <p>USERNAME</p>
      </style.ModalUser>
      <form>
        <style.FormFlexColumn>
          <label>
            Current Plant Inventory:
            <select onChange={onInputChange}>
              <option value={"add"}>Select plant to edit</option>
              {console.log(plants)}
              {plants.map((plant) => (
                <option value={plant.id}>
                  {plant.id} : {plant.nickname}
                </option>
              ))}
            </select>
          </label>
        </style.FormFlexColumn>
        {addOrEdit ? <AddPlant /> : <EditPlant plantId={dropDownOption} />}
      </form>
    </div>
  );
};

export default AddEditPlant;
