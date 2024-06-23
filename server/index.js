const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fromRoute = require("./routes/formRoute");
const authRoutes = require("./routes/authRoutes");
const updatePasswordRoute = require("./routes/updatePasswordRoute");
const app = express();
const PORT = process.env.PORT || 8000;
require('dotenv').config();


app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log("Connected to MongoDB"))
    .catch(err=>console.error("Error connecting to MongoDB",err));

app.use('/api', fromRoute);
app.use("/auth", authRoutes); 
app.use("/admin", updatePasswordRoute); 


app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});