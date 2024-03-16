const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes'); // Import routes

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes); // Mount routes at the root path

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
