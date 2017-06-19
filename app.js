const express = require('express');
var loremIpsum = require('lorem-ipsum'),
  output = loremIpsum();
const app = express();

function generateIpsum (paragraphNumber) {
  paragraphNumber = Number(paragraphNumber);
  if (!paragraphNumber) {
    paragraphNumber = 3;
  }
  let output = loremIpsum ({
    count: paragraphNumber,
    units: 'paragraphs',
    format: 'html',
  });
  return output;
}

app.get('/lorem', function (req, res) {
  res.send(generateIpsum());
});

app.get('/lorem/:paragraphNumber', function (req, res) {
  res.send(generateIpsum(req.params.paragraphNumber));
});

app.listen(3000, function () {
  console.log('Express is listening for connections');
});
