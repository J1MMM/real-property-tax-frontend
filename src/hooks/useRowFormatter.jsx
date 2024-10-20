import React from "react";
import { useBoundariesFormatter } from "./useBoundariesFormatter";
import { useClassificationFormatter } from "./useClassificationFormatter";

export const useRowFormatter = (params) => {
  const Boundaries = useBoundariesFormatter(params);
  const classification = useClassificationFormatter(params);

  return { ...params?.row, Boundaries, classification };
};
