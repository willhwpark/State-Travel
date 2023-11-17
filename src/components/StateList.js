import React from 'react';
import States from './States';

const StateList = ({ states }) => {
  return (
    <div>
      {
        states.map((user, i) => {
          return (
            <States
              key={i}
              id={states[i].id}
              name={states[i].name}
              img={states[i].img}
            />
          )
        })
      }
    </div>
  )
}

export default StateList;