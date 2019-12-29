const http = require('http')

http.createServer((req, res) => {
  if (req.url === '/sum') {
    let total = 0
    for (let i = 0; i < 10000000000000; i++) {
      total += i
    }
    res.end(`` + total)
  } else if (req.url === '/other') {
    res.end('bear sea horse')
  } else {
    res.end('NOT FOUND')
  }
}).listen(3000)