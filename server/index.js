const app = require('./app.js');
const db = require('./db');
const port = 3733;

app.listen(port, () => {
  console.log(`Shortly is listening on ${port}`);
});
