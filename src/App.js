import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import ShowPeople from './components/ShowPeople';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [people, setPeople] = useState([
    {id:1, firstName:'Maja', lastName:'Mijić'},
    {id:2, firstName:'Roko', lastName:'Vidić'},
    {id:3, firstName:'Freddie', lastName:'Mercury'},
  ]);

  const changeFirstName = (e) =>{
    setFirstName(e.target.value)
  }
  const changeLastName = (e) =>{
    setLastName(e.target.value)
  }
  const addPeople = (e) =>{
    e.preventDefault();
    if(firstName && lastName){
    let person = {id:new Date().getTime().toString(), firstName, lastName}
    let newPeople =  [...people, person];
    setPeople(newPeople);
    setFirstName('');
    setLastName('');
    }
  }
  const removePerson = (id) =>{
    let newPeople = people.filter((person)=>id !== person.id);
    setPeople(newPeople);
  }

  return (
    <div className="App">
      <Input 
      changeFirstName = {changeFirstName} firstName={firstName} 
      changeLastName = {changeLastName} lastName={lastName}
      addPeople = {addPeople}
      />
      <div className='people-container'>
      <ShowPeople people={people} removePerson={removePerson}/>
      </div>
    </div>
  );
}

export default App;
