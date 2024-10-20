import React from "react";
import Fieldset from "../../shared/Fieldset";
import { BoundariesCheckboxes } from "../custom/BoundariesCheckboxes";
import { BoundariesCollapsible } from "../custom/BoundariesCollapsible";

export const BoundariesFields = ({
  props,
  handleCheckboxChange,
  handleLandChange,
  handleBuildingChange,
  handleMachineChange,
  handleOthersChange,
}) => {
  return (
    <Fieldset title="Boundaries">
      <BoundariesCheckboxes
        props={props}
        handleCheckboxChange={handleCheckboxChange}
      />
      <BoundariesCollapsible
        props={props}
        handleLandChange={handleLandChange}
        handleBuildingChange={handleBuildingChange}
        handleMachineChange={handleMachineChange}
        handleOthersChange={handleOthersChange}
      />
    </Fieldset>
  );
};
