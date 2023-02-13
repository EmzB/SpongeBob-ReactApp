const results = ({users})=> {
    return
    (
        <>
        {products.map((user) => {
            const {id,name,occupation,residence,pic} = users;
            return
            <section key={id} >
                <h4> {id}</h4>
                <img src={image}> </img>
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