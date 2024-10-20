import React from "react";

export const useBoundariesFormatter = (params) => {
  let Boundaries = null;

  const boundaries_initial_format = {
    land: false,
    landDetails: {},
    building: false,
    buildingDetails: {},
    machinery: false,
    machineryDetails: {},
    others: false,
    othersDetails: {},
  };

  if (Array.isArray(params?.row?.Boundaries)) {
    params?.row?.Boundaries?.map((obj) => {
      if (obj?.boundaryType == "land" && obj?.active == "true") {
        boundaries_initial_format.land = true;
        boundaries_initial_format.landDetails = obj;
      }
      if (obj?.boundaryType == "building" && obj?.active == "true") {
        boundaries_initial_format.building = true;
        boundaries_initial_format.buildingDetails = obj;
      }
      if (obj?.boundaryType == "machinery" && obj?.active == "true") {
        boundaries_initial_format.machinery = true;
        boundaries_initial_format.machineryDetails = obj;
      }
      if (obj?.boundaryType == "others" && obj?.active == "true") {
        boundaries_initial_format.others = true;
        boundaries_initial_format.othersDetails = obj;
      }
    });

    Boundaries = boundaries_initial_format;
  } else {
    Boundaries = params?.row?.Boundaries;
  }

  return Boundaries;
};
