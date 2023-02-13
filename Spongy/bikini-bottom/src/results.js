import React from 'react'
const Results=({users})=> { //functional component
    return (
        <>
        {users.map((user) => {
            const {id, name, occupation, residence, age}= user;
        return(
            <div key={id} className="citizens"> 
            <h4>{name}</h4>
            
             </div>
        )
        })}

    
    </>
    )
}
    export default Results;
    
