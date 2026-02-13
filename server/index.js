const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const {url} = req; // req.url
    console.log(url)

    const fileName = url === '/' ? './public/index.html' : `./public/${url}`;

    try {
        const file = fs.readFileSync(fileName);
        res.write(file);
        res.end();
    } catch (error) {
        console.log('sorryy')
        res.write('sorry\n');
        res.end();
    }


});

console.log(`Server started at ${PORT}`);
server.listen(PORT);
