require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

// Setup of Routes
app.get("/", (req, res) => {res.send('Hello, beautiful people!')});
app.use("/users", require("./routes/userRoute"));
app.use("/messages", require("./routes/tweetRoute"));


// Declare Port 3001 as default
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Express Server started on port ${PORT}`));
