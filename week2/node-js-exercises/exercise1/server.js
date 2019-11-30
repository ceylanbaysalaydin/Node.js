const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

app.post('/blogs', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.end('ok');
});

app.put('/blogs', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('ok');
  } else {
    res.end('post does not exist');
  }
});
app.delete('/blogs/:title', (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.end('ok');
  } else {
    res.end('post does not exist');
  }
});

app.get('/blogs/:title', (req, res) => {
  const title = req.params.title;

  if (fs.existsSync(title)) {
    res.sendfile(title);
  } else {
    res.end('post does not exist');
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log('Server started at port: ', PORT));
