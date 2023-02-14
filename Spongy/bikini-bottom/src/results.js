import React from 'react'
const Results=({users})=> { //functional component
    return (
        <>
        {users.map((user) => {
            const {id, name, occupation, residence, age, pic}= user;
        return(
            <section key={id} className="citizens"> 
            <div className="card">
                 <div className="card-inner"> 
                 <div className="image">
                <img src={img}></img>
                 </div>
\                 <div className="details"> 
                 <p>NAME:{name}</p>
                 <p>OCCUPATION:{occupation}</p>
                 <p>AGE:{age}</p>
                 </div>
                 </div>


            </div>
            
             </section>
        )
        })}

    
    </>
    )
}
    export default Results;
    
