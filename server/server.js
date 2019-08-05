require('newrelic');
const express = require('express');
const app = express();
const PORT = 8000;
const httpProxy = require('http-proxy');
const fetch = require('node-fetch');
const proxy = httpProxy.createProxyServer();

const photos = 'http://localhost:3001';
//const itemSummary = 'http://localhost:3002';
//const relatedProducts = 'http://localhost:3003';
//const reviews = 'http://localhost:3004';


app.use('/:id', express.static('./public'));

// app.all('/api/photos/:id', (req, res) => {
//   console.log('Connected to Photos!');
//   proxy.web(req, res, { target: photos })
// });


app.get('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  fetch(`http://127.0.0.1:3001/api/photos/${id}`)
    .then(fres => fres.json())
    .then(fres =>  {
      res.status(200).send(fres);
    })
    .catch((err)=>{
      console.log(err);
      res.status(404).end();
    })
});


app.post('/api/photos', (req, res) => {
  //console.log('post');
  const value = req.query.val;
  fetch(`http://127.0.0.1:3001/api/photos/?val=${value}`,{method: 'POST'})
    //.then(fres => fres.json())
    .then(() =>  {
      res.status(200).end();
    })
    .catch((err)=>{
      console.log(err);
      res.status(404).end();
    })

});

// app.put('/api/photos/:id', (req, res) => {
//   const value = req.query.val;
//   const { id } = req.params;

// });

// app.delete('/api/photos/:id', (req, res) => {
//   const { id } = req.params;

// });



// app.all('/api/product/:pid', (req, res) => {
//   proxy.web(req, res, { target: relatedProducts })
//   console.log('Connected to Related Products!');
// });

// app.all('/api/itemSummary/:id', (req, res) => {
//   proxy.web(req, res, { target: itemSummary })
//   console.log('Connected to Items!');
// });

// app.all('/api/reviews/:id', (req, res) => {
//   proxy.web(req, res, { target: reviews })
//   console.log('Connected to Reviews!');
// });

app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));

/*
proxy: 3000
mike: 3001
matt: 3002
garrett: 3003
galina: 3004
*/
