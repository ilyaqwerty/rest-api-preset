import express from 'express'
import cors from 'cors'

import temperature from './data/temperature'
import precipitation from './data/precipitation'

const PORT = process.env.PORT || 8000;

const app = express();
// app.use(express.static('public'));
app.use(cors({origin: true, credentials: true}));

app.get('/', (req, res) => {
    res.status(200).send('hello')
});

app.get('/temperature', (req, res) => {
    res.status(200).send(temperature)
});

app.get('/precipitation', (req, res) => {
    res.status(200).send(precipitation)
});

app.listen(PORT, () => console.info(`Server has started on ${PORT}`));

