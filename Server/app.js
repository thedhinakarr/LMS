import express from "express"
import registrationRouter from "./controllers/registration.js"
import loginRouter from "./controllers/login.js"
import mainUserRouter from "./controllers/users/index.js"
import mainAdminRouter from "./controllers/admin/index.js"
import authRouter from "./controllers/auth.js"


const port = 6003;
const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    console.log((req.body))
    res.json({"message":"server is up."})
})

app.use("/api/register",registrationRouter)
app.use("/api/login",loginRouter)
app.use("/api/auth",authRouter)
app.use("/api/user",mainUserRouter)
app.use("/api/admin",mainAdminRouter)


app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})
