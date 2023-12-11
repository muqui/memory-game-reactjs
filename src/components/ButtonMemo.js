import React from 'react'

export const ButtonMemo = (props) => {
    const onClickMemo = (e) =>{
       
        console.log('memo');
    }
  return (
    <div >
        <button onClick={onClickMemo}> {props.name}  </button>
    </div>
  )
}
