const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client')));

const PORT = process.env.PORT || 3000;

//To prevent server routing - react-router will handle the routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
