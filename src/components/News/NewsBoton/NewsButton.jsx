import React, { useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import "./NewsButton.css";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export function NewsButton() {
  const [open, setOpen] = useState(false);
  const handleButton = () => setOpen(!open);

  return (
    <div>
      <button className="button button-news" type="button" onClick={handleButton}>
        Subscribe
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleButton}
        BackdropComponent={Backdrop}
      >
        <Box className="modal-box">
          <iframe
          className="subscribe"
            src="https://bienestarconprettan.us17.list-manage.com/subscribe/post?u=c502f031e9e83d40ff2164786&id=7cce6b84f5"
            title="W3Schools Free Online Web Tutorials"
          ></iframe>
        </Box>
      </StyledModal>
    </div>
  );
}
