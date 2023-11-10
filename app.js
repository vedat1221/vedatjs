

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Merhaba Ben Vedat Bu Benim İlk Sayfam');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Sayfa ${port} portunda çalışıyor.');
});
