import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
//set directory dirname 
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, './config/.env') })
import express from 'express'
import initApp from './src/index.router.js'
import cors from 'cors';

const app = express()
app.use(cors({
    origin: 'https://registration-61cc0.web.app'
  }));

  
// setup port and the baseUrl
const port = process.env.PORT || 5000
initApp(app ,express)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
