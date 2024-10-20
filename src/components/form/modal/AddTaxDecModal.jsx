import Button from "@mui/material/Button";

import { CLASSIFICATION_DEFAULT } from "../../../utils/constant";
import { useState } from "react";
import { v4 } from "uuid";
import { ContainerModal } from "../../shared/ContainerModal";
import { TaxNumberFields } from "../fieldset/TaxNumberFields";
import { OwnerInfoFields } from "../fieldset/OwnerInfoFields";
import { BenificialFields } from "../fieldset/BenificialFields";
import { PropertyInfoFields } from "../fieldset/PropertyInfoFields";
import { BoundariesFields } from "../fieldset/BoundariesFields";
import { TaxabilityFields } from "../fieldset/TaxabilityFields";
import { EOAFields } from "../fieldset/EOAFields";
import { ClassificationFields } from "../fieldset/ClassificationFields";
import { CancelsFields } from "../fieldset/CancelsFields";

export default function AddTaxDecModal(props) {
  const [openClassificationModal, setOpenClassificationModal] = useState(false);
  const [classificationData, setClassificationData] = useState(
    CLASSIFICATION_DEFAULT
  );

  const handleClassificationChange = (e) => {
    setClassificationData({
      ...classificationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLandChange = (e) => {
    props?.setSelectedRow((prev) => {
      return {
        ...prev,
        Boundaries: {
          ...prev.Boundaries,
          landDetails: {
            ...prev?.Boundaries?.landDetails,
            [e.target.name]: e.target.value,
          },
        },
      };
    });
  };
  const handleBuildingChange = (e) => {
    props?.setSelectedRow((prev) => {
      return {
        ...prev,
        Boundaries: {
          ...prev.Boundaries,
          buildingDetails: {
            ...prev?.Boundaries.buildingDetails,
            [e.target.name]: e.target.value,
          },
        },
      };
    });
  };
  const handleMachineChange = (e) => {
    props?.setSelectedRow((prev) => {
      return {
        ...prev,
        Boundaries: {
          ...prev.Boundaries,
          machineryDetails: {
            ...prev?.Boundaries.machineryDetails,
            [e.target.name]: e.target.value,
          },
        },
      };
    });
  };
  const handleOthersChange = (e) => {
    props?.setSelectedRow((prev) => {
      return {
        ...prev,
        Boundaries: {
          ...prev.Boundaries,
          othersDetails: {
            ...prev?.Boundaries.othersDetails,
            [e.target.name]: e.target.value,
          },
        },
      };
    });
  };

  const handleFormChange = (e) => {
    props?.setSelectedRow({
      ...props?.row,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) =>
    props?.setSelectedRow((prev) => {
      return {
        ...prev,
        Boundaries: {
          ...prev.Boundaries,
          [e.target.name]: e.target.checked,
        },
      };
    });

  const handleAddClassification = () => {
    if (classificationData.classification != "") {
      const id = v4();

      props?.setSelectedRow((prev) => {
        return {
          ...prev,
          classification: [
            ...prev.classification,
            { ...classificationData, id: id },
          ],
        };
      });

      setClassificationData(CLASSIFICATION_DEFAULT);
      setOpenClassificationModal(false);
    }
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    props?.setConfirmationOpen(true);
  };

  return (
    <>
      <ContainerModal
        title="TAX DECLARATION OF REAL PROPERTY"
        open={props?.open}
        onClose={props?.handleClose}
        onSubmit={handleSubmitClick}
        actionButton={
          <>
            <Button
              size="small"
              onClick={props?.handleClose}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button size="small" type="submit" variant="contained">
              Submit
            </Button>
          </>
        }
      >
        <TaxNumberFields props={props} handleFormChange={handleFormChange} />
        <OwnerInfoFields props={props} handleFormChange={handleFormChange} />
        <BenificialFields props={props} handleFormChange={handleFormChange} />
        <PropertyInfoFields props={props} handleFormChange={handleFormChange} />

        <BoundariesFields
          props={props}
          handleCheckboxChange={handleCheckboxChange}
          handleLandChange={handleLandChange}
          handleBuildingChange={handleBuildingChange}
          handleMachineChange={handleMachineChange}
          handleOthersChange={handleOthersChange}
        />

        <TaxabilityFields {...props} />
        <EOAFields props={props} handleFormChange={handleFormChange} />

        <ClassificationFields
          props={props}
          open={openClassificationModal}
          onClose={() => setOpenClassificationModal(false)}
          addClassOnlick={() => setOpenClassificationModal(true)}
          classificationData={classificationData}
          handleAddClassification={handleAddClassification}
          handleClassificationChange={handleClassificationChange}
        />

        <CancelsFields props={props} handleFormChange={handleFormChange} />
      </ContainerModal>
    </>
  );
}
