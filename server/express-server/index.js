const fs = require('fs');
const express = require('express');
const server = express();

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');

server.get('/', (request, response) => response.write(home));
server.get('/about', (request, response) => response.write(about));

server.listen(80, () => console.log('Server is running on port 80'));
