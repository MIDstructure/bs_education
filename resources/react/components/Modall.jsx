import React from 'react';
import Modal from 'react-bootstrap/Modal'

import "../../sass/_modal.scss"



function Modall(props) {

  return (
    <>
      {/* <Modal 
      open={props.open}
      onClose={e => props.close(false)}
      >

      </Modal> */}
        <Modal 
          show={props.open} 
          onHide={props.close}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="modal-auto-width"
          // size="lg"
          >
          {props.children}
        </Modal>
    </>
    // <div className={ModallShown ? "modall active" : "modall"} onClick={()=> setModallShown(false)}>
    //   <div className="modall-content" onClick={x => x.stopPropagation()}> {children}</div>
    // </div>
  )
}

export default Modall
