import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import * as router from './api/router.mjs';

const app = express()
const port = 3000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use("/api", router.router)

app.listen(port, () => {console.log(`Api server started at http://localhost:${port}`)})