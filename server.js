const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./dbconfig/dbConnection")
const app = express();
connectDB();
const port = process.env.PORT || 5000;
const contactRoute = require("./routes/contactRoutes");
const userRoute = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
app.use(express.json());
app.use('/api/contacts', contactRoute)
app.use('/api/user', userRoute)
app.use(errorHandler);
app.listen(port, () => {
    console.log(`listening port ${port}`);
})