import React from "react";

const Input = ({changeFirstName, changeLastName, firstName, lastName, addPeople}) =>{
    return (
        <div className='container'>
        <form onSubmit={addPeople} className='form'>

        <section>
        <label htmlFor='firstName'>Ime: </label>
        <input 
        type='text' 
        name='firstName' 
        id='firstName' 
        onChange={changeFirstName} 
        value={firstName}/><br/>
        </section>

        <section>
        <label htmlFor='lastName'>Prezime: </label>
        <input 
        type='text' 
        name='lastName' 
        id='lastName' 
        onChange={changeLastName} 
        value={lastName}/><br/>
        </section>
        
        <button type='submit' className='submit-btn'>Dodaj</button>
        </form>
        </div>
    )
}
export default Input;