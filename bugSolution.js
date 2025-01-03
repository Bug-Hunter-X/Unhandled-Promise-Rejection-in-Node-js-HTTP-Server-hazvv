const http = require('http');

const server = http.createServer((req, res) => {
  fetchData()
    .then(data => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
});

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        reject(new Error('Failed to fetch data'));
      } else {
        resolve('Data fetched successfully');
      }
    }, 1000);
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});