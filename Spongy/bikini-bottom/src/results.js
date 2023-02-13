import React from 'react'
const members = ({users})=> {
    return
    (
        <>
        {members.map((member) => {
            const {id,name,occupation,residence,age} = member;
            return
            <section key={id} >
                <h4> {id}</h4>
                <div>
             <p> name : {name}</p>
             <p> occupation : {occupation}</p>
             <p> residence : {residence}</p>


                </div>
            </section>

        }) }
        </>
    );
}
export default members;
