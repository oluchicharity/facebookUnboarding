const mongoose= require("mongoose")

const dbhost= "localhost:27017"

const dbname= "facebookUnboarding"

mongoose.connect(`mongodb://${dbhost}/${dbname}`).then(()=>{
  console.log(`connected to database successfully`)
}).catch((error)=>{
    console.log(error.message)
})