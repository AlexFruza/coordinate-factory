const http = require('http');


const port = process.env.PORT || 3002;
const length = 1000;
const dataLength = 5;
const startDate = new Date('2012-01-01 00:00:00');

const getValues = (length) => {
    return Array(parseInt(Math.random() * length)).fill().map((value, i) => {
        return {
            value: parseInt(Math.random() * 10),
            date: startDate.setHours(startDate.getHours() + 1)
        }
    });
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(
        Array(dataLength).fill().map((item, index) => {
            return {
                name: `line-${index + 1}`,
                values: getValues(length)
            };
        })
    ));
    res.end();
});


server.listen(port, () => {
    console.log(`Server running at :${port}/`);
});