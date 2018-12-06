import React, { Component } from 'react';
import Person from './Components/Person';
// import logo from './logo.svg';
import './App.css';

const style = {
  backgroundColor : "white",
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'

}







class App extends Component {
  state = {
    persons: [
      {id:"ererf",name: "Anadu Errata",age : 28},
      {id:"fdffd",name: "Amadi Johnsob",age : 27},
      {id:"sdswd",name: "Joshua Nadnud",age : 43}
    ], 
    defaultDisplay : true 
  }

 deletePerson = (key) =>{
  const persons =  this.state.persons.slice(); 
  persons.splice(key,1)
   this.setState({persons :  persons})
 }

  toggleName = (value) => {
   console.log(value)
   this.setState({defaultDisplay :  !value}) 
  }

  addName = (name) =>{
    const persons = this.state.persons.slice(); 
    const random = Math.random()+Math.random() ;
    persons.push({
       id: random,
       name : name, 
       age : 32
    })

  }
  render() {
    return (
      <div className="App">
        <button
        style= {style}
         onClick= { () => this.toggleName(this.state.defaultDisplay)}>
             Switch Name
        </button>
      {
          (this.state.defaultDisplay && this.state.persons.length>0)? 
         <div>

           {this.state.persons.map( (person,key) => {
                return <Person  name = {person.name} click= {() => this.deletePerson(key)} key={person.id}/>
           })}

           </div>   : 
       <p> Sorry no profile found at the moment</p>
      }
        

      </div>
    );
  }
}

export default App;
