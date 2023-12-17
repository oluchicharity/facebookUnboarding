const express= require("express")

const app= express()

app.use(express.json())

app.get("/api/v1",(req,res)=>{
res.send(`welcome to facebook`)
})
const facebookRouter= require("./router/router")

app.use("/api/v1", facebookRouter)

require("./dbconfig/config")

const port= 4040

app.listen(port,()=>{
  console.log(`listening on port:${port}`)
})
