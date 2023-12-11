import React from 'react'
import { ButtonMemo } from './ButtonMemo'


export const Table = () => {
  return (
    <div>
        <h1>Juego de memoria</h1>              
    <table>
         <tr>
    <td><ButtonMemo id='0' /></td>
    <td><ButtonMemo id='1'/></td>
    <td><ButtonMemo id='2'/></td>
    <td><ButtonMemo id='3'/></td>    
  </tr>
  <tr>
    <td><ButtonMemo id='4'/></td>
    <td><ButtonMemo id='5'/></td>
    <td><ButtonMemo id='6'/></td>
    <td><ButtonMemo id='7'/></td>    
  </tr>
  <tr>
    <td><ButtonMemo id='8'/></td>
    <td><ButtonMemo id='9'/></td>
    <td><ButtonMemo id='10'/></td>
    <td><ButtonMemo id='11'/></td>    
  </tr>
  <tr>
    <td><ButtonMemo id='12'/></td>
    <td><ButtonMemo id='13'/></td>
    <td><ButtonMemo id='14'/></td>
    <td><ButtonMemo id='15' /></td>    
  </tr>
</table>

    </div>
  )
}
