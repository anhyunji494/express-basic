const http = require('http'); // http 객체 생성
let count = 0; 

const server = http.createServer((req, res) => {
    log(count)  // count +1
    res.statusCode = 200 // 응답 200
    res.setHeader('Content-Type', 'text/plain') // 헤더 설정
    res.write('hello\n') // 응답값
    setTimeout(() => {
        res.end('Node.js') // 2초 후 Node.js 출력
    }, 2000)
})

function log(count) {
    console.log((count +=1))
}

server.listen(8000, ()=>console.log('Hello Node.js')) // 8000번 포트 리슨