import React from 'react';
import '../App.css';

const States = ({ name, img }) => {
  return (
    <div className='tc grow bg-light-green br3 pa2 ma2 dib bw2 shadow-5'>
      <div className="flip-box" >
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <h2 className="pa1">{name}</h2>
            <img src={img} alt={name} className="pa2" />
          </div>
          <div class="flip-box-back">
            <h2>Back Side</h2>
          </div>
        </div>
      </div >
    </div>
    // <div>
    //   <div>
    //     <h2>{name}</h2>
    //     <img src={img} alt={name} />
    //   </div>
    // </div>
  );
}

export default States;