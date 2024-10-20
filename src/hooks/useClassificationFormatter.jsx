import React from "react";
import { v4 } from "uuid";

export const useClassificationFormatter = (params) => {
  let classification = [];
  params?.row?.classification?.map((obj) => {
    const id = v4();

    classification.push({ ...obj, id });
  });

  return classification;
};
