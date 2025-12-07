const express=require("express");
const dotEnv=require('dotenv');
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const cors=require('cors')
const userRoutes=require('./routes/user');

dotEnv.config()

const app=express();
app.use(cors())
mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Database connected successfully!"))
    .catch((err)=>console.log(err))

app.use(express.json());

app.use(bodyParser.json())
app.use('/api/emp',userRoutes)

const PORT=process.env.PORT ||5000;

app.listen(PORT,()=>{
    console.log(`Server started and running at ${PORT}`);
})
