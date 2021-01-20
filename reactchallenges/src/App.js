import React, {Component} from 'react'; 
import './App.css';
import Person from './BasicInfo/BasicInfo'

class App extends Component {
  
 state = {
   people: [
     {name:'Shrek',
     species:'Ogre', 
     number: '123-456-7890',
     birthday: '01/01/2020',
     profession: 'Web Developer'},
     {name:'Donkey',
      species:'horse', 
      number: '098-765-4321',
      birthday: '04/19/2020',
      profession: 'Comedian' },
      {name:'Fiona',
      species:'Ogre', 
      number: '555-555-5555',
      birthday: '2/22/2222',
      profession: 'Princess'
    }
  ]
 }



  render(){
    return(
      <div>
        {
          this.state.people.map(BasicInfo =>{
            return <Person 
            name ={BasicInfo.name} 
            species = {BasicInfo.species} 
            number = {BasicInfo.number} 
            birthday ={BasicInfo.birthday}
            profession = {BasicInfo.profession}
            />
          })
        }
      </div>

    );
  }
}

export default App;