import React from 'react';

import { Modal, Box} from "@mui/material";


function Modall(props) {

  return (
    <Modal 
     open={props.open}
     onClose={e => props.close(false)}
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
      }}>
        {props.children}
      </Box>
    </Modal>
    // <div className={ModallShown ? "modall active" : "modall"} onClick={()=> setModallShown(false)}>
    //   <div className="modall-content" onClick={x => x.stopPropagation()}> {children}</div>
    // </div>
  )
}

export default Modall
