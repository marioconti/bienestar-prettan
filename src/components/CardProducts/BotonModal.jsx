import React from 'react';
import { useState } from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';

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

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export function MoreInformation({ingredients, othersIngredients, howToUse, notes}) {
  const [open, setOpen] = useState(false);
  const handleButton = () => setOpen(!open);

  return (
    <div>
        <button className='button' type="button" onClick={handleButton}>
            More information
        </button>
        <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleButton}
            BackdropComponent={Backdrop}
        >
        <Box className='modal-box'>
        <div className="ingredients">
            <div class="contenido">
                <h4>Ingredientes Activos</h4>
                <ul>
                    {ingredients.map((ingrediente) => <li>{ingrediente.ingredientes}</li>)}
                </ul>
                <h4>Ingredientes</h4>
                <ul>
                    {/* {othersIngredients.map((ingrediente) => {return <li>{ingrediente}</li>})} */}
                </ul>
                <h4>How to use</h4>
                <p>{howToUse}</p>
                <h4>Notes</h4>
                <p>{notes}</p>
            </div>
        </div>
        </Box>
      </StyledModal>
    </div>
  );
}