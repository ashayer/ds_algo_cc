import React, { useState } from "react";
import { Popover } from "@mui/material/";
import * as PopUps from "./PopUpText";

const TextPopover = ({ text, id }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <span
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        style={{ color: "red", cursor: "pointer" }}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        role="button"
        aria-hidden="true"
      >
        {text}
      </span>
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableRestoreFocus
      >
        {id === 0 ? (
          <PopUps.InPlace />
        ) : id === 1 ? (
          <PopUps.Quadratic />
        ) : id === 2 ? (
          <PopUps.Stable />
        ) : id === 3 ? (
          <PopUps.Time />
        ) : id === 4 ? (
          <PopUps.Space />
        ) : id === 5 ? (
          <PopUps.BigO />
        ) : null}
      </Popover>
    </>
  );
};

export default TextPopover;
