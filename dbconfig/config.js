const mongoose= require("mongoose")

// const dbhost= "localhost:27017"

// const dbname= "facebookUnboarding"

mongoose.connect(`mongodb+srv://agbakwuruoluchi29:7sYTA5Zp4jzcuiDH@cluster0.wqncxtt.mongodb.net/`).then(()=>{
  console.log(`connected to database successfully`)
}).catch((error)=>{
    console.log(error.message)
})