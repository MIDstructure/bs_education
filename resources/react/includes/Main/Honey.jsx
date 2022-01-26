import React, { useEffect, useRef } from 'react';

function Honey() {

  return (
    // <div className="honey">
    //   {Array(6).fill(1).map((e, index) => {
    //     return (
    //       <React.Fragment key={index}>
    //         <div className="honey_body">
    //           {Array(19).fill(1).map((e, index) => {
    //             return (
    //               <div className="comb" key={index}>
    //               </div>
    //             )
    //           })}
    //         </div>
    //         <div className="honey_body honey_moved">
    //           {Array(19).fill(1).map((e, index) => {
    //             return (
    //               <div className="comb" key={index}>
    //               </div>
    //             )
    //           })}
    //         </div>
    //       </React.Fragment>
    //     )
    //   })}
    // </div>
    // <ul className="honeycomb">
    //   {Array(15).fill(1).map((e, index) => {
    //     return (
    //       <li className="honeycomb-cell" key={index}>
    //         <img className="honeycomb-cell_image" src="img/work-1.jpg" />
    //         <div className="honeycomb-cell_title">Web Design</div>
    //       </li>
    //     )
    //   })}
    //   <li className="honeycomb-cell honeycomb_placeholder">
    //   </li>
    // </ul>
    <div className="honey">
      <ul className="hexGrid">
        {Array(17).fill(1).map((e, index) => {
          return (
            <li className="hex" key={index}>
              <div className="hexIn">
                <a className="hexLink" href="#">
                  <img src="https://media.istockphoto.com/photos/purple-defocused-blurred-motion-abstract-background-picture-id1273929462?k=20&m=1273929462&s=612x612&w=0&h=jJ0xkuDVJQMp6YwnAiqbtM8nwid36M97VIFxCP_sKCE=" alt="" />
                  
                  <span>This is a title</span>
                  <p>Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Honey;



    // <div className='honey'>
    //   <div className="comb_1 comb_grid">
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //   </div>
    //   <div className="comb_2 comb_grid">
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //   </div>
    //   <div className="comb_3 comb_grid">
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //     <div className="item">
    //     </div>
    //   </div>
    //   <div className="comb_4 comb_grid">
    //     <div className="item">
    //     </div>
    //   </div>
    // </div>