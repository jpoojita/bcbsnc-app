var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());

app.post('/upload', (req, res) => {
  res.send('Received a POST HTTP method');
  async () => {
    axios
      .post('https://imagehasbeenverified.example.endpoint', data)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        console.log(`Success with ${res}`);
      })
      .catch(err => {
        console.log(`Failed with ${err}`);
      });
  };
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
