import React, {Component} from 'react';


const Person = (BasicInfo) => {
        return (
          <ul>
          <li> name = {BasicInfo.name} </li>
         <li> species = {BasicInfo.species} </li> 
         <li> number = {BasicInfo.number} </li> 
         <li> birthday = {BasicInfo.birthday} </li> 
          <li>profession = {BasicInfo.profession} </li>
          </ul>
        )
}

export default Person