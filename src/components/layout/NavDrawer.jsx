import {
  ArchiveOutlined,
  AssessmentOutlined,
  ListAltRounded,
} from "@mui/icons-material";
import { Drawer, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  DRAWER_WIDTH_CLOSED,
  DRAWER_WIDTH_OPEN,
  HEADER_HEIGHT,
} from "../../utils/constant";

export default function NavDrawer(props) {
  return (
    <Drawer
      variant="permanent"
      open={props.open}
      sx={{
        width: props.open ? DRAWER_WIDTH_OPEN : DRAWER_WIDTH_CLOSED, // Width when open and closed
        "& .MuiDrawer-paper": {
          width: props.open ? DRAWER_WIDTH_OPEN : DRAWER_WIDTH_CLOSED,
          transition: "width 0.3s",
          overflowX: "hidden",
          top: HEADER_HEIGHT,
          boxSizing: "border-box",
          pt: 3,
        },
      }}
    >
      <Stack>
        <NavLink to="/assessor" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={2}>
            <ListAltRounded sx={{ fontSize: 32 }} />
            <Typography display={props.open ? "inline" : "none"} minWidth={300}>
              Assessor Office
            </Typography>
          </Stack>
        </NavLink>
        <NavLink to="/landtax-division" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={2}>
            <AssessmentOutlined sx={{ fontSize: 32 }} />
            <Typography display={props.open ? "inline" : "none"} minWidth={300}>
              Landtax Division
            </Typography>
          </Stack>
        </NavLink>
        <NavLink to="/cash-division" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={2}>
            <ArchiveOutlined sx={{ fontSize: 32 }} />
            <Typography display={props.open ? "inline" : "none"} minWidth={300}>
              Cash Division
            </Typography>
          </Stack>
        </NavLink>
      </Stack>
    </Drawer>
  );
}
