const express =require("express")
const dotenv = require("dotenv");
const ConnectDb = require("./Config/Config");

dotenv.config();
const PORT =process.env.PORT
const app =express()
app.use(express.json());

const cors = require("cors");
const Route = require("./Routes/Routers");
app.use(
  cors({
    origin: "*",
  })
);


app.use('/api/patient',Route)

const httpServer = require('http').createServer(app);
 httpServer.listen(PORT,async()=>{
try {
    await ConnectDb()
    console.log(`Server is sucessfully connected : http://localhost:${PORT}`);
} catch (error) {
    console.log("Server Lost",error);
}
 })
