const http = require('http')

const visits = new Map()

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plan' })

    const count = (visits.get(req.url) || 0) + 1

    visits.set(req.url, count)

    res.end(`Visit to ${req.url} #${count}`)
})

const PORT = 8000

server.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}/`);
})
