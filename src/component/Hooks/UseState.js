import React from 'react'
import { useState } from 'react'
import "./style.css"

const UseState = () => {
  const [myNum, setMyNum] = useState(0);
  const updateValue = (type) => {
    if(type === 'INC'){
      setMyNum(myNum+1)
    }else {
      myNum == 0 ? setMyNum(0) : setMyNum(myNum - 1);
    }
  }
  return (
    <>
      <div className="center_div">
        <p> {myNum} </p>
        <div className="button2" onClick={()=> {updateValue("INC")}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/* HOVER ME */}
          INCR
        </div>
        <div className="button2" onClick={() => {updateValue("DCR")}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/* HOVER ME */}
          DECR
        </div>
      </div>
    </>
  );
}

export default UseState
