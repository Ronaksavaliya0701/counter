import React, { useRef } from 'react'

function UseRef() {

    const iref = useRef(1);

    const inc = () =>{
        iref.current.innerHTML = parseInt(iref.current.innerHTML) + 1;
    }

    const dec = () =>{
        if(iref.current.innerHTML > 1){
            iref.current.innerHTML = parseInt(iref.current.innerHTML) - 1;
        }
    }

  return (
    <React.Fragment>
        <button onClick={dec}>-</button>
        <p ref={iref}>
            {
                iref.current
            }
        </p>
        <button onClick={inc}>+</button>
    </React.Fragment>
  )
}

export default UseRef