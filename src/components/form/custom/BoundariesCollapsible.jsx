import { Collapse, Stack, TextField } from "@mui/material";
import React from "react";
import Fieldset from "../../shared/Fieldset";

export const BoundariesCollapsible = ({
  props,
  handleLandChange,
  handleBuildingChange,
  handleMachineChange,
  handleOthersChange,
}) => {
  return (
    <>
      <Collapse in={props?.row?.Boundaries?.land}>
        <Fieldset title="LAND">
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="North"
              variant="outlined"
              name="northBoundary"
              value={props?.row?.Boundaries?.landDetails?.northBoundary}
              onChange={handleLandChange}
              slotProps={{
                input: {
                  readOnly: props?.readOnly,
                },
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              label="South"
              variant="outlined"
              name="southBoundary"
              value={props?.row?.Boundaries?.landDetails?.southBoundary}
              onChange={handleLandChange}
              slotProps={{
                input: {
                  readOnly: props?.readOnly,
                },
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              label="East"
              variant="outlined"
              name="EastBoundary"
              value={props?.row?.Boundaries?.landDetails?.EastBoundary}
              onChange={handleLandChange}
              slotProps={{
                input: {
                  readOnly: props?.readOnly,
                },
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              label="West"
              variant="outlined"
              name="westBoundary"
              value={props?.row?.Boundaries?.landDetails?.westBoundary}
              onChange={handleLandChange}
              slotProps={{
                input: {
                  readOnly: props?.readOnly,
                },
              }}
            />
          </Stack>
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="NE"
              variant="outlined"
              name="NEboundary"
              value={props?.row?.Boundaries?.landDetails?.NEboundary}
              onChange={handleLandChange}
              slotProps={{
                input: {
                  readOnly: props?.readOnly,
                },
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              label="SW"
              variant="outlined"
              name="SWBoundary"
              value={props?.row?.Boundaries?.landDetails?.SWBoundary}
              onChange={handleLandChange}
              slotProps={{
                input: {
                  readOnly: props?.readOnly,
                },
              }}
            />

            <TextField
              margin="dense"
              fullWidth
              label="SE"
              variant="outlined"
              name="SEBoundary"
              value={props?.row?.Boundaries?.landDetails?.SEBoundary}
              onChange={handleLandChange}
              slotProps={{
                input: {
                  readOnly: props?.readOnly,
                },
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              label="NW"
              variant="outlined"
              name="NWBoundary"
              value={props?.row?.Boundaries?.landDetails?.NWBoundary}
              onChange={handleLandChange}
              slotProps={{
                input: {
                  readOnly: props?.readOnly,
                },
              }}
            />
          </Stack>
          <TextField
            margin="dense"
            fullWidth
            label="Description"
            variant="outlined"
            name="description"
            value={props?.row?.Boundaries?.landDetails?.description}
            onChange={handleLandChange}
            slotProps={{
              input: {
                readOnly: props?.readOnly,
              },
            }}
          />
        </Fieldset>
      </Collapse>

      <Collapse in={props?.row?.Boundaries?.building}>
        <Fieldset title="BUILDING">
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="No. of Storeys"
              variant="outlined"
              name="noStoreys"
              value={props?.row?.Boundaries?.buildingDetails?.noStoreys}
              onChange={handleBuildingChange}
              slotProps={{
                input: {
                  readOnly: props?.readOnly,
                },
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              label="Brief Description"
              variant="outlined"
              name="description"
              value={props?.row?.Boundaries?.buildingDetails?.description}
              onChange={handleBuildingChange}
              slotProps={{
                input: {
                  readOnly: props?.readOnly,
                },
              }}
            />
          </Stack>
        </Fieldset>
      </Collapse>

      <Collapse in={props?.row?.Boundaries?.machinery}>
        <Fieldset title="MACHINERY">
          <TextField
            margin="dense"
            fullWidth
            label="Brief Description"
            variant="outlined"
            name="description"
            value={props?.row?.Boundaries?.machineryDetails?.description}
            onChange={handleMachineChange}
            slotProps={{
              input: {
                readOnly: props?.readOnly,
              },
            }}
          />
        </Fieldset>
      </Collapse>

      <Collapse in={props?.row?.Boundaries?.others}>
        <Fieldset title="OTHERS">
          <TextField
            margin="dense"
            fullWidth
            label="Description"
            variant="outlined"
            name="description"
            value={props?.row?.Boundaries?.othersDetails?.description}
            onChange={handleOthersChange}
            slotProps={{
              input: {
                readOnly: props?.readOnly,
              },
            }}
          />
        </Fieldset>
      </Collapse>
    </>
  );
};
