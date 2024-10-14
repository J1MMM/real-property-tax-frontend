import { Collapse, Stack, TextField } from "@mui/material";
import React from "react";
import Fieldset from "./Fieldset";

export const BoundariesCollapsible = (props) => {
  return (
    <>
      <Collapse in={props?.landIsActive}>
        <Fieldset title="LAND">
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="North"
              variant="outlined"
              name="northBoundary"
              value={props?.landDetails?.northBoundary}
              onChange={props?.handleLandChange}
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
              value={props?.landDetails?.southBoundary}
              onChange={props?.handleLandChange}
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
              value={props?.landDetails?.EastBoundary}
              onChange={props?.handleLandChange}
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
              value={props?.landDetails?.westBoundary}
              onChange={props?.handleLandChange}
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
              value={props?.landDetails?.NEboundary}
              onChange={props?.handleLandChange}
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
              value={props?.landDetails?.SWBoundary}
              onChange={props?.handleLandChange}
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
              value={props?.landDetails?.SEBoundary}
              onChange={props?.handleLandChange}
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
              value={props?.landDetails?.NWBoundary}
              onChange={props?.handleLandChange}
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
            value={props?.landDetails?.description}
            onChange={props?.handleLandChange}
            slotProps={{
              input: {
                readOnly: props?.readOnly,
              },
            }}
          />
        </Fieldset>
      </Collapse>

      <Collapse in={props?.buildingIsActive}>
        <Fieldset title="BUILDING">
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="North"
              variant="outlined"
              name="northBoundary"
              value={props?.buildingDetails?.northBoundary}
              onChange={props?.handleBuildingChange}
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
              value={props?.buildingDetails?.southBoundary}
              onChange={props?.handleBuildingChange}
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
              value={props?.buildingDetails?.EastBoundary}
              onChange={props?.handleBuildingChange}
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
              value={props?.buildingDetails?.westBoundary}
              onChange={props?.handleBuildingChange}
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
              value={props?.buildingDetails?.NEboundary}
              onChange={props?.handleBuildingChange}
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
              value={props?.buildingDetails?.SWBoundary}
              onChange={props?.handleBuildingChange}
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
              value={props?.buildingDetails?.SEBoundary}
              onChange={props?.handleBuildingChange}
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
              value={props?.buildingDetails?.NWBoundary}
              onChange={props?.handleBuildingChange}
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
            value={props?.buildingDetails?.description}
            onChange={props?.handleBuildingChange}
            slotProps={{
              input: {
                readOnly: props?.readOnly,
              },
            }}
          />
        </Fieldset>
      </Collapse>

      <Collapse in={props?.machineryIsActive}>
        <Fieldset title="MACHINERY">
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="North"
              variant="outlined"
              name="northBoundary"
              value={props?.machineryDetails?.northBoundary}
              onChange={props?.handleMachineChange}
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
              value={props?.machineryDetails?.southBoundary}
              onChange={props?.handleMachineChange}
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
              value={props?.machineryDetails?.EastBoundary}
              onChange={props?.handleMachineChange}
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
              value={props?.machineryDetails?.westBoundary}
              onChange={props?.handleMachineChange}
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
              value={props?.machineryDetails?.NEboundary}
              onChange={props?.handleMachineChange}
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
              value={props?.machineryDetails?.SWboundary}
              onChange={props?.handleMachineChange}
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
              value={props?.machineryDetails?.SEboundary}
              onChange={props?.handleMachineChange}
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
              value={props?.machineryDetails?.NWboundary}
              onChange={props?.handleMachineChange}
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
            value={props?.machineryDetails?.description}
            onChange={props?.handleMachineChange}
            slotProps={{
              input: {
                readOnly: props?.readOnly,
              },
            }}
          />
        </Fieldset>
      </Collapse>

      <Collapse in={props?.othersIsActive}>
        <Fieldset title="OTHERS">
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="North"
              variant="outlined"
              name="northBoundary"
              value={props?.othersDetails?.northBoundary}
              onChange={props?.handleOthersChange}
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
              value={props?.othersDetails?.southBoundary}
              onChange={props?.handleOthersChange}
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
              value={props?.othersDetails?.EastBoundary}
              onChange={props?.handleOthersChange}
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
              value={props?.othersDetails?.westBoundary}
              onChange={props?.handleOthersChange}
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
              value={props?.othersDetails?.NEBoundary}
              onChange={props?.handleOthersChange}
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
              value={props?.othersDetails?.SWBoundary}
              onChange={props?.handleOthersChange}
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
              value={props?.othersDetails?.SEBoundary}
              onChange={props?.handleOthersChange}
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
              value={props?.othersDetails?.NWBoundary}
              onChange={props?.handleOthersChange}
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
            value={props?.othersDetails?.description}
            onChange={props?.handleOthersChange}
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
