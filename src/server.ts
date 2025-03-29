import express from 'express';
import {apiFake} from './apiFake'
const server = express();

const port = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.get('/', (req, res) => {
    res.status(200).send(apiFake.users)
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});