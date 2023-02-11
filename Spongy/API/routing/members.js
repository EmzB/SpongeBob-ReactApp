import express from 'express';
const router = express.Router();

const users = [{
    name: "SpongeBob",
    age: 10,
    occupation: "cook",
    personality: "Extrovert",
    offences: "none he's a good boy!"
}]

router.get('/', (req,res) => {
    res.send(users)
}
)


export default router;