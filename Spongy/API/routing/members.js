import express from 'express';
const router = express.Router();

const users = [
    {
    name: "SpongeBob",
    age: 37,
    occupation: "cook",
    personality: "Extrovert",
    offences: "none he's a good boy!"
},

{
name: "Plankton",
age: 10,
occupation: " Evil Genius",
personality: "Manipulator",
offences: "oh boy!"
}]

router.get('/', (req,res) => {
    res.send(users)
    console.log(users)
}
)


export default router;