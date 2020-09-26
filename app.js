require('dotenv').config()

const cors = require('cors')
const bodyParser = require('body-parser');
const app = require('express')();
const Routers = require('./routers');
const routers = require('./routers');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routers);
const port = process.env.PORT || 2000;

app.listen( port, () => {
    console.log(`server on ${port}`)
})