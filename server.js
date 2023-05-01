const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const contactRoute = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
app.use(express.json());
app.use('/api/contacts', contactRoute)
app.use(errorHandler);
app.listen(port, () => {
    console.log(`listening port ${port}`);
})