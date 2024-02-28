// full_server/server.js

const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

// Use the routes defined in full_server/routes/index.js
app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
