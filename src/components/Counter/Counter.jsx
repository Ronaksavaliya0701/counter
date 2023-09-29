import React, { useState } from 'react'

function Counter() {

    const [count,SetCount] = useState(1);

    const inc = () =>{
        SetCount(count + 1);
    }

    const dec = () =>{
        if(count > 1){
            SetCount(count - 1);
        }
    }
    
    // let price = [124000, 12000, 12500, 21000]
    let price = 124000
    let total = count * price;

    // document.getElementById('rs').innerHTML = price;

  return (
    <div>
        <h5 style={{marginTop: 10}}>Price : {price} 
        {/* {
            price.map((val)=>{

            })
        } */}
        
        </h5>
        

        <button onClick={inc}>+</button>
        <p>
            {
                count
            }
        </p>
        <button onClick={dec}>-</button>
        <h5 style={{marginTop: 10}}>Total Price : 
            {
                total
            }
        </h5>
    </div>
  )
}

export default Counter