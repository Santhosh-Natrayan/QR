const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  fs.readFile('qr.txt', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file.');
    }
    res.setHeader('Content-Type', 'text/plain');
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
