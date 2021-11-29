import React from "react";

const ShowPeople = ({people, removePerson}) =>{
    return <div>
        {people.map((person)=>{
            const {id, firstName, lastName} = person;
            return (
                <div key={id} className='person-container'>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <button onClick={()=>removePerson(id)} className='delete-btn'>Izbriši</button>
                </div>
            )})}
    </div>
}

export default ShowPeople;