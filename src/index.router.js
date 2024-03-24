import connectDB from '../DB/connection.js'
import authRouter from './modules/auth/auth.router.js'
import globalErrorHandling from '../src/utils/errorHandling.js'
const initApp = (app, express) => {
    //convert Buffer Data
    app.use(express.json({}))
    //Setup API Routing 
  app.use(`/auth`, authRouter)
 

 

    app.all('*', (req, res, next) => {
        res.send("In-valid Routing Plz check url  or  method")
    })
    app.use(globalErrorHandling)
    connectDB()

}



export default initApp