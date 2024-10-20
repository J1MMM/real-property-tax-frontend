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
              label="North"
              variant="outlined"
              name="northBoundary"
              value={props?.row?.Boundaries?.buildingDetails?.northBoundary}
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
              label="South"
              variant="outlined"
              name="southBoundary"
              value={props?.row?.Boundaries?.buildingDetails?.southBoundary}
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
              label="East"
              variant="outlined"
              name="EastBoundary"
              value={props?.row?.Boundaries?.buildingDetails?.EastBoundary}
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
              label="West"
              variant="outlined"
              name="westBoundary"
              value={props?.row?.Boundaries?.buildingDetails?.westBoundary}
              onChange={handleBuildingChange}
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
              value={props?.row?.Boundaries?.buildingDetails?.NEboundary}
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
              label="SW"
              variant="outlined"
              name="SWBoundary"
              value={props?.row?.Boundaries?.buildingDetails?.SWBoundary}
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
              label="SE"
              variant="outlined"
              name="SEBoundary"
              value={props?.row?.Boundaries?.buildingDetails?.SEBoundary}
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
              label="NW"
              variant="outlined"
              name="NWBoundary"
              value={props?.row?.Boundaries?.buildingDetails?.NWBoundary}
              onChange={handleBuildingChange}
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
            value={props?.row?.Boundaries?.buildingDetails?.description}
            onChange={handleBuildingChange}
            slotProps={{
              input: {
                readOnly: props?.readOnly,
              },
            }}
          />
        </Fieldset>
      </Collapse>

      <Collapse in={props?.row?.Boundaries?.machinery}>
        <Fieldset title="MACHINERY">
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="North"
              variant="outlined"
              name="northBoundary"
              value={props?.row?.Boundaries?.machineryDetails?.northBoundary}
              onChange={handleMachineChange}
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
              value={props?.row?.Boundaries?.machineryDetails?.southBoundary}
              onChange={handleMachineChange}
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
              value={props?.row?.Boundaries?.machineryDetails?.EastBoundary}
              onChange={handleMachineChange}
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
              value={props?.row?.Boundaries?.machineryDetails?.westBoundary}
              onChange={handleMachineChange}
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
              value={props?.row?.Boundaries?.machineryDetails?.NEboundary}
              onChange={handleMachineChange}
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
              name="SWboundary"
              value={props?.row?.Boundaries?.machineryDetails?.SWboundary}
              onChange={handleMachineChange}
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
              name="SEboundary"
              value={props?.row?.Boundaries?.machineryDetails?.SEboundary}
              onChange={handleMachineChange}
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
              name="NWboundary"
              value={props?.row?.Boundaries?.machineryDetails?.NWboundary}
              onChange={handleMachineChange}
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
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="North"
              variant="outlined"
              name="northBoundary"
              value={props?.row?.Boundaries?.othersDetails?.northBoundary}
              onChange={handleOthersChange}
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
              value={props?.row?.Boundaries?.othersDetails?.southBoundary}
              onChange={handleOthersChange}
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
              value={props?.row?.Boundaries?.othersDetails?.EastBoundary}
              onChange={handleOthersChange}
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
              value={props?.row?.Boundaries?.othersDetails?.westBoundary}
              onChange={handleOthersChange}
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
              name="NEBoundary"
              value={props?.row?.Boundaries?.othersDetails?.NEBoundary}
              onChange={handleOthersChange}
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
              value={props?.row?.Boundaries?.othersDetails?.SWBoundary}
              onChange={handleOthersChange}
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
              value={props?.row?.Boundaries?.othersDetails?.SEBoundary}
              onChange={handleOthersChange}
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
              value={props?.row?.Boundaries?.othersDetails?.NWBoundary}
              onChange={handleOthersChange}
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
