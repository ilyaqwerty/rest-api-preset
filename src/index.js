import express from 'express'
import someInstanceRoute from './routes/someInstance'
import cors from 'cors'
import './models';

const PORT = process.env.PORT || 8000;

const app = express();
// app.use(express.static('public'));
app.use(cors({origin: true, credentials: true}));

app.use('/instance', someInstanceRoute);

app.get('/', (req, res) => {
    res.status(200).send('hello')
});

app.listen(PORT, () => console.info(`Server has started on ${PORT}`));

