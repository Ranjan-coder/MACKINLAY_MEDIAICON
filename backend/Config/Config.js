const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();
const url = 'mongodb+srv://ranjanchanda06:Ranjan@12345@cluster0.efrsnaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.set('strictQuery',false);

async function ConnectDb(){
    try{
        await mongoose.connect(url);
        console.log("mongoDb connected")
    }
    catch (error){
        console.log('Error while connecting to db',error)
    }
}
module.exports = ConnectDb