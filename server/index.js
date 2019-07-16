const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client')));

const PORT = process.env.PORT || 3000;

// An api endpoint that returns list of products
app.get('/api/products', (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.send(list);
  console.log('Sent list of items');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
