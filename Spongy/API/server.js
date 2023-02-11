import express from 'express';
import bodyParser from 'body-parser';
import memberRoutes from './routing/members.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/members', memberRoutes)



app.listen(PORT, ()=> console.log(`Hey girl I'm running on: http://localhost:${PORT}`) )

app.get('/', (req,res )=> { //this is the default route
respond.send(" Hi homepage is up!")}
)