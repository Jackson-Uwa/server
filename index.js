const express = require('express');
const path = require('path')
const connectDB = require('./config/db')

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    console.log(path.join(__filename));
    next();
}
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//app.use(logger)

app.use('/api/members', require('./routes/api/member'))
app.use('/api/cards', require('./routes/api/card'))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));