const express = require('express');
const app = express();

app.use(express.json());

app.post('/upload', (req, res) => {
  res.redirect('/');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
