import express from "express"
import { authRoutes, categoryRoutes, marketRoutes, productRoutes, setUpRoutes } from "./routes/index.js"
import { config } from "./config/index.js"



const app = express()

app.use(express.json())
//MIDDLEWARE



app.use("/auth", authRoutes)
app.use("/setup", setUpRoutes)
app.use("/product", productRoutes)
app.use("/market", marketRoutes)
app.use("/category", categoryRoutes)



// ERROR MIDDLEWARE
app.use((err, req, res, next)=>{
  if(err){
    return res.status(400).send(err.message)
  }

  return  res.status(404).send("NOT FOUND")
})


app.listen(config.app.PORT,()=>{
  console.log(`Server running on port: ${config.app.PORT}`)
})





