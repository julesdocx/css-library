const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const path = require('path')
const PORT = process.env.PORT || 5000;

const apiRoutes = require('./lib/routes/api');

const app = express();

const morgan = require('morgan');
app.use(morgan('tiny'));

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, `../documentation/build`)));

app.use('/api', apiRoutes);
app.use("*", async (req, res) => {
 // console.log(__dirname, path.join(__dirname, `../documentation/build`));
  res.sendFile(path.join(__dirname, `../documentation/build`));
});

app.use("/templates/:id", async (req, res) => {
  const id = req.params.id;
  console.log(__dirname, path.join(__dirname, `./template_${id}.html`));
  res.sendFile(path.join(__dirname, `../template_${id}.html`));
});


let server = http.Server(app);
server.listen(PORT, () => console.log(`API is running on localhost: ${PORT}`));

server.on('error', (error) => {
  console.log('httpServer error', error);
});
