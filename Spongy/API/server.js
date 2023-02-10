import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.listen(PORT, ()=> console.log(`Hey girl I'm running on: http://localhost:${PORT}`) )

app.get('/', (request,respond )=>{
respond.send("FullStack ? Easy peasy ")}
)